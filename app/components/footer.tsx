"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    Globe,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Sparkles,
    type LucideIcon,
} from "lucide-react";

import Logo from "@/public/image/logo.png";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "Listed", href: "/listed" },
    { label: "Contact", href: "/contact" },
];

const supportLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Community Guide", href: "/guide" },
    { label: "Help Center", href: "/help" },
];

const socials: { label: string; href: string; icon: LucideIcon }[] = [
    { label: "Facebook", href: "https://facebook.com", icon: Globe },
    { label: "Instagram", href: "https://instagram.com", icon: Sparkles },
    { label: "WhatsApp", href: "https://wa.me/9779822683177", icon: MessageCircle },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-slate-200 bg-[#fff9fa] text-slate-700">
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-rose-400 via-amber-400 to-emerald-400" />

            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                                <Image
                                    src={Logo}
                                    alt="DateYatra"
                                    width={40}
                                    height={40}
                                    priority
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex items-center whitespace-nowrap leading-none">
                                <span className="text-[26px] font-extrabold tracking-[-1px] text-[#102A56]">
                                    Date
                                </span>
                                <span className="bg-linear-to-r from-[#FF7A59] via-[#FF6B6B] to-[#FF4D6D] bg-clip-text text-[26px] font-extrabold tracking-[-1px] text-transparent">
                                    Yatra
                                </span>
                            </div>
                        </div>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
                            DateYatra helps people plan memorable experiences, discover romantic spaces,
                            and celebrate love with confidence, ease, and joy.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            {socials.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                            Quick Links
                        </h3>
                        <ul className="mt-5 space-y-3 text-sm text-slate-600">
                            {quickLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <Link href={href} className="transition hover:text-rose-600">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                            Support
                        </h3>
                        <ul className="mt-5 space-y-3 text-sm text-slate-600">
                            {supportLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <Link href={href} className="transition hover:text-rose-600">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                            Contact Us
                        </h3>

                        <div className="mt-5 space-y-4 text-sm text-slate-600">
                            <a href="tel:+9779822683177" className="flex items-start gap-3 transition hover:text-rose-600">
                                <Phone size={18} className="mt-0.5 shrink-0 text-rose-500" />
                                <span>(+977) 9822683177</span>
                            </a>

                            <a href="mailto:dateyatra@gmail.com" className="flex items-start gap-3 transition hover:text-rose-600">
                                <Mail size={18} className="mt-0.5 shrink-0 text-rose-500" />
                                <span>dateyatra@gmail.com</span>
                            </a>

                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="mt-0.5 shrink-0 text-rose-500" />
                                <span>Bhaktapur, Nepal</span>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700"
                        >
                            Book a Call
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>

                <div className="mt-10 border-t border-slate-200 pt-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-slate-500">© 2026 DateYatra. All rights reserved.</p>
                        <p className="text-sm text-slate-500">
                            Made with <span className="text-rose-500">❤</span> for memorable moments.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
