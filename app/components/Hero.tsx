
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
        <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 p-3 shadow-[0_12px_35px_rgba(72,43,37,0.10)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(72,43,37,0.15)]">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0ec] text-[#d45e54]">
                <Icon size={19} strokeWidth={1.8} />
            </div>

            <div className="min-w-0">
                <p className="truncate text-[12px] font-semibold text-[#303b37]">{feature.title}</p>
                <p className="mt-0.5 truncate text-[10px] text-[#958983]">{feature.subtitle}</p>
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#fffaf7]">
            <div className="absolute inset-0">
                <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#ffe4dc]/60 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#ffe9ee]/60 blur-3xl" />
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fff1df]/60 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto grid min-h-screen max-w-[1450px] items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:py-12 xl:gap-16">
                <div className="max-w-[610px]">
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#f0d9d2] bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fff0ec] text-[#d45e54]">
                            <Sparkles size={13} />
                        </span>
                        <span className="text-[11px] font-medium text-[#786c67]">
                            Plan something worth remembering
                        </span>
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center leading-none">
                            <span className="text-[27px] font-extrabold tracking-[-1.5px] text-[#263d36] sm:text-[32px]">
                                Date
                            </span>
                            <span className="bg-gradient-to-r from-[#df715d] via-[#d45d61] to-[#c9506a] bg-clip-text text-[27px] font-extrabold tracking-[-1.5px] text-transparent sm:text-[32px]">
                                Yatra
                            </span>
                        </div>
                        <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#a08e87]">
                            Plan · Connect · Celebrate
                        </p>
                    </div>

                    <h1 className="max-w-[600px] text-[48px] font-semibold leading-[1.02] tracking-[-2.8px] text-[#273934] sm:text-[62px] lg:text-[68px]">
                        Your next date
                        <span className="block bg-gradient-to-r from-[#cf6055] to-[#d76b72] bg-clip-text text-transparent">
                            starts here.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-[520px] text-[15px] leading-7 text-[#756b66] sm:text-[16px]">
                        Discover places, choose food, book a room, send a gift,
                        and create a complete date plan without jumping between
                        different apps.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="/create-date"
                            className="group flex items-center gap-2 rounded-xl bg-[#30473f] px-6 py-3.5 text-[13px] font-semibold text-white shadow-[0_8px_25px_rgba(48,71,63,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#263a34] hover:shadow-[0_12px_30px_rgba(48,71,63,0.25)]"
                        >
                            Create your date
                            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/Listed"
                            className="flex items-center gap-2 rounded-xl border border-[#dfd1cb] bg-white/80 px-6 py-3.5 text-[13px] font-semibold text-[#46534e] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cdbbb3] hover:bg-white"
                        >
                            Explore places
                        </Link>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eaf3ed] text-[#47705d]">
                                <Check size={14} />
                            </div>
                            <span className="text-[11px] text-[#80746f]">Easy planning</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff0ec] text-[#c85c54]">
                                <Heart size={13} fill="currentColor" />
                            </div>
                            <span className="text-[11px] text-[#80746f]">Made for couples</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff4df] text-[#b17b3e]">
                                <Sparkles size={13} />
                            </div>
                            <span className="text-[11px] text-[#80746f]">Memorable moments</span>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-[700px]">
                    <div className="absolute -right-8 top-4 h-20 w-20 rounded-full bg-[#ffdcd5]/60 blur-2xl" />
                    <div className="absolute -bottom-8 left-10 h-28 w-28 rounded-full bg-[#ffe8c9]/70 blur-2xl" />

                    <div className="relative overflow-hidden rounded-[30px] border border-white/80 bg-white/60 p-2 shadow-[0_25px_80px_rgba(77,48,41,0.16)] backdrop-blur">
                        <div className="relative h-[520px] overflow-hidden rounded-[24px] sm:h-[580px]">
                            <Image
                                src="/image/herobg.jpg"
                                alt="Couple enjoying a romantic date"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 55vw"
                                className="object-cover object-center"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#1e2925]/70 via-transparent to-[#1e2925]/5" />

                            <div className="absolute left-5 top-5 rounded-2xl border border-white/40 bg-white/85 px-4 py-3 shadow-lg backdrop-blur-md">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff0ec] text-[#d45e54]">
                                        <Heart size={15} fill="currentColor" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold text-[#37433f]">DateYatra</p>
                                        <p className="text-[9px] text-[#958983]">Your date, your way</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#25332e]/80 p-4 text-white shadow-xl backdrop-blur-md">
                                <div className="flex items-end justify-between gap-4">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                                            Plan together
                                        </p>
                                        <h2 className="mt-1 text-[21px] font-semibold">
                                            Make tonight special.
                                        </h2>
                                        <p className="mt-1 text-[10px] leading-5 text-white/65">
                                            From the first reservation to the final memory.
                                        </p>
                                    </div>

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d56359]">
                                        <Heart size={18} fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -left-8 top-[17%] hidden w-[220px] lg:block">
                        <FeatureCard feature={features[0]} />
                    </div>

                    <div className="absolute -right-8 top-[31%] hidden w-[220px] lg:block">
                        <FeatureCard feature={features[3]} />
                    </div>

                    <div className="absolute -left-12 bottom-[22%] hidden w-[220px] lg:block">
                        <FeatureCard feature={features[5]} />
                    </div>

                    <div className="absolute -right-10 bottom-[13%] hidden w-[220px] lg:block">
                        <FeatureCard feature={features[6]} />
                    </div>
                </div>
            </div>

            <div className="relative z-20 mx-auto px-5 pb-8 lg:hidden">
                <div className="rounded-2xl border border-[#eaded8] bg-white/90 p-4 shadow-[0_12px_35px_rgba(72,43,37,0.09)] backdrop-blur">
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <p className="text-[13px] font-semibold text-[#35423d]">
                                Everything for your date
                            </p>
                            <p className="mt-0.5 text-[10px] text-[#978983]">
                                Plan it all in one place
                            </p>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff0ec] text-[#d45e54]">
                            <Heart size={16} fill="currentColor" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        {features.slice(0, 6).map((feature) => (
                            <FeatureCard key={feature.title} feature={feature} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
