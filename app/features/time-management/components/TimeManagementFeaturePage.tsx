"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    AlarmClock,
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Bell,
    CalendarCheck,
    CalendarDays,
    Check,
    ChevronLeft,
    ChevronRight,
    Clock3,
    Gift,
    Heart,
    RefreshCw,
    Sparkles,
    Sunrise,
    Utensils,
    WandSparkles,
} from "lucide-react";

const features = [
    {
        title: "Smart Scheduling",
        description: "Pick the perfect date and time that works effortlessly for both of you.",
        icon: CalendarDays,
        tint: "bg-rose-50 text-rose-500",
    },
    {
        title: "Activity Timelines",
        description: "Sequence your date flow from dinner to a movie or a sunset walk without rushing.",
        icon: Clock3,
        tint: "bg-amber-50 text-amber-600",
    },
    {
        title: "Automated Reminders",
        description: "Never miss a special anniversary, birthday, or planned date night.",
        icon: Bell,
        tint: "bg-violet-50 text-violet-600",
    },
    {
        title: "Seamless Sync",
        description: "Keep all your romantic itineraries organized in a single, stress-free calendar view.",
        icon: RefreshCw,
        tint: "bg-sky-50 text-sky-600",
    },
    {
        title: "Quick Rescheduling",
        description: "Easily adjust plans if unexpected changes come up.",
        icon: AlarmClock,
        tint: "bg-emerald-50 text-emerald-600",
    },
    {
        title: "Occasion Planning",
        description: "Map out timelines for proposal nights, anniversaries, and surprise dates.",
        icon: Gift,
        tint: "bg-orange-50 text-orange-600",
    },
];

const steps = [
    {
        number: "01",
        title: "Select",
        description: "Choose your date occasion and preferred time slot.",
        icon: CalendarDays,
    },
    {
        number: "02",
        title: "Build Itinerary",
        description: "Add spots, restaurants, and activities into a sequential timeline.",
        icon: Clock3,
    },
    {
        number: "03",
        title: "Enjoy & Remember",
        description: "Follow your smooth schedule and focus entirely on each other.",
        icon: Heart,
    },
];

const dateEvents = [
    { time: "7:00 PM", title: "Dinner", place: "Bella Italia", icon: Utensils, color: "bg-rose-50 text-rose-500" },
    { time: "8:30 PM", title: "Movie", place: "QFX Cinemas", icon: WandSparkles, color: "bg-violet-50 text-violet-500" },
    { time: "10:00 PM", title: "Evening Walk", place: "Riverside", icon: Sunrise, color: "bg-amber-50 text-amber-600" },
    { time: "10:45 PM", title: "Surprise Gift", place: "Special Moment", icon: Gift, color: "bg-rose-50 text-rose-500" },
];

const benefits = [
    {
        title: "Eliminate Planning Stress",
        description: "Keep your date organized instead of switching between multiple apps.",
        icon: Sparkles,
    },
    {
        title: "Create Smooth Dates",
        description: "Plan activities in the right sequence so you can enjoy every moment.",
        icon: Sunrise,
    },
    {
        title: "Remember Important Moments",
        description: "Keep anniversaries, birthdays, milestones, and special date nights organized.",
        icon: Heart,
    },
    {
        title: "One Organized Timeline",
        description: "Keep restaurants, activities, locations, and special moments together.",
        icon: CalendarCheck,
    },
    {
        title: "Balance Surprise & Structure",
        description: "Plan the important details while still leaving room for spontaneous moments.",
        icon: Gift,
    },
];

const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
const calendarDates = [5, 6, 7, 8, 9, 10, 11];

function SectionHeading({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: string;
    description: string;
}) {
    return (
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-500">{eyebrow}</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.8px] text-[#102A56] sm:text-[34px]">
                {title}
            </h2>
            {description && (
                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">{description}</p>
            )}
        </div>
    );
}

function PlannerPreview({ compact = false }: { compact?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className={`relative mx-auto w-full ${compact ? "max-w-125" : "max-w-175"}`}
        >
            <div className="absolute -right-6 -top-7 h-36 w-36 rounded-full bg-rose-200/55 blur-3xl" />
            <div className="absolute -bottom-6 -left-8 h-36 w-36 rounded-full bg-amber-100/80 blur-3xl" />
            <div className="relative rounded-2xl border border-white bg-white/90 p-2.5 shadow-[0_24px_70px_rgba(16,42,86,0.14)] sm:p-3">
                <div className="overflow-hidden rounded-xl border border-slate-100 bg-[#fbfcfe]">
                    <div className="flex items-center justify-between border-b border-slate-100 bg-white px-4 py-3 sm:px-5">
                        <div className="flex items-center gap-2.5">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
                                <CalendarDays size={16} />
                            </span>
                            <div>
                                <p className="text-[12px] font-semibold text-[#102A56]">Date Planner</p>
                                <p className="text-[9px] text-slate-400">A little time, just for you two</p>
                            </div>
                        </div>
                        <span className="rounded-lg bg-linear-to-r from-[#FF7A59] via-[#FF6B6B] to-[#FF4D6D] px-3 py-2 text-[10px] font-semibold text-white shadow-sm">
                            + Add
                        </span>
                    </div>

                    <div className={`grid ${compact ? "grid-cols-1" : "md:grid-cols-[0.92fr_1.08fr]"}`}>
                        <div className="border-b border-slate-100 bg-white p-4 sm:p-5 md:border-b-0 md:border-r">
                            <div className="flex items-center justify-between">
                                <span className="text-[13px] font-semibold text-[#102A56]">October 2026</span>
                                <div className="flex gap-1">
                                    <span aria-hidden="true" className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400"><ChevronLeft size={15} /></span>
                                    <span aria-hidden="true" className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400"><ChevronRight size={15} /></span>
                                </div>
                            </div>
                            <div className="mt-3 grid grid-cols-7 gap-y-2 text-center">
                                {weekDays.map((day, index) => (
                                    <span key={`${day}-${index}`} className="py-1 text-[9px] font-semibold text-slate-400">{day}</span>
                                ))}
                                {calendarDates.map((date) => (
                                    <span
                                        key={date}
                                        className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-[10px] ${date === 10
                                            ? "bg-[#102A56] font-semibold text-white shadow-sm"
                                            : "text-slate-600"
                                            }`}
                                    >
                                        {date}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-4 rounded-lg bg-[#fff8f6] px-3 py-2.5">
                                <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-rose-500">Your selected day</p>
                                <p className="mt-1 text-[11px] font-semibold text-[#102A56]">Saturday, October 10</p>
                            </div>
                        </div>

                        <div className="p-4 sm:p-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-rose-500">A lovely evening</p>
                                    <p className="mt-1 text-[13px] font-semibold text-[#102A56]">Saturday, October 10</p>
                                </div>
                                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-medium text-emerald-700">4 moments</span>
                            </div>
                            <div className="mt-4 space-y-2.5">
                                {dateEvents.map(({ time, title, place, icon: Icon, color }) => (
                                    <div key={title} className="flex gap-2.5">
                                        <span className="w-12 shrink-0 pt-2 text-[9px] font-medium text-slate-400">{time}</span>
                                        <div className="relative flex min-w-0 flex-1 items-center gap-2.5 rounded-lg bg-white px-2.5 py-2 shadow-[0_2px_10px_rgba(16,42,86,0.045)] ring-1 ring-slate-100">
                                            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${color}`}><Icon size={14} /></span>
                                            <div className="min-w-0">
                                                <p className="truncate text-[10px] font-semibold text-[#102A56]">{title}</p>
                                                <p className="truncate text-[9px] text-slate-400">{place}</p>
                                            </div>
                                            {title === "Surprise Gift" && <Heart size={13} fill="currentColor" className="ml-auto shrink-0 text-rose-400" />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {!compact && (
                                <div className="mt-4 flex gap-2">
                                    <span className="rounded-lg bg-[#102A56] px-3 py-2 text-[9px] font-semibold text-white">Add to Schedule</span>
                                    <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[9px] font-semibold text-slate-600">View Timeline</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="border-t border-slate-100 bg-white px-4 py-2 text-center text-[9px] text-slate-400">
                        Static preview · Your future DateYatra planner
                    </div>
                </div>
            </div>
            {!compact && (
                <div className="absolute -bottom-4 -left-2 hidden items-center gap-2 rounded-xl border border-white bg-white px-3 py-2.5 shadow-lg sm:flex sm:-left-7">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-rose-500"><Heart size={15} fill="currentColor" /></span>
                    <div>
                        <p className="text-[9px] text-slate-400">One thoughtful plan</p>
                        <p className="text-[11px] font-semibold text-[#102A56]">more time for each other</p>
                    </div>
                </div>
            )}
        </motion.div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[#fffaf9] px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pt-16">
            <div className="pointer-events-none absolute -right-32 -top-44 h-115 w-115 rounded-full bg-rose-100/65 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-48 left-[28%] h-100 w-100 rounded-full bg-amber-100/45 blur-[95px]" />
            <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-xl"
                >
                    <Link href="/#features" className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition hover:text-[#102A56]">
                        <ArrowLeft size={14} />
                        Back to Features
                    </Link>
                    <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-rose-500">
                        <Clock3 size={12} />
                        Date Planning
                    </p>
                    <h1 className="mt-5 text-[42px] font-semibold leading-[1.02] tracking-[-2.5px] text-[#102A56] sm:text-[56px] lg:text-[62px]">
                        Time
                        <span className="block bg-linear-to-r from-[#FF7A59] via-[#FF6B6B] to-[#FF4D6D] bg-clip-text pb-1 text-transparent">
                            Management
                        </span>
                    </h1>
                    <p className="mt-4 max-w-lg text-lg font-medium leading-7 text-[#344660] sm:text-xl">
                        Plan your dating time, activities, and schedules easily.
                    </p>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500 sm:text-[15px]">
                        Take the stress out of planning. Seamlessly coordinate dates, reserve activities, set reminders, and manage your romantic schedule all in one place.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                        <Link
                            href="/auth/register"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[#FF7A59] via-[#FF6B6B] to-[#FF4D6D] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-rose-200/50 transition hover:-translate-y-0.5 hover:shadow-lg"
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
                        <span className="inline-flex items-center gap-1.5"><Check size={14} className="text-emerald-500" /> Make every moment count</span>
                        <span className="inline-flex items-center gap-1.5"><Check size={14} className="text-emerald-500" /> Keep your plans together</span>
                    </div>
                </motion.div>
                <PlannerPreview compact />
            </div>
        </section>
    );
}

function FeatureOverview() {
    return (
        <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="A little more thought, a lot less stress"
                    title="Everything You Need to Manage Your Time"
                    description="Turn complicated date planning into a simple, beautifully organized experience."
                />
                <div className="grid gap-x-7 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map(({ title, description, icon: Icon, tint }, index) => (
                        <motion.article
                            key={title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.32, delay: (index % 3) * 0.045 }}
                            className="group border-t border-slate-100 pt-4 transition-colors hover:border-rose-200"
                        >
                            <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${tint}`}>
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
        <section className="bg-[#f8f9fc] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Three steps, one lovely plan"
                    title="How It Works"
                    description="From choosing a time to enjoying the moment, every part of the plan has a place."
                />
                <div className="relative grid gap-7 sm:grid-cols-3 sm:gap-8">
                    <div className="absolute left-[18%] right-[18%] top-5 hidden h-px border-t border-dashed border-rose-200 sm:block" />
                    {steps.map(({ number, title, description, icon: Icon }, index) => (
                        <motion.article
                            key={number}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.35, delay: index * 0.07 }}
                            className="relative flex gap-4 sm:flex-col sm:items-center sm:text-center"
                        >
                            <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-rose-500 shadow-[0_2px_12px_rgba(16,42,86,0.08)] ring-1 ring-rose-100">
                                <Icon size={17} />
                            </span>
                            <div className="min-w-0 flex-1 sm:flex-none">
                                <p className="text-[10px] font-bold tracking-[0.18em] text-rose-400">{number}</p>
                                <h3 className="mt-1 text-[16px] font-semibold text-[#102A56]">{title}</h3>
                                <p className="mx-auto mt-1.5 max-w-xs text-xs leading-5 text-slate-500">{description}</p>
                                <StepIllustration index={index} />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function StepIllustration({ index }: { index: number }) {
    if (index === 0) {
        return (
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-slate-100">
                <CalendarDays size={14} className="text-rose-500" />
                <span className="text-[10px] font-medium text-[#102A56]">Sat, October 10</span>
                <span className="rounded bg-rose-50 px-1.5 py-1 text-[9px] font-medium text-rose-500">7:00 PM</span>
            </div>
        );
    }
    if (index === 1) {
        return (
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-slate-100">
                <span className="h-5 w-px bg-rose-200" />
                <Utensils size={13} className="text-rose-500" />
                <span className="text-[10px] font-medium text-[#102A56]">Dinner</span>
                <ArrowRight size={12} className="text-slate-300" />
                <Sunrise size={13} className="text-amber-500" />
                <span className="text-[10px] font-medium text-[#102A56]">Walk</span>
            </div>
        );
    }
    return (
        <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-slate-100">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check size={12} /></span>
            <span className="text-[10px] font-medium text-[#102A56]">A night to remember</span>
            <Heart size={12} fill="currentColor" className="text-rose-400" />
        </div>
    );
}

function StaticProductPreview() {
    return (
        <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="A little look ahead"
                    title="Your Entire Date, Perfectly Timed"
                    description="From the first reservation to the final surprise, keep every moment organized in one beautiful timeline."
                />
                <div className="overflow-hidden rounded-2xl bg-[#f6f7fb] p-3 shadow-[0_18px_55px_rgba(16,42,86,0.09)] ring-1 ring-slate-100 sm:p-6">
                    <PlannerPreview />
                </div>
            </div>
        </section>
    );
}

function TimelinePreview() {
    return (
        <section className="bg-[#fffaf9] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto grid max-w-5xl items-center gap-8 sm:grid-cols-[0.8fr_1.2fr] sm:gap-12">
                <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-500">The evening, beautifully arranged</p>
                    <h2 className="mt-2 text-[28px] font-semibold leading-tight tracking-[-1px] text-[#102A56] sm:text-[34px]">
                        Every moment leads to the next
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                        One gentle itinerary keeps all the details together, so you can spend less time checking the clock and more time being together.
                    </p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-[0_12px_38px_rgba(16,42,86,0.07)] ring-1 ring-slate-100 sm:p-7">
                    <div className="mb-5 flex items-center justify-between">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-rose-500">Saturday night</p>
                            <h3 className="mt-1 text-[15px] font-semibold text-[#102A56]">A date to remember</h3>
                        </div>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-50 text-rose-500"><Heart size={16} fill="currentColor" /></span>
                    </div>
                    <ol className="space-y-0">
                        {dateEvents.map(({ time, title, place, icon: Icon, color }, index) => (
                            <li key={title} className="relative flex min-h-16.5 gap-3">
                                <div className="flex w-9 shrink-0 flex-col items-center">
                                    <span className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full ${color}`}>
                                        <Icon size={14} />
                                    </span>
                                    {index < dateEvents.length - 1 && <span className="w-px flex-1 bg-linear-to-b from-rose-200 to-amber-100" />}
                                </div>
                                <div className="flex flex-1 items-start justify-between gap-3 pb-4">
                                    <div>
                                        <p className="text-xs font-semibold text-[#102A56]">{title}</p>
                                        <p className="mt-0.5 text-[10px] text-slate-400">{place}</p>
                                    </div>
                                    <span className="pt-0.5 text-[10px] font-medium text-slate-500">{time}</span>
                                </div>
                            </li>
                        ))}
                        <li className="flex gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#FF7A59] via-[#FF6B6B] to-[#FF4D6D] text-white shadow-sm">
                                <Heart size={13} fill="currentColor" />
                            </span>
                            <div className="flex flex-1 items-start justify-between gap-3 pt-1">
                                <div>
                                    <p className="text-xs font-semibold text-[#102A56]">End of Date</p>
                                    <p className="mt-0.5 text-[10px] text-slate-400">One lovely night, together</p>
                                </div>
                                <span className="text-[10px] font-medium text-slate-500">11:00 PM</span>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

function BenefitsSection() {
    return (
        <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="More presence, less planning"
                    title="Why Time Management?"
                    description="Thoughtful timing gives your plans room to breathe and your special moments room to shine."
                />
                <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map(({ title, description, icon: Icon }, index) => (
                        <motion.article
                            key={title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.32, delay: (index % 3) * 0.045 }}
                            className="flex gap-3 border-t border-slate-100 pt-4"
                        >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
                                <Icon size={17} />
                            </span>
                            <div>
                                <h3 className="text-[14px] font-semibold text-[#102A56]">{title}</h3>
                                <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function DashboardCTA() {
    return (
        <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-[#102A56] px-6 py-9 text-center sm:px-10 sm:py-11"
            >
                <div className="absolute -right-20 -top-32 h-64 w-64 rounded-full bg-rose-400/20 blur-3xl" />
                <div className="absolute -bottom-40 -left-20 h-64 w-64 rounded-full bg-indigo-300/15 blur-3xl" />
                <div className="relative">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-200">Coming soon</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-[32px]">Coming to Your DateYatra Dashboard</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100/85">
                        Your romantic schedule, beautifully organized. Once you enter the dashboard, Time Management helps you coordinate calendars, manage event sequences, and keep every date on track.
                    </p>
                    <Link
                        href="/auth/login"
                        className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[#FF7A59] via-[#FF6B6B] to-[#FF4D6D] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-950/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                    >
                        Go to Dashboard
                        <ArrowUpRight size={16} />
                    </Link>
                    <p className="mt-3 text-[10px] text-blue-100/55">Sign in to continue to DateYatra</p>
                </div>
            </motion.div>
        </section>
    );
}

function FinalCTA() {
    return (
        <section className="px-4 pb-14 pt-2 sm:px-6 sm:pb-16 lg:px-8">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 border-t border-slate-100 pt-8 text-center sm:flex-row sm:text-left">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-[#102A56]">Plan Less. Enjoy More.</h2>
                    <p className="mt-1.5 max-w-lg text-sm leading-6 text-slate-500">
                        Let DateYatra take care of the timing while you focus on making the moment special.
                    </p>
                </div>
                <Link
                    href="/auth/register"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[#FF7A59] via-[#FF6B6B] to-[#FF4D6D] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-rose-200/50 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                    Explore DateYatra
                    <ArrowRight size={16} />
                </Link>
            </div>
        </section>
    );
}

export default function TimeManagementFeaturePage() {
    return (
        <div className="bg-white text-slate-800">
            <HeroSection />
            <FeatureOverview />
            <HowItWorks />
            <StaticProductPreview />
            <TimelinePreview />
            <BenefitsSection />
            <DashboardCTA />
            <FinalCTA />
        </div>
    );
}
