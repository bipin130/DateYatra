"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, Eye, EyeOff, Heart, LockKeyhole, Mail, User, Sparkles } from "lucide-react";
import boy from "@/public/image/boy.png";
import girl from "@/public/image/girl.png";
import Logo from "@/public/image/logo.png";

type AuthMode = "login" | "signup";
export default function CoupleAuth() {
    const [met, setMet] = useState(false);
    const [showAuth, setShowAuth] = useState(false);
    const [mode, setMode] = useState<AuthMode>("login");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [remember, setRemember] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        const meetTimer = setTimeout(() => setMet(true), 2800);
        const authTimer = setTimeout(() => setShowAuth(true), 3900);
        return () => {
            clearTimeout(meetTimer);
            clearTimeout(authTimer);
        };
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (mode === "signup") {
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }
            console.log({ name, email, password });
            return;
        }
        console.log({ email, password, remember });
    };

    const changeMode = (newMode: AuthMode) => {
        setMode(newMode);
        setShowPassword(false);
        setShowConfirmPassword(false);
    };

    const restartAnimation = () => {
        setShowAuth(false);
        setMet(false);
        setTimeout(() => setMet(true), 2800);
        setTimeout(() => setShowAuth(true), 3900);
    };

    return (
        <main className="relative min-h-svh w-full overflow-hidden bg-white text-slate-900">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-100/60 blur-[130px]" />
                <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-100/50 blur-[100px]" />
                <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-purple-100/50 blur-[110px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.04)_1px,transparent_1px)] bg-size-[34px_34px]" />
            </div>

            <div className={`absolute left-1/2 top-[7%] z-20 w-full max-w-xl -translate-x-1/2 px-5 text-center transition-all duration-1000 ${met ? "-translate-y-5 opacity-0" : "translate-y-0 opacity-100"}`}>
                <div className="mb-4 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                    <Sparkles size={13} />
                    <span>A new connection</span>
                    <Sparkles size={13} />
                </div>

                <div className="mb-5 flex justify-center">
                    <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-xl">
                        <Image src={Logo} alt="DateYatra logo" width={32} height={32} priority className="h-8 w-8 object-contain" />
                        <div className="flex flex-col leading-none">
                            <div className="flex items-end whitespace-nowrap">
                                <span className="text-[17px] font-extrabold tracking-[-1px] text-slate-900 sm:text-[20px]">ate</span>
                                <span className="bg-linear-to-r from-[#FF7A59] via-[#FF6B6B] to-[#FF4D6D] bg-clip-text text-[17px] font-extrabold tracking-[-1px] text-transparent sm:text-[20px]">Yatra</span>
                            </div>
                            <span className="mt-0.5 pl-px text-[5px] font-semibold uppercase tracking-[0.42em] text-slate-400 sm:text-[6px]">Software</span>
                        </div>
                    </div>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    Two paths.
                    <br />
                    <span className="bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">One connection.</span>
                </h1>

                <p className="mt-4 text-xs text-slate-400 sm:text-sm">Sometimes the right person is just a step away.</p>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                <div className={`pointer-events-none absolute left-[5%] top-1/2 h-70 w-70 -translate-y-1/2 rounded-full bg-pink-100 blur-[100px] transition-all duration-1800 ${met ? "opacity-40" : "opacity-70"}`} />
                <div className={`pointer-events-none absolute right-[5%] top-1/2 h-70 w-70 -translate-y-1/2 rounded-full bg-purple-100 blur-[100px] transition-all duration-1800 ${met ? "opacity-40" : "opacity-70"}`} />

                <div className={`absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${met ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
                    <div className="relative flex h-24 w-24 items-center justify-center">
                        <div className="absolute inset-0 animate-ping rounded-full bg-pink-200/40" />
                        <div className="absolute inset-2 rounded-full border border-pink-200 bg-white/80 shadow-lg backdrop-blur-md" />
                        <Heart size={30} fill="currentColor" className="relative z-10 text-pink-500 drop-shadow-[0_4px_12px_rgba(236,72,153,0.25)]" />
                        <Sparkles size={13} className="absolute -right-1 top-2 animate-pulse text-orange-400" />
                        <Sparkles size={11} className="absolute -bottom-1 left-2 animate-pulse text-pink-400" />
                    </div>
                </div>

                <div className={`absolute left-0 top-1/2 z-20 -translate-y-1/2 transition-all duration-2800 ease-[cubic-bezier(.16,1,.3,1)] ${met ? "translate-x-[calc(50vw-150px)]" : "translate-x-[8vw]"}`}>
                    <div className="relative flex flex-col items-center">
                        <div className="relative flex h-28 w-28 items-end justify-center sm:h-36 sm:w-36">
                            <Image src={boy} alt="DateYatra male character" width={150} height={150} priority className="h-full w-full object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.18)]" />
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-sm font-semibold text-slate-800">Him</p>
                            <p className="mt-1 text-[10px] text-slate-400">Looking for someone special</p>
                        </div>
                        <Heart size={13} className="absolute -right-3 top-4 animate-bounce text-blue-400" fill="currentColor" />
                    </div>
                </div>

                <div className={`absolute right-0 top-1/2 z-20 -translate-y-1/2 transition-all duration-2800 ease-[cubic-bezier(.16,1,.3,1)] ${met ? "-translate-x-[calc(50vw-150px)]" : "translate-x-[-8vw]"}`}>
                    <div className="relative flex flex-col items-center">
                        <div className="relative flex h-28 w-28 items-end justify-center sm:h-36 sm:w-36">
                            <Image src={girl} alt="DateYatra female character" width={150} height={150} priority className="h-full w-full object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.18)]" />
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-sm font-semibold text-slate-800">Her</p>
                            <p className="mt-1 text-[10px] text-slate-400">Looking for someone special</p>
                        </div>
                        <Heart size={13} className="absolute -left-3 top-4 animate-bounce text-pink-400" fill="currentColor" />
                    </div>
                </div>

                <div className={`absolute left-1/2 top-1/2 h-px -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-transparent via-pink-300 to-transparent transition-all duration-1000 ${met ? "w-75 opacity-100" : "w-0 opacity-0"}`} />
            </div>

            <div className={`absolute bottom-[8%] left-1/2 z-20 -translate-x-1/2 text-center transition-all duration-1000 ${met ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"}`}>
                <div className="flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-300">
                    <span className="h-px w-8 bg-slate-200" />
                    <span>Wait for the moment</span>
                    <span className="h-px w-8 bg-slate-200" />
                </div>
            </div>

            <div className={`fixed inset-0 z-100 flex items-center justify-center bg-slate-900/25 px-4 backdrop-blur-md transition-all duration-700 ${showAuth ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
                <section className={`relative max-h-[92vh] w-full max-w-107.5 overflow-y-auto rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_30px_100px_rgba(15,23,42,0.18)] transition-all duration-700 ${showAuth ? "translate-y-0 scale-100" : "translate-y-10 scale-95"}`}>
                    <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-pink-100/70 blur-[70px]" />

                    <button type="button" onClick={() => setShowAuth(false)} className="absolute right-5 top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-400 transition hover:bg-slate-200 hover:text-slate-700">
                        ×
                    </button>

                    <div className="relative px-4 pb-5 pt-5 text-center">
                        <div className="mx-auto mb-4 flex h-12 w-fit items-center justify-center">
                            <Image src={Logo} alt="DateYatra logo" width={56} height={56} priority className="h-11 w-11 object-contain sm:h-14 sm:w-14" />
                            <div className="flex flex-col leading-none">
                                <div className="flex items-end whitespace-nowrap">
                                    <span className="text-[23px] font-extrabold tracking-[-1px] text-slate-900 sm:text-[32px] sm:tracking-[-1.8px]">ate</span>
                                    <span className="bg-linear-to-r from-[#FF7A59] via-[#FF6B6B] to-[#FF4D6D] bg-clip-text text-[23px] font-extrabold tracking-[-1px] text-transparent sm:text-[32px] sm:tracking-[-1.8px]">Yatra</span>
                                </div>
                                <span className="mt-1 pl-px text-[7px] font-semibold uppercase tracking-[0.42em] text-slate-400 sm:text-[8px] sm:tracking-[0.48em]">Software</span>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Your journey starts here</h2>
                        <p className="mt-2 text-[11px] leading-relaxed text-slate-400">Create your account or sign in to continue your journey.</p>
                    </div>

                    <div className="relative flex gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1">
                        <button type="button" onClick={() => changeMode("login")} className={`flex-1 rounded-lg px-3 py-2.5 text-xs transition-all ${mode === "login" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-slate-700"}`}>Sign In</button>
                        <button type="button" onClick={() => changeMode("signup")} className={`flex-1 rounded-lg px-3 py-2.5 text-xs transition-all ${mode === "signup" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-slate-700"}`}>Create Account</button>
                    </div>

                    <div className="relative px-2 pb-2 pt-6">
                        <form onSubmit={handleSubmit} className="space-y-3">
                            {mode === "signup" && (
                                <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3.5 transition-all focus-within:border-pink-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-pink-100">
                                    <User size={17} className="shrink-0 text-slate-400" />
                                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Full Name" required className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400" />
                                </div>
                            )}

                            <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3.5 transition-all focus-within:border-pink-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-pink-100">
                                <Mail size={17} className="shrink-0 text-slate-400" />
                                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email Address" required className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400" />
                            </div>

                            <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3.5 transition-all focus-within:border-pink-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-pink-100">
                                <LockKeyhole size={17} className="shrink-0 text-slate-400" />
                                <input type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" required className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-400 transition hover:text-slate-700">
                                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                                </button>
                            </div>

                            {mode === "signup" && (
                                <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3.5 transition-all focus-within:border-pink-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-pink-100">
                                    <LockKeyhole size={17} className="shrink-0 text-slate-400" />
                                    <input type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Confirm Password" required className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400" />
                                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-slate-400 transition hover:text-slate-700">
                                        {showConfirmPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                                    </button>
                                </div>
                            )}

                            <div className="flex items-center justify-between py-1 text-[10px] text-slate-400">
                                <button type="button" onClick={() => setRemember(!remember)} className="flex items-center gap-2">
                                    <span className={`flex h-4 w-4 items-center justify-center rounded-sm border transition ${remember ? "border-pink-500 bg-pink-500 text-white" : "border-slate-300"}`}>
                                        {remember && <Check size={11} />}
                                    </span>
                                    Remember me
                                </button>

                                {mode === "login" && (
                                    <button type="button" className="text-pink-500 transition hover:text-pink-600">Forgot password?</button>
                                )}
                            </div>

                            <button type="submit" className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-500 text-sm font-bold text-white shadow-[0_10px_30px_rgba(217,70,239,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(217,70,239,0.25)]">
                                <span>{mode === "login" ? "Sign In" : "Create Account"}</span>
                                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </form>

                        <div className="my-5 flex items-center gap-3 text-[8px] tracking-[0.15em] text-slate-300">
                            <div className="h-px flex-1 bg-slate-200" />
                            <span>OR CONTINUE WITH</span>
                            <div className="h-px flex-1 bg-slate-200" />
                        </div>
                        <p className="mt-5 text-center text-[10px] text-slate-400">
                            {mode === "login" ? "Don't have an account?" : "Already have an account?"}
                            <button type="button" onClick={() => changeMode(mode === "login" ? "signup" : "login")} className="ml-1 text-pink-500 transition hover:text-pink-600">
                                {mode === "login" ? "Create account" : "Sign in"}
                            </button>
                        </p>
                    </div>
                </section>
            </div>

            {showAuth && (
                <button type="button" onClick={restartAnimation} className="fixed bottom-5 left-1/2 z-110 -translate-x-1/2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-medium text-slate-400 shadow-sm backdrop-blur-xl transition hover:bg-slate-50 hover:text-slate-700">
                    Replay story
                </button>
            )}
        </main>
    );
}