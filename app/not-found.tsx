"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Heart, HeartCrack } from "lucide-react";

const decorations = [
    "left-[10%] top-[19%] text-[#FF7A59]",
    "right-[12%] top-[15%] text-[#FF4D6D]",
    "left-[16%] bottom-[17%] text-[#FF4D6D]",
    "right-[9%] bottom-[21%] text-[#FF7A59]",
];

export default function NotFound() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            aria-labelledby="not-found-title"
            className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-[radial-gradient(ellipse_at_15%_15%,rgba(255,122,89,0.11),transparent_30%),radial-gradient(ellipse_at_85%_80%,rgba(255,77,109,0.09),transparent_35%),linear-gradient(135deg,#fff9f7_0%,#fff_48%,#f6f8fc_100%)] px-5 py-12 sm:px-8 lg:py-16"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden"
            >
                {decorations.map((position, index) => (
                    <motion.span
                        key={position}
                        className={`absolute ${position}`}
                        animate={shouldReduceMotion ? undefined : { y: [0, -9, 0], opacity: [0.45, 0.8, 0.45] }}
                        transition={{
                            duration: 4 + index * 0.45,
                            delay: index * 0.25,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Heart
                            size={index % 2 === 0 ? 17 : 12}
                            fill="currentColor"
                            strokeWidth={1.5}
                        />
                    </motion.span>
                ))}
                <span className="absolute left-[28%] top-[13%] h-1.5 w-1.5 rounded-full bg-[#FF7A59]/50" />
                <span className="absolute right-[29%] bottom-[14%] h-2 w-2 rounded-full bg-[#102A56]/15" />
            </div>

            <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-[0.92fr_1.08fr] md:gap-5 lg:gap-10">
                <motion.div
                    className="text-center md:col-start-1 md:row-start-1 md:text-left"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#102A56]/10 bg-white/75 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.18em] text-[#102A56] shadow-[0_5px_20px_rgba(16,42,86,0.06)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A59]" />
                        DATEYATRA
                    </span>

                    <p className="mt-7 text-sm font-semibold tracking-[0.16em] text-[#C84B3A]">
                        PAGE 404
                    </p>
                    <h1
                        id="not-found-title"
                        className="mx-auto mt-3 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#fd9cbe] sm:text-5xl lg:mx-0 lg:text-[3.6rem]"
                    >
                        Oops! This Date Got Lost{" "}
                        <HeartCrack
                            aria-hidden="true"
                            className="inline-block h-8 w-8 align-[-0.12em] text-[#FF4D6D] sm:h-10 sm:w-10"
                            strokeWidth={2.2}
                        />
                    </h1>
                    <p className="mx-auto mt-5 max-w-md text-base leading-7 text-[#43516A] sm:text-lg sm:leading-8 lg:mx-0">
                        The page you&apos;re looking for went on a little date and never came
                        back.
                    </p>
                </motion.div>

                <motion.figure
                    className="relative mx-auto w-full max-w-xl md:col-start-2 md:row-span-2 md:row-start-1"
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
                    animate={
                        shouldReduceMotion
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 1, scale: 1, y: [0, -7, 0] }
                    }
                    transition={
                        shouldReduceMotion
                            ? { duration: 0.5 }
                            : {
                                opacity: { duration: 0.6 },
                                scale: { duration: 0.6 },
                                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                            }
                    }
                >
                    <Image
                        src="/image/not.png"
                        alt="DateYatra 404 illustration with a lost laptop, plants, books, coffee, and a little robot"
                        width={900}
                        height={700}
                        priority
                        sizes="(max-width: 767px) 92vw, (max-width: 1200px) 48vw, 570px"
                        className="h-auto w-full object-contain drop-shadow-[0_20px_32px_rgba(16,42,86,0.10)]"
                    />
                </motion.figure>

                <motion.div
                    className="flex justify-center md:col-start-1 md:row-start-2 md:justify-start"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Link
                        href="/"
                        className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[#FFB09C] px-6 py-3 text-sm font-semibold text-[#102A56] shadow-[0_10px_24px_rgba(255,122,89,0.20)] transition-[transform,background-color,box-shadow] hover:bg-[#FF9B82] hover:shadow-[0_13px_28px_rgba(255,122,89,0.26)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C84B3A] motion-safe:hover:scale-[1.03]"
                    >
                        <ArrowLeft size={17} aria-hidden="true" />
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}