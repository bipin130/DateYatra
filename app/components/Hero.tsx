"use client";

import Link from "next/link";
import Image from "next/image";
import {
    CalendarDays,
    Gift,
    Heart,
    Hotel,
    MapPin,
    MessageCircle,
    PartyPopper,
    Utensils,
    ArrowRight,
    Sparkles,
    Check,
} from "lucide-react";

type Feature = {
    title: string;
    subtitle: string;
    icon: React.ElementType;
};

const features: Feature[] = [
    { title: "Table Booking", subtitle: "Find your perfect table", icon: Utensils },
    { title: "Food Selection", subtitle: "Choose what you both love", icon: Utensils },
    { title: "Room Booking", subtitle: "Comfortable stays", icon: Hotel },
    { title: "Virtual Gift", subtitle: "Send something special", icon: Gift },
    { title: "Celebrations", subtitle: "Birthday & anniversary", icon: PartyPopper },
    { title: "Nearby Places", subtitle: "Explore places together", icon: MapPin },
    { title: "Quick Chat", subtitle: "Stay connected", icon: MessageCircle },
    { title: "Time Management", subtitle: "Plan every moment", icon: CalendarDays },
];

function FeatureCard({ feature }: { feature: Feature }) {
    const Icon = feature.icon;

    return (
        <div className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-3.5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#d45e54]">
                <Icon size={19} strokeWidth={1.8} />
            </div>
            <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-[#303b37]">{feature.title}</p>
                <p className="mt-0.5 truncate text-[11px] text-[#958983]">{feature.subtitle}</p>
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] overflow-hidden bg-[#fffaf7] py-12 lg:py-20">
            {/* Background Glow Orbs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#ffe4dc]/60 blur-3xl" />
                <div className="absolute -bottom-10 right-0 h-[450px] w-[450px] rounded-full bg-[#ffe9ee]/60 blur-3xl" />
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fff1df]/60 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">

                    {/* LEFT COLUMN: Text & Actions */}
                    <div className="lg:col-span-6 flex flex-col items-start text-left">
                        {/* Top Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f0d9d2] bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-50 text-[#d45e54]">
                                <Sparkles size={13} />
                            </span>
                            <span className="text-xs font-medium text-[#786c67]">
                                Plan something worth remembering
                            </span>
                        </div>

                        {/* Brand Header */}
                        <div className="mb-4">
                            <div className="flex items-center gap-2">
                                <span className="text-3xl font-extrabold tracking-tight text-[#263d36] sm:text-4xl">
                                    Date
                                </span>
                                <span className="bg-gradient-to-r from-[#df715d] via-[#d45d61] to-[#c9506a] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
                                    Yatra
                                </span>
                            </div>
                            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a08e87]">
                                Plan · Connect · Celebrate
                            </p>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#273934] sm:text-5xl xl:text-6xl">
                            Your next date <br className="hidden sm:inline" />
                            <span className="bg-gradient-to-r from-[#cf6055] to-[#d76b72] bg-clip-text text-transparent">
                                starts here.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-5 max-w-xl text-base leading-relaxed text-[#756b66] sm:text-lg">
                            Discover places, choose food, book a room, send a gift, and create a complete date plan without jumping between different apps.
                        </p>

                        {/* Call to Actions */}
                        <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
                            <Link
                                href="/create-date"
                                className="group flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-xl bg-[#30473f] px-7 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#263a34] hover:shadow-xl"
                            >
                                Create your date
                                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="/Listed"
                                className="flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-xl border border-[#dfd1cb] bg-white/80 px-7 py-4 text-sm font-semibold text-[#46534e] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cdbbb3] hover:bg-white"
                            >
                                Explore places
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-[#f0e4e0] w-full">
                            <div className="flex items-center gap-2">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                                    <Check size={13} />
                                </div>
                                <span className="text-xs font-medium text-[#80746f]">Easy planning</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-50 text-[#c85c54]">
                                    <Heart size={12} fill="currentColor" />
                                </div>
                                <span className="text-xs font-medium text-[#80746f]">Made for couples</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                                    <Sparkles size={12} />
                                </div>
                                <span className="text-xs font-medium text-[#80746f]">Memorable moments</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Hero Visual & Floating Feature Cards */}
                    <div className="lg:col-span-6 relative w-full max-w-lg mx-auto lg:max-w-none">
                        <div className="relative">

                            {/* Main Image Frame */}
                            <div className="relative overflow-hidden rounded-[32px] border border-white/90 bg-white/60 p-2.5 shadow-2xl backdrop-blur-md">
                                <div className="relative h-[440px] sm:h-[500px] lg:h-[540px] w-full overflow-hidden rounded-2xl">
                                    <Image
                                        src="/image/herobg.jpg"
                                        alt="Couple enjoying a romantic date"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover object-center"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e2925]/75 via-transparent to-transparent" />

                                    {/* Top Floating Mini Card */}
                                    <div className="absolute left-4 top-4 rounded-2xl border border-white/40 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
                                        <div className="flex items-center gap-2.5">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-[#d45e54]">
                                                <Heart size={14} fill="currentColor" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-[#37433f]">DateYatra</p>
                                                <p className="text-[10px] text-[#958983]">Your date, your way</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Banner Inside Image */}
                                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-[#25332e]/85 p-4 text-white shadow-xl backdrop-blur-md">
                                        <div className="flex items-center justify-between gap-4">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-white/60">
                                                    Plan together
                                                </p>
                                                <h3 className="mt-0.5 text-lg font-semibold">
                                                    Make tonight special.
                                                </h3>
                                                <p className="text-xs text-white/70">
                                                    From the first reservation to the final memory.
                                                </p>
                                            </div>
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d56359] text-white shadow-md">
                                                <Heart size={18} fill="currentColor" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Absolute Floating Feature Badges */}
                            <div className="absolute -left-6 top-[20%] hidden xl:block w-52 z-20">
                                <FeatureCard feature={features[0]} />
                            </div>
                            <div className="absolute -right-6 top-[35%] hidden xl:block w-52 z-20">
                                <FeatureCard feature={features[3]} />
                            </div>
                            <div className="absolute -left-8 bottom-[25%] hidden xl:block w-52 z-20">
                                <FeatureCard feature={features[5]} />
                            </div>
                            <div className="absolute -right-6 bottom-[12%] hidden xl:block w-52 z-20">
                                <FeatureCard feature={features[6]} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet Feature Grid Drawer */}
                <div className="mt-12 xl:hidden">
                    <div className="rounded-2xl border border-[#eaded8] bg-white/90 p-5 shadow-lg backdrop-blur">
                        <div className="mb-4 flex items-center justify-between">
                            <div>
                                <h3 className="text-sm font-bold text-[#35423d]">
                                    Everything for your date
                                </h3>
                                <p className="text-xs text-[#978983]">
                                    Plan it all in one convenient place
                                </p>
                            </div>
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-[#d45e54]">
                                <Heart size={16} fill="currentColor" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {features.map((feature) => (
                                <FeatureCard key={feature.title} feature={feature} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}