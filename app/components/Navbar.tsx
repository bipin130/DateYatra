
"use client";

import { useState } from "react";
import { Clock, MapPin, CalendarDays, Utensils, Navigation, MessageCircle, Heart, Calculator, Gift, Cake, HeartHandshake, Search, UserPlus, LogIn, ChevronUp, Menu, X, Phone, Mail, MessageSquare, Pin } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/image/logo.png";
import Link from "next/link";

const features = [
    { title: "Save Time", description: "Find the right place, plan your date and save valuable time.", icon: Clock, color: "bg-rose-50 text-rose-600", href: "/features/save-time" },
    { title: "Find Dating Spots", description: "Discover romantic and perfect dating places around you.", icon: Search, color: "bg-pink-50 text-pink-600", href: "/features/dating-spots" },
    { title: "Time Management", description: "Plan your dating time, activities and schedules easily.", icon: CalendarDays, color: "bg-amber-50 text-amber-600", href: "/features/time-management" },
    { title: "Room Booking", description: "Find and book comfortable rooms for your special moments.", icon: HeartHandshake, color: "bg-orange-50 text-orange-600", href: "/features/room-booking" },
    { title: "Restaurant Booking", description: "Discover restaurants and reserve your perfect table.", icon: Utensils, color: "bg-amber-50 text-amber-700", href: "/features/restaurant-booking" },
    { title: "Food Selection", description: "Explore food menus and choose your favorite meals before dating.", icon: Utensils, color: "bg-emerald-50 text-emerald-600", href: "/features/food-selection" },
    { title: "Live Location Sharing", description: "Share your live location safely with your partner or friends.", icon: Navigation, color: "bg-sky-50 text-sky-600", href: "/features/live-location" },
    { title: "Quick Chat", description: "Chat instantly and stay connected with your special person.", icon: MessageCircle, color: "bg-fuchsia-50 text-fuchsia-600", href: "/features/quick-chat" },
    { title: "Love Proposal", description: "Create beautiful and memorable digital love proposals.", icon: Heart, color: "bg-rose-50 text-rose-700", href: "/features/love-proposal" },
    { title: "Love Calculator", description: "Check your love compatibility and make dating more fun.", icon: Calculator, color: "bg-violet-50 text-violet-600", href: "/features/love-calculator" },
    { title: "Birthday Celebration", description: "Celebrate your loved one's birthday with beautiful surprises.", icon: Cake, color: "bg-amber-50 text-amber-700", href: "/features/birthday" },
    { title: "Anniversary Celebration", description: "Make your anniversary special with memorable digital experiences.", icon: HeartHandshake, color: "bg-pink-50 text-pink-600", href: "/features/anniversary" },
    { title: "Animated Virtual Gifts", description: "Send beautiful animated virtual gifts to someone special.", icon: Gift, color: "bg-violet-50 text-violet-700", href: "/features/virtual-gifts" },
    { title: "Gift Sharing", description: "Share meaningful digital gifts and surprises with your loved ones.", icon: Gift, color: "bg-orange-50 text-orange-600", href: "/features/gift-sharing" },
    { title: "Nearby Places", description: "Find dating, food, travel and entertainment places nearby.", icon: MapPin, color: "bg-lime-50 text-lime-700", href: "/features/nearby-places" },
];

export default function Navbar() {
    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);

    const closeMobileMenu = () => {
        setMobileOpen(false);
        setMobileFeaturesOpen(false);
    };

    return (
        // Head
        <header className="relative z-100 w-full bg-white">
            <div className="hidden bg-rose-500 text-white md:block">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-sm">
                    <div className="flex cursor-pointer items-center gap-6">
                        <span className="flex items-center gap-1.5"><Phone size={16} /> (+977) 9822683177</span>
                        <span className="flex items-center gap-1.5"><Pin size={16} /> Bhaktapur, Nepal</span>
                    </div>
                    <div className="flex cursor-pointer items-center gap-6">
                        <span>WhatsApp</span>
                        <span className="flex items-center gap-1.5"><Mail size={16} /> dateyatra@gmail.com</span>
                    </div>
                </div>
            </div>

            <nav className="relative border-b border-gray-200 bg-white">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">
                    <div className="shrink-0 cursor-pointer select-none">
                        <Link href="/" onClick={closeMobileMenu}>
                            <div className="flex items-center gap-1">
                                <Image src={Logo} alt="DateYatra Logo" width={52} height={52} priority className="h-12 w-12 object-contain" />
                                <div className="flex flex-col leading-none">
                                    <div className="flex items-end whitespace-nowrap">
                                        <span className="text-[23px] font-extrabold tracking-[-1.2px] text-[#102A56] sm:text-[32px] sm:tracking-[-1.8px]">ate</span>
                                        <span className="bg-linear-to-r from-[#FF7A59] via-[#FF6B6B] to-[#FF4D6D] bg-clip-text text-[23px] font-extrabold tracking-[-1.2px] text-transparent sm:text-[32px] sm:tracking-[-1.8px]">Yatra</span>
                                    </div>
                                    <span className="mt-1 text-[7px] font-semibold uppercase tracking-[0.42em] text-[#6B7280] sm:text-[8px] sm:tracking-[0.48em]">Software</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden h-full items-center gap-4 md:flex lg:gap-8">
                        <div className="relative flex h-full items-center" onMouseEnter={() => setFeaturesOpen(true)} onMouseLeave={() => setFeaturesOpen(false)}>
                            <button type="button" className={`flex items-center gap-1 text-sm font-medium transition-colors sm:text-[16px] ${featuresOpen ? "text-rose-700" : "text-gray-600 hover:text-rose-700"}`}>
                                Features
                                <ChevronUp size={14} className={`transition-transform duration-200 ${featuresOpen ? "rotate-0" : "rotate-180"}`} />
                            </button>

                            {featuresOpen && (
                                <div className="absolute left-1/2 top-full z-50 w-[90vw] max-w-230 -translate-x-1/2 pt-2">
                                    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_15px_50px_rgba(0,0,0,0.12)]">
                                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5">
                                            {features.map((feature) => {
                                                const Icon = feature.icon;
                                                return (
                                                    <Link key={feature.title} href={feature.href} className="group flex w-full cursor-pointer items-start gap-3 rounded-xl border border-gray-200 bg-white p-3 text-left transition-all duration-200 hover:-translate-y-px hover:border-rose-100 hover:shadow-sm">
                                                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md sm:h-14 sm:w-14 ${feature.color}`}>
                                                            <Icon size={20} strokeWidth={1.8} />
                                                        </div>
                                                        <div className="pt-0.5">
                                                            <h3 className="text-sm font-semibold text-gray-900 sm:text-[15px]">{feature.title}</h3>
                                                            <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-[13px]">{feature.description}</p>
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/Listed" className="text-sm font-medium text-gray-600 transition-colors hover:text-rose-700 sm:text-[16px]">Listed</Link>
                        <Link href="/contact" className="text-sm font-medium text-gray-600 transition-colors hover:text-rose-700 sm:text-[16px]">Contact</Link>
                    </div>

                    <div className="hidden items-center gap-2 md:flex sm:gap-3">
                        <Link href="/auth/login" className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50">
                            <LogIn size={16} /> Login
                        </Link>
                        <Link href="/auth/register" className="flex items-center gap-2 rounded-full bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700">
                            <UserPlus size={16} /> Sign Up
                        </Link>
                    </div>

                    <button type="button" onClick={() => setMobileOpen(true)} className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 md:hidden">
                        <Menu size={25} />
                    </button>
                </div>

                {mobileOpen && (
                    <div className="fixed inset-0 z-9999 md:hidden">
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" onClick={closeMobileMenu} />

                        <div className="absolute right-0 top-0 h-full w-[82%] max-w-82.5 overflow-y-auto bg-white shadow-2xl">
                            <div className="px-5 pt-6">
                                <div className="flex items-start justify-between">
                                    <Link href="/" onClick={closeMobileMenu}>
                                        <div className="flex items-center gap-1">
                                            <Image src={Logo} alt="DateYatra Logo" width={45} height={45} priority className="h-10 w-10 object-contain" />
                                            <div className="flex flex-col leading-none">
                                                <div className="flex items-end whitespace-nowrap">
                                                    <span className="text-[21px] font-extrabold tracking-[-1px] text-[#102A56]">Date</span>
                                                    <span className="bg-linear-to-r from-[#FF7A59] via-[#FF6B6B] to-[#FF4D6D] bg-clip-text text-[21px] font-extrabold tracking-[-1px] text-transparent">Yatra</span>
                                                </div>
                                                <span className="mt-1 text-[6px] font-semibold uppercase tracking-[0.4em] text-[#6B7280]">Software</span>
                                            </div>
                                        </div>
                                    </Link>

                                    <button type="button" onClick={closeMobileMenu} className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-800">
                                        <X size={20} />
                                    </button>
                                </div>

                                <p className="mt-4 text-center text-[12px] leading-4 text-gray-500">Plan your perfect date with DateYatra.</p>
                                <div className="mt-5 border-t border-gray-100" />

                                <div className="py-5">
                                    <Link href="/" onClick={closeMobileMenu} className="block py-2.5 text-[16px] font-medium text-gray-600 transition hover:text-rose-600">Home</Link>

                                    <button type="button" onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)} className="flex w-full items-center justify-between py-2.5 text-left text-[16px] font-medium text-gray-600 transition hover:text-rose-600">
                                        <span>Features</span>
                                        <ChevronUp size={16} className={`text-emerald-600 transition-transform duration-200 ${mobileFeaturesOpen ? "rotate-0" : "rotate-180"}`} />
                                    </button>

                                    {mobileFeaturesOpen && (
                                        <div className="mt-1 max-h-65 overflow-y-auto rounded-lg bg-gray-50 px-3 py-2">
                                            {features.map((feature) => {
                                                const Icon = feature.icon;
                                                return (
                                                    <Link key={feature.title} href={feature.href} onClick={closeMobileMenu} className="flex w-full items-center gap-2 border-b border-gray-100 py-2.5 text-left last:border-0">
                                                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${feature.color}`}>
                                                            <Icon size={15} />
                                                        </div>
                                                        <span className="text-[13px] text-gray-600">{feature.title}</span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}

                                    <Link href="/Listed" onClick={closeMobileMenu} className="block py-2.5 text-[16px] font-medium text-gray-600 transition hover:text-rose-600">Listed</Link>
                                    <Link href="/contact" onClick={closeMobileMenu} className="block py-2.5 text-[16px] font-medium text-gray-600 transition hover:text-rose-600">Contact</Link>
                                </div>

                                <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-5">
                                    <Link href="/auth/login" onClick={closeMobileMenu} className="flex h-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50">Login</Link>
                                    <Link href="/auth/register" onClick={closeMobileMenu} className="flex h-9 items-center justify-center rounded-lg bg-rose-600 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700">Register</Link>
                                </div>

                                <div className="mt-6 border-t border-gray-100 pb-8 pt-5">
                                    <h3 className="flex items-center gap-2 text-[14px] font-semibold text-emerald-600">
                                        <MessageSquare size={16} /> Contact Us
                                    </h3>

                                    <div className="mt-4 space-y-3">
                                        <a href="mailto:dateyatra@gmail.com" className="flex items-center gap-3 text-[13px] text-gray-500 transition hover:text-emerald-600">
                                            <Mail size={16} className="shrink-0 text-emerald-500" /> <span>dateyatra@gmail.com</span>
                                        </a>
                                        <a href="tel:+9779822683177" className="flex items-center gap-3 text-[13px] text-gray-500 transition hover:text-emerald-600">
                                            <Phone size={16} className="shrink-0 text-emerald-500" /> <span>Sales: +977 9822683177</span>
                                        </a>
                                        <a href="https://wa.me/9779822683177" className="flex items-center gap-3 text-[13px] text-gray-500 transition hover:text-emerald-600">
                                            <MessageSquare size={16} className="shrink-0 text-emerald-500" /> <span>WhatsApp</span>
                                        </a>
                                        <a href="#" className="flex items-center gap-3 text-[13px] text-gray-500 transition hover:text-emerald-600"><span>Follow on Facebook</span></a>
                                        <a href="#" className="flex items-center gap-3 text-[13px] text-gray-500 transition hover:text-emerald-600"><span>Follow on Instagram</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
