"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";

import Logo from "@/public/image/logo.png";

const STORAGE_KEY = "dateyatra_age_verified_v1";
const DEFAULT_EXPIRY_DAYS = 365;
const ONE_DAY_IN_SECONDS = 24 * 60 * 60;

type AgeVerificationRecord = {
    confirmed: boolean;
    timestamp: number;
    expirySeconds: number;
};

const getNowInSeconds = () => Math.floor(Date.now() / 1000);
const getSecondsFromDays = (days: number) => days * ONE_DAY_IN_SECONDS;

const isRecordLike = (value: unknown): value is Record<string, unknown> =>
    typeof value === "object" && value !== null;

const readStoredVerification = (): AgeVerificationRecord | null => {
    if (typeof window === "undefined") return null;

    try {
        const rawValue = window.localStorage.getItem(STORAGE_KEY);
        if (!rawValue) return null;

        const parsed = JSON.parse(rawValue);
        if (!isRecordLike(parsed)) return null;

        const { confirmed, timestamp, expirySeconds } = parsed;

        if (
            typeof confirmed !== "boolean" ||
            typeof timestamp !== "number" ||
            typeof expirySeconds !== "number"
        ) {
            return null;
        }

        return { confirmed, timestamp, expirySeconds };
    } catch {
        return null;
    }
};

const isVerificationStillValid = (record: AgeVerificationRecord | null): boolean => {
    if (!record || !record.confirmed) return false;

    return getNowInSeconds() < record.timestamp + record.expirySeconds;
};

const saveVerification = (expiryDays = DEFAULT_EXPIRY_DAYS) => {
    const record: AgeVerificationRecord = {
        confirmed: true,
        timestamp: getNowInSeconds(),
        expirySeconds: getSecondsFromDays(expiryDays),
    };

    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    } catch {
    }
};

export default function AgeVerificationPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const storedVerification = readStoredVerification();
        if (isVerificationStillValid(storedVerification)) return;

        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsVisible(false);
            }
        };

        document.addEventListener("keydown", handleEscapeKey);
        return () => document.removeEventListener("keydown", handleEscapeKey);
    }, [isVisible]);

    const handleConfirm = () => {
        saveVerification(DEFAULT_EXPIRY_DAYS);
        setIsVisible(false);
    };

    const handleExit = () => {
        window.location.assign("https://www.google.com");
    };

    if (!isVisible) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="age-dialog-title"
            aria-describedby="age-dialog-desc"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
        >
            <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_rgba(2,6,23,0.35)]">
                <div className="h-2 w-full bg-linear-to-r from-rose-400 via-amber-400 to-emerald-400" />

                <div className="px-6 py-7 sm:px-8 sm:py-9">
                    <div className="flex justify-center">
                        <div className="flex items-center gap-2">
                            <Image
                                src={Logo}
                                alt="DateYatra"
                                width={44}
                                height={44}
                                priority
                                className="object-contain"
                            />

                            <div className="flex items-center whitespace-nowrap leading-none">
                                <span className="text-[23px] font-extrabold tracking-[-1px] text-[#102A56] sm:text-[32px] sm:tracking-[-1.8px]">
                                    Date
                                </span>
                                <span className="bg-linear-to-r from-[#FF7A59] via-[#FF6B6B] to-[#FF4D6D] bg-clip-text text-[23px] font-extrabold tracking-[-1px] text-transparent sm:text-[32px] sm:tracking-[-1.8px]">
                                    Yatra
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <h2 id="age-dialog-title" className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                            Welcome to DateYatra
                        </h2>

                        <p id="age-dialog-desc" className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
                            DateYatra is a community for adults. Please confirm you are at least 18 years old to
                            continue. We care about safety and respectful experiences — this helps keep the space
                            welcoming for everyone.
                        </p>
                    </div>

                    <div className="mt-6 flex items-start gap-3 rounded-lg bg-slate-50 p-4">
                        <ShieldCheck size={20} className="mt-0.5 shrink-0 text-rose-600" />
                        <p className="text-sm text-slate-600">
                            By continuing you agree to follow our community guidelines and use the service
                            responsibly. Your confirmation is stored locally and never shared publicly.
                        </p>
                    </div>

                    <div className="mt-7 grid gap-3">
                        <button
                            type="button"
                            onClick={handleConfirm}
                            className="w-full rounded-xl bg-rose-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                        >
                            Yes — I am 18 or older
                        </button>

                        <button
                            type="button"
                            onClick={handleExit}
                            className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
                        >
                            No — I am under 18
                        </button>
                    </div>

                    <p className="mt-5 text-center text-xs text-slate-400">
                        You can change this later by clearing your browser data for this site.
                    </p>
                </div>
            </div>
        </div>
    );
}

