"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
    ArrowUpRight,
    Globe,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Sparkles,
    Send,
    Heart,
    type LucideIcon,
} from "lucide-react";

import Logo from "@/public/image/logo.png";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "Explore Places", href: "/listed" },
    { label: "Contact Us", href: "/contact" },
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
    const [email, setEmail] = React.useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail("");
            // Add your newsletter action / API call here
        }
    };

    return (
        <footer className="relative border-t border-slate-200/80 bg-[#fff9fa] text-slate-700 overflow-hidden">
            {/* Top Multi-color Glow Line */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-500" />

            {/* Background Glow Accents */}
            <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-rose-100/50 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">

                {/* TOP NEWSLETTER BANNER (Great for public SaaS conversion) */}
                <div className="mb-14 rounded-3xl border border-rose-100 bg-gradient-to-r from-rose-50/60 via-white to-amber-50/40 p-6 sm:p-8 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-100/70 px-3 py-1 text-xs font-semibold text-rose-600 mb-2">
                                <Sparkles size={12} />
                                Date Ideas & Updates
                            </div>
                            <h3 className="text-xl font-bold text-[#102A56] sm:text-2xl">
                                Never miss a romantic spot in Kathmandu Valley
                            </h3>
                            <p className="mt-1 text-sm text-slate-500">
                                Get curated date itineraries, restaurant openings, and special offers delivered to your inbox.
                            </p>
                        </div>

                        <div className="lg:col-span-5">
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                                />
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#102A56] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#1b3b73]"
                                >
                                    <span>{subscribed ? "Subscribed!" : "Subscribe"}</span>
                                    <Send size={15} />
                                </button>
                            </form>
                            {subscribed && (
                                <p className="mt-2 text-xs font-medium text-emerald-600 animate-fadeIn">
                                    🎉 Thank you! You are on the VIP date list.
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* MAIN FOOTER NAVIGATION GRID */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                                <Image
                                    src={Logo}
                                    alt="DateYatra Logo"
                                    width={36}
                                    height={36}
                                    priority
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex items-center whitespace-nowrap leading-none">
                                <span className="text-[26px] font-extrabold tracking-tight text-[#102A56]">
                                    Date
                                </span>
                                <span className="bg-gradient-to-r from-[#FF7A59] via-[#FF6B6B] to-[#FF4D6D] bg-clip-text text-[26px] font-extrabold tracking-tight text-transparent">
                                    Yatra
                                </span>
                            </div>
                        </div>

                        <p className="text-sm leading-relaxed text-slate-600 max-w-sm">
                            DateYatra helps couples plan memorable experiences, discover romantic spaces across Kathmandu, Lalitpur, and Bhaktapur, and celebrate love seamlessly.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-2">
                            {socials.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label={label}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600 hover:-translate-y-0.5"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                            Quick Links
                        </h4>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            {quickLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <Link href={href} className="text-slate-600 transition hover:text-rose-600 font-medium">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                            Support
                        </h4>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            {supportLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <Link href={href} className="text-slate-600 transition hover:text-rose-600 font-medium">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="lg:col-span-4 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                            Contact Us
                        </h4>

                        <div className="space-y-3 text-sm text-slate-600">
                            <a href="tel:+9779822683177" className="flex items-center gap-3 transition hover:text-rose-600">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
                                    <Phone size={15} />
                                </div>
                                <span className="font-medium">(+977) 9822683177</span>
                            </a>

                            <a href="mailto:dateyatra@gmail.com" className="flex items-center gap-3 transition hover:text-rose-600">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
                                    <Mail size={15} />
                                </div>
                                <span className="font-medium">dateyatra@gmail.com</span>
                            </a>

                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
                                    <MapPin size={15} />
                                </div>
                                <span className="font-medium">Bhaktapur, Nepal</span>
                            </div>
                        </div>

                        <div className="pt-1">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-rose-700"
                            >
                                Book a Call / Inquiry
                                <ArrowUpRight size={14} />
                            </Link>
                        </div>
                    </div>

                </div>

                {/* BOTTOM COPYRIGHT & BRAND STATEMENT */}
                <div className="mt-14 border-t border-slate-200/80 pt-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-slate-500 font-medium">
                            © {new Date().getFullYear()} DateYatra. All rights reserved.
                        </p>
                        <p className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                            Made with <Heart size={13} className="text-rose-500 fill-current" /> for memorable moments in Nepal.
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}