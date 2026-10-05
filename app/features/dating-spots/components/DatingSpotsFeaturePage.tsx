"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    BedDouble,
    Camera,
    Check,
    Coffee,
    Film,
    Flower2,
    Heart,
    MapPin,
    Music2,
    Search,
    Sparkles,
    Star,
    Utensils,
} from "lucide-react";
import { motion } from "framer-motion";

const featureCategories = [
    {
        title: "Romantic Places",
        description: "Discover beautiful places designed for meaningful conversations and memorable moments.",
        icon: Heart,
        tone: "rose",
    },
    {
        title: "Restaurants",
        description: "Find restaurants based on cuisine, atmosphere, location, and occasion.",
        icon: Utensils,
        tone: "amber",
    },
    {
        title: "Cafés",
        description: "Discover cozy cafés that are perfect for casual dates and conversations.",
        icon: Coffee,
        tone: "orange",
    },
    {
        title: "Sunset Spots",
        description: "Find beautiful locations for sunset dates and romantic evening moments.",
        icon: Sparkles,
        tone: "violet",
    },
    {
        title: "Nature & Outdoor",
        description: "Explore gardens, parks, viewpoints, lakes, and peaceful outdoor locations.",
        icon: Flower2,
        tone: "emerald",
    },
    {
        title: "Entertainment",
        description: "Find movies, activities, games, and other experiences for couples.",
        icon: Film,
        tone: "blue",
    },
    {
        title: "Hotels & Rooms",
        description: "Discover hotels and rooms for special occasions and private celebrations.",
        icon: BedDouble,
        tone: "rose",
    },
    {
        title: "Activities",
        description: "Explore experiences that make your date more exciting and memorable.",
        icon: Music2,
        tone: "amber",
    },
];

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "Browse different types of romantic places and date experiences.",
        icon: Search,
    },
    {
        number: "02",
        title: "Choose",
        description: "Compare places based on location, atmosphere, category, and your occasion.",
        icon: Heart,
    },
    {
        number: "03",
        title: "Plan Your Date",
        description: "Select the perfect place and continue planning your complete date from the DateYatra dashboard.",
        icon: Camera,
    },
];

const demoPlaces = [
    {
        name: "The Secret Garden",
        category: "A little nature",
        rating: "4.9",
        distance: "1.2 km",
        image: "/image/save.jpg",
        imagePosition: "center 52%",
    },
    {
        name: "Golden Hour Café",
        category: "Coffee & conversation",
        rating: "4.8",
        distance: "2.4 km",
        image: "/image/herobg.jpg",
        imagePosition: "center 43%",
    },
    {
        name: "Lakeside Hideaway",
        category: "A quiet escape",
        rating: "4.7",
        distance: "4.1 km",
        image: "/image/save.jpg",
        imagePosition: "center 74%",
    },
];

const benefits = [
    "Save time searching for places",
    "Discover romantic locations",
    "Find places based on your date type",
    "Explore restaurants and cafés",
    "Discover outdoor experiences",
    "Plan special occasions",
    "Keep your entire date plan in one place",
];

const categoryChips = [
    { label: "Romantic", emoji: "❤️" },
    { label: "Restaurants", emoji: "🍽️" },
    { label: "Cafés", emoji: "☕" },
    { label: "Sunset", emoji: "🌅" },
    { label: "Nature", emoji: "🌿" },
];

const toneClasses: Record<string, string> = {
    rose: "bg-rose-50 text-rose-600",
    amber: "bg-amber-50 text-amber-700",
    orange: "bg-orange-50 text-orange-600",
    violet: "bg-violet-50 text-violet-600",
    emerald: "bg-emerald-50 text-emerald-600",
    blue: "bg-sky-50 text-sky-600",
};

function SectionIntro({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: string;
    description: string;
}) {
    return (
        <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-11">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-500">{eyebrow}</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.8px] text-[#102A56] sm:text-[34px]">
                {title}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">{description}</p>
        </div>
    );
}

function HeroPreview() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative mx-auto w-full max-w-145"
        >
            <div className="absolute -right-5 -top-7 h-36 w-36 rounded-full bg-rose-200/60 blur-3xl" />
            <div className="absolute -bottom-7 -left-6 h-36 w-36 rounded-full bg-amber-100/80 blur-3xl" />
            <div className="relative rounded-2xl border border-white/80 bg-white/85 p-2.5 shadow-[0_26px_75px_rgba(16,42,86,0.15)] backdrop-blur">
                <div className="overflow-hidden rounded-xl border border-slate-100 bg-[#f9fafc]">
                    <div className="flex h-11 items-center gap-1.5 border-b border-slate-100 bg-white px-4">
                        <span className="h-2 w-2 rounded-full bg-rose-300" />
                        <span className="h-2 w-2 rounded-full bg-amber-300" />
                        <span className="h-2 w-2 rounded-full bg-emerald-300" />
                        <span className="ml-3 text-[10px] font-medium tracking-wide text-slate-400">A DATEYATRA PREVIEW</span>
                    </div>
                    <div className="p-4 sm:p-5">
                        <div className="flex items-end justify-between gap-2">
                            <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-rose-500">Made for the moments that matter</p>
                                <h2 className="mt-1 text-[19px] font-semibold tracking-[-0.6px] text-[#102A56] sm:text-[22px]">
                                    Find your kind of place
                                </h2>
                            </div>
                            <span className="hidden items-center gap-1 text-[10px] text-slate-400 sm:inline-flex">
                                <MapPin size={11} /> Somewhere lovely
                            </span>
                        </div>

                        <div className="mt-3 flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-slate-400 shadow-sm">
                            <Search size={13} />
                            <span className="text-[10px]">Search for a place to make a memory...</span>
                        </div>

                        <div className="mt-3 flex gap-1.5 overflow-hidden">
                            {categoryChips.map(({ label, emoji }, index) => (
                                <span
                                    key={label}
                                    className={`shrink-0 rounded-full px-2.5 py-1.5 text-[9px] font-medium ${index === 0 ? "bg-[#102A56] text-white" : "bg-white text-slate-500 ring-1 ring-slate-100"
                                        }`}
                                >
                                    {emoji} {label}
                                </span>
                            ))}
                        </div>

                        <div className="mt-4 grid grid-cols-[1fr_116px] gap-3 sm:grid-cols-[1fr_142px]">
                            <div className="space-y-2.5">
                                {demoPlaces.slice(0, 2).map((place) => (
                                    <div key={place.name} className="flex gap-2.5 rounded-lg bg-white p-2 shadow-[0_2px_12px_rgba(16,42,86,0.05)] ring-1 ring-slate-100">
                                        <div className="relative h-15.5 w-18.5 shrink-0 overflow-hidden rounded-md sm:h-17 sm:w-22">
                                            <Image src={place.image} alt="" fill sizes="88px" className="object-cover" style={{ objectPosition: place.imagePosition }} />
                                        </div>
                                        <div className="flex min-w-0 flex-1 flex-col justify-center">
                                            <p className="truncate text-[10px] font-semibold text-[#102A56] sm:text-[11px]">{place.name}</p>
                                            <p className="mt-0.5 truncate text-[9px] text-slate-400">{place.category}</p>
                                            <div className="mt-1.5 flex items-center gap-2 text-[9px] text-slate-500">
                                                <span className="inline-flex items-center gap-0.5 text-amber-600"><Star size={9} fill="currentColor" /> {place.rating}</span>
                                                <span className="inline-flex items-center gap-0.5"><MapPin size={9} /> {place.distance}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="relative min-h-35.5 overflow-hidden rounded-lg bg-[#e8efe8] ring-1 ring-slate-100">
                                <div className="absolute inset-0 opacity-75" style={{ backgroundImage: "repeating-linear-gradient(34deg, transparent 0 22px, rgba(255,255,255,.9) 23px 26px, transparent 27px 49px), repeating-linear-gradient(120deg, transparent 0 32px, rgba(255,255,255,.75) 33px 36px, transparent 37px 66px), linear-gradient(145deg, #d8e8db, #eef0dc 54%, #d5e6df)" }} />
                                <svg className="absolute inset-0 h-full w-full opacity-50" viewBox="0 0 160 180" aria-hidden="true">
                                    <path d="M-10 44 C 45 18, 50 90, 110 63 S 150 42, 175 85" fill="none" stroke="#8bc7cf" strokeWidth="10" />
                                    <path d="M-10 44 C 45 18, 50 90, 110 63 S 150 42, 175 85" fill="none" stroke="#c0e5e6" strokeWidth="6" />
                                </svg>
                                <span className="absolute left-[16%] top-[25%] flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[9px] text-white shadow">♥</span>
                                <span className="absolute left-[58%] top-[39%] flex h-5 w-5 items-center justify-center rounded-full bg-[#102A56] text-[9px] text-white shadow">♥</span>
                                <span className="absolute left-[39%] top-[70%] flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[9px] text-white shadow">♥</span>
                                <span className="absolute bottom-2 left-2 right-2 rounded bg-white/90 px-2 py-1 text-center text-[8px] font-medium text-slate-500 backdrop-blur">A little map preview</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-slate-100 bg-white px-4 py-2.5">
                        <p className="text-[9px] text-slate-400">A glimpse of what you can discover</p>
                        <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-rose-500">
                            Explore places <ArrowUpRight size={11} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-4 -left-3 flex items-center gap-2 rounded-xl border border-white/80 bg-white px-3 py-2.5 shadow-lg sm:-left-8">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-rose-500"><Heart size={15} fill="currentColor" /></span>
                <div>
                    <p className="text-[9px] font-medium text-slate-400">Made for</p>
                    <p className="text-[11px] font-semibold text-[#102A56]">your next lovely moment</p>
                </div>
            </div>
        </motion.div>
    );
}

function FeatureOverview() {
    return (
        <section id="what-you-can-find" className="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionIntro
                    eyebrow="Something for every kind of date"
                    title="Everything You Need to Find the Perfect Date Spot"
                    description="From a spontaneous coffee to the occasion you have been planning for, discover experiences made for two."
                />
                <div className="grid gap-x-7 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
                    {featureCategories.map(({ title, description, icon: Icon, tone }, index) => (
                        <motion.article
                            key={title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.35, delay: (index % 4) * 0.04 }}
                            className="group border-t border-slate-100 pt-4 transition-colors hover:border-rose-200"
                        >
                            <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${toneClasses[tone]}`}>
                                <Icon size={19} strokeWidth={1.8} />
                            </span>
                            <h3 className="mt-3 text-[15px] font-semibold text-[#102A56]">{title}</h3>
                            <p className="mt-1.5 text-xs leading-5 text-slate-500">{description}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function HowItWorks() {
    return (
        <section className="bg-[#f8f9fc] px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionIntro
                    eyebrow="The lovely part is easy"
                    title="Three little steps to a memorable date"
                    description="A simpler way to find your place, bring your ideas together, and make more of your time."
                />
                <div className="relative grid gap-7 sm:grid-cols-3 sm:gap-8">
                    <div className="absolute left-[18%] right-[18%] top-5 hidden h-px border-t border-dashed border-rose-200 sm:block" />
                    {steps.map(({ number, title, description, icon: Icon }, index) => (
                        <motion.article
                            key={number}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="relative flex gap-4 sm:flex-col sm:items-center sm:text-center"
                        >
                            <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-rose-500 shadow-[0_2px_12px_rgba(16,42,86,0.08)] ring-1 ring-rose-100">
                                <Icon size={17} />
                            </span>
                            <div>
                                <p className="text-[10px] font-bold tracking-[0.18em] text-rose-400">{number}</p>
                                <h3 className="mt-1 text-[16px] font-semibold text-[#102A56]">{title}</h3>
                                <p className="mx-auto mt-1.5 max-w-xs text-xs leading-5 text-slate-500">{description}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function StaticProductPreview() {
    return (
        <section className="px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionIntro
                    eyebrow="A little look ahead"
                    title="A Smarter Way to Discover Date Spots"
                    description="Picture your next favorite place, all in one thoughtful space. Here’s a preview of the discovery experience coming to your DateYatra dashboard."
                />
                <div className="overflow-hidden rounded-2xl bg-[#f6f7fb] p-3 shadow-[0_18px_55px_rgba(16,42,86,0.09)] ring-1 ring-slate-100 sm:p-6">
                    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-6">
                            <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-rose-500">Your next date, sorted</p>
                                <h3 className="mt-0.5 text-base font-semibold tracking-tight text-[#102A56] sm:text-lg">Find somewhere wonderful</h3>
                            </div>
                            <span className="hidden rounded-full bg-[#f6f7fa] px-3 py-1.5 text-[10px] font-medium text-slate-400 sm:inline-flex">
                                Product preview
                            </span>
                        </div>

                        <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-[1fr_250px]">
                            <div>
                                <div className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-[#fbfcfe] px-3 text-slate-400">
                                    <Search size={15} />
                                    <span className="text-xs">Search dating spots...</span>
                                </div>
                                <div className="mt-3 flex gap-2 overflow-hidden">
                                    {categoryChips.map(({ label, emoji }, index) => (
                                        <span key={label} className={`shrink-0 rounded-full px-3 py-1.5 text-[10px] font-medium ${index === 0 ? "bg-[#102A56] text-white" : "bg-[#f6f7fa] text-slate-500"}`}>
                                            {emoji} {label}
                                        </span>
                                    ))}
                                    <span className="hidden shrink-0 rounded-full bg-[#f6f7fa] px-3 py-1.5 text-[10px] font-medium text-slate-500 md:inline-flex">🎬 Movies</span>
                                </div>

                                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                    {demoPlaces.map((place) => (
                                        <article key={place.name} className="overflow-hidden rounded-lg bg-white ring-1 ring-slate-100">
                                            <div className="relative h-28 overflow-hidden sm:h-32">
                                                <Image src={place.image} alt="" fill sizes="(max-width: 640px) 100vw, 360px" className="object-cover" style={{ objectPosition: place.imagePosition }} />
                                                <span className="absolute left-2.5 top-2.5 rounded-md bg-white/95 px-2 py-1 text-[9px] font-medium text-slate-600">{place.category}</span>
                                            </div>
                                            <div className="p-3">
                                                <div className="flex items-center justify-between gap-2">
                                                    <h4 className="truncate text-xs font-semibold text-[#102A56]">{place.name}</h4>
                                                    <span className="inline-flex shrink-0 items-center gap-0.5 text-[10px] font-medium text-slate-600">
                                                        <Star size={11} fill="currentColor" className="text-amber-400" /> {place.rating}
                                                    </span>
                                                </div>
                                                <div className="mt-1.5 flex items-center gap-3 text-[9px] text-slate-400">
                                                    <span className="inline-flex items-center gap-1"><MapPin size={10} /> Somewhere nearby</span>
                                                    <span>{place.distance}</span>
                                                </div>
                                                <span className="mt-2.5 inline-flex items-center gap-1 text-[10px] font-semibold text-[#102A56]">
                                                    View details <ArrowUpRight size={11} />
                                                </span>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>

                            <aside className="hidden rounded-xl bg-[#f8faf7] p-3 lg:block">
                                <div className="flex items-center justify-between">
                                    <p className="text-xs font-semibold text-[#102A56]">Places around you</p>
                                    <MapPin size={14} className="text-rose-500" />
                                </div>
                                <div className="relative mt-3 h-[calc(100%-30px)] min-h-65 overflow-hidden rounded-lg bg-[#e5ede5]">
                                    <div className="absolute inset-0 opacity-80" style={{ backgroundImage: "repeating-linear-gradient(42deg, transparent 0 28px, rgba(255,255,255,.9) 29px 32px, transparent 33px 62px), repeating-linear-gradient(132deg, transparent 0 34px, rgba(255,255,255,.75) 35px 38px, transparent 39px 68px), linear-gradient(145deg, #dce9da, #eff0df 56%, #d7e8e1)" }} />
                                    <svg className="absolute inset-0 h-full w-full opacity-55" viewBox="0 0 250 300" preserveAspectRatio="none" aria-hidden="true">
                                        <path d="M-20 68 C 50 28, 85 126, 152 97 S 214 55, 270 120" fill="none" stroke="#88c5ce" strokeWidth="14" />
                                        <path d="M-20 68 C 50 28, 85 126, 152 97 S 214 55, 270 120" fill="none" stroke="#c2e2e3" strokeWidth="8" />
                                    </svg>
                                    <span className="absolute left-[20%] top-[25%] rounded-full bg-rose-500 px-2 py-1 text-[9px] text-white shadow">♥</span>
                                    <span className="absolute left-[61%] top-[37%] rounded-full bg-[#102A56] px-2 py-1 text-[9px] text-white shadow">♥</span>
                                    <span className="absolute left-[34%] top-[67%] rounded-full bg-rose-500 px-2 py-1 text-[9px] text-white shadow">♥</span>
                                    <span className="absolute right-[12%] top-[73%] rounded-full bg-rose-500 px-2 py-1 text-[9px] text-white shadow">♥</span>
                                    <p className="absolute bottom-3 left-2 right-2 text-center text-[9px] text-emerald-900/55">Illustrative map preview</p>
                                </div>
                            </aside>
                        </div>
                        <div className="border-t border-slate-100 px-4 py-2.5 text-center text-[9px] text-slate-400 sm:px-6">
                            Static product preview · The interactive discovery experience is coming to your dashboard
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Benefits() {
    return (
        <section className="bg-[#f8f9fc] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-[0.85fr_1.15fr] sm:items-center sm:gap-14">
                <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-500">Less searching, more moments</p>
                    <h2 className="mt-2 text-[28px] font-semibold leading-tight tracking-[-1px] text-[#102A56] sm:text-[34px]">Why Find Dating Spots?</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-500">Good plans start with a place that feels right. DateYatra brings the inspiration and the planning together.</p>
                </div>
                <ul className="grid gap-x-5 gap-y-3 sm:grid-cols-2">
                    {benefits.map((benefit, index) => (
                        <motion.li
                            key={benefit}
                            initial={{ opacity: 0, x: 8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.3, delay: index * 0.04 }}
                            className="flex items-start gap-2.5 text-[13px] leading-5 text-slate-600"
                        >
                            <span className="mt-0.5 flex h-4.25 w-4.25 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                                <Check size={11} strokeWidth={2.5} />
                            </span>
                            {benefit}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function DashboardCTA() {
    return (
        <section className="px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-[#102A56] px-6 py-9 text-center sm:px-10 sm:py-12"
            >
                <div className="absolute -right-20 -top-32 h-64 w-64 rounded-full bg-rose-400/20 blur-3xl" />
                <div className="absolute -bottom-40 -left-20 h-64 w-64 rounded-full bg-indigo-300/15 blur-3xl" />
                <div className="relative">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-200">The next chapter is yours</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-[32px]">Coming to Your DateYatra Dashboard</h2>
                    <p className="mx-auto mt-2 max-w-2xl text-base font-medium text-rose-100">Your perfect date starts with the right place.</p>
                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100/80">
                        Once you enter the DateYatra dashboard, Find Dating Spots will help you discover places, compare options, plan your date, and continue with restaurant, hotel, activity, and celebration services.
                    </p>
                    <Link
                        href="/auth/login"
                        className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#FF7A59] via-[#FF6B6B] to-[#FF4D6D] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-950/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                    >
                        Go to Dashboard
                        <ArrowRight size={16} />
                    </Link>
                    <p className="mt-3 text-[10px] text-blue-100/55">Sign in to continue to DateYatra</p>
                </div>
            </motion.div>
        </section>
    );
}

export default function DatingSpotsFeaturePage() {
    return (
        <div className="bg-white text-slate-800">
            <section className="relative overflow-hidden bg-[#fffaf9] px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pt-16">
                <div className="pointer-events-none absolute -right-32 -top-44 h-115 w-115 rounded-full bg-rose-100/65 blur-[100px]" />
                <div className="pointer-events-none absolute -bottom-48 left-[28%] h-100 w-100 rounded-full bg-amber-100/45 blur-[95px]" />
                <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-xl"
                    >
                        <Link href="/#features" className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition hover:text-[#102A56]">
                            <ArrowLeftIcon />
                            Back to Features
                        </Link>
                        <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-rose-500">
                            <Heart size={12} fill="currentColor" />
                            More thoughtful dates start here
                        </p>
                        <h1 className="mt-5 text-[42px] font-semibold leading-[1.02] tracking-[-2.5px] text-[#102A56] sm:text-[56px] lg:text-[62px]">
                            Find Dating
                            <span className="block bg-gradient-to-r from-[#FF7A59] via-[#FF6B6B] to-[#FF4D6D] bg-clip-text pb-1 text-transparent">
                                Spots
                            </span>
                        </h1>
                        <p className="mt-4 max-w-lg text-lg font-medium leading-7 text-[#344660] sm:text-xl">
                            Discover romantic places and create unforgettable moments together.
                        </p>
                        <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500 sm:text-[15px]">
                            Find the perfect place for your next date — from romantic restaurants and cozy cafés to sunset viewpoints, peaceful gardens, movies, hotels, and exciting activities.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-3">
                            <Link
                                href="/auth/register"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#FF7A59] via-[#FF6B6B] to-[#FF4D6D] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-rose-200/50 transition hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                Explore DateYatra
                                <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/#features"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-[#102A56] transition hover:border-rose-200 hover:bg-white"
                            >
                                Back to Features
                            </Link>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
                            <span className="inline-flex items-center gap-1.5"><Check size={14} className="text-emerald-500" /> Find your kind of date</span>
                            <span className="inline-flex items-center gap-1.5"><Check size={14} className="text-emerald-500" /> Plan the whole experience</span>
                        </div>
                    </motion.div>
                    <HeroPreview />
                </div>
                <a href="#what-you-can-find" aria-label="Discover feature categories" className="relative mx-auto mt-14 flex w-fit items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 transition hover:text-rose-500">
                    Find your kind of date
                    <ArrowDown size={13} />
                </a>
            </section>

            <FeatureOverview />
            <HowItWorks />
            <StaticProductPreview />
            <Benefits />
            <DashboardCTA />
        </div>
    );
}

function ArrowLeftIcon() {
    return <ArrowRight size={14} className="rotate-180" />;
}
