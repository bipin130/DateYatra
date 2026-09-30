"use client";

import Image from "next/image";
import {
    CalendarDays,
    Clock3,
    Gift,
    Hotel,
    MapPin,
    Utensils,
    Star,
    Heart,
    ChevronRight,
} from "lucide-react";

const benefits = [
    { icon: MapPin, title: "Quickly find suitable places", iconClass: "bg-[#ffe5ec] text-[#ff4169]" },
    { icon: CalendarDays, title: "Plan your date and schedule in advance", iconClass: "bg-[#eee5ff] text-[#8b5cf6]" },
    { icon: Utensils, title: "Book restaurants and tables easily", iconClass: "bg-[#fff0df] text-[#f59b35]" },
    { icon: Hotel, title: "Find and book rooms", iconClass: "bg-[#e2edff] text-[#4385f5]" },
    { icon: Gift, title: "Arrange gifts and celebrations", iconClass: "bg-[#e2f7e5] text-[#43ad55]" },
    { icon: Clock3, title: "Reduce time spent on searching and planning", iconClass: "bg-[#ffe5ec] text-[#ff4169]" },
];

const planItems = [
    { icon: Utensils, text: "Restaurant" },
    { icon: Hotel, text: "Hotel & Room" },
    { icon: MapPin, text: "Activity" },
    { icon: Gift, text: "Celebration" },
];

export default function Page() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-[#fffafa] text-[#102a56]">
            <div className="mx-auto w-full max-w-[1500px] px-5 py-7 sm:px-8 lg:px-10">

                <section className="grid items-center gap-8 px-2 sm:px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4 lg:px-7">

                    <div className="relative z-10">
                        <div className="flex items-start gap-6">
                            <div className="hidden h-[115px] w-[115px] shrink-0 items-center justify-center rounded-[22px] bg-[#ffe8ed] sm:flex">
                                <Clock3 size={62} strokeWidth={1.9} className="text-[#ff4169]" />
                            </div>

                            <div className="pt-1">
                                <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-[#ff4169] sm:text-[14px]">DateYatra Software</p>
                                <h1 className="mt-2 text-[48px] font-extrabold leading-none tracking-[-2.5px] text-[#102a56] sm:text-[58px] lg:text-[64px]">Save Time</h1>
                                <div className="mt-5 h-[3px] w-[54px] bg-[#ff4169]" />
                                <p className="mt-5 max-w-[480px] text-[19px] font-medium leading-[1.5] text-[#60779e] sm:text-[21px]">
                                    Plan your date faster and avoid unnecessary searching.
                                </p>
                            </div>
                        </div>

                        <p className="mt-8 max-w-[600px] text-[16px] leading-[1.78] text-[#50658a] sm:text-[18px]">
                            DateYatra helps users save time by bringing the important parts of a date plan into one place. Users can quickly find a suitable restaurant, hotel, table, activity, or celebration option, select their preferred date and time, and make a booking without spending time searching through multiple platforms.
                        </p>
                    </div>

                    <div className="relative h-[380px] sm:h-[450px] lg:h-[490px]">
                        <div className="absolute left-[-35px] top-[55px] h-[170px] w-[180px] rounded-full bg-[#ffe4e9]" />
                        <div className="absolute bottom-[20px] left-0 h-[150px] w-[260px] rounded-full bg-[#ffdce6]" />
                        <div className="absolute right-[-25px] top-[30px] h-[160px] w-[230px] rounded-full bg-[#fff0df]" />

                        <div className="absolute inset-0 overflow-hidden rounded-[46%_18%_19%_45%]">
                            <Image src="/image/save.jpg" alt="Couple sitting together at sunset" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 60vw" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#102a56]/10 via-transparent to-white/5" />

                            <div className="absolute left-[19%] top-[7%] rotate-[-5deg] text-center">
                                <p className="font-serif text-[27px] italic leading-none text-[#102a56] sm:text-[32px]">Better Plans</p>
                                <p className="mt-1 font-serif text-[27px] italic leading-none text-[#102a56] sm:text-[32px]">
                                    Happier Moments <span className="ml-2 text-[#ff4169]">♡</span>
                                </p>
                                <div className="mx-auto mt-3 h-[2px] w-[160px] rotate-[-7deg] bg-[#ff4169]" />
                            </div>

                            {/* Transparent Plan Card */}
                            <div className="absolute right-[4%] top-[25%] w-[205px] rotate-[3deg] rounded-[18px] bg-white/35 p-3 shadow-[0_12px_30px_rgba(15,23,42,0.10)] backdrop-blur-[3px] sm:w-[245px] sm:p-4">

                                <div className="flex items-center gap-3 px-1">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/35">
                                        <CalendarDays size={19} className="text-[#ff4169]" />
                                    </div>
                                    <span className="text-[14px] font-bold text-[#102a56] sm:text-[15px]">Plan Your Date</span>
                                </div>

                                <div className="mt-3 space-y-2">
                                    {planItems.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <div key={item.text} className="flex items-center gap-2 rounded-xl bg-white/35 px-2.5 py-2.5 backdrop-blur-[2px]">
                                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/35 text-[#ff4169]">
                                                    <Icon size={16} />
                                                </div>
                                                <span className="flex-1 text-[11px] font-medium text-[#102a56] sm:text-[13px]">{item.text}</span>
                                                <ChevronRight size={15} className="text-[#52688d]" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <span className="absolute bottom-[18%] left-[1%] text-[34px] text-[#ff687c]">♥</span>
                            <span className="absolute bottom-[17%] right-[1%] rotate-[-15deg] text-[43px] text-[#ff4169]">♡</span>
                        </div>
                    </div>
                </section>

                <section className="mt-5 grid gap-5 px-2 sm:px-5 lg:grid-cols-[1.65fr_0.9fr] lg:px-7">

                    <div className="rounded-[23px] bg-[#fcf8ff] p-5 sm:p-6">
                        <div className="mb-5 flex items-center gap-3">
                            <Star size={24} fill="#ff4169" strokeWidth={1.5} className="text-[#ff4169]" />
                            <h2 className="text-[14px] font-bold uppercase tracking-[0.24em] text-[#ff4169] sm:text-[16px]">Key Benefits</h2>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {benefits.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div key={item.title} className="min-h-[155px] rounded-[16px] bg-white p-5 shadow-[0_5px_18px_rgba(15,23,42,0.035)]">
                                        <div className={`flex h-[60px] w-[60px] items-center justify-center rounded-full ${item.iconClass}`}>
                                            <Icon size={28} strokeWidth={2.1} />
                                        </div>
                                        <h3 className="mt-4 max-w-[225px] text-[16px] font-medium leading-[1.45] text-[#102a56] sm:text-[17px]">{item.title}</h3>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[23px] bg-gradient-to-br from-[#fff7f7] via-white to-[#fff0e8] p-6 sm:p-7">
                        <div className="flex items-center gap-4">
                            <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#ff4169] sm:text-[13px]">Our Promise</p>
                            <div className="h-px flex-1 bg-[#ffc6ce]" />
                            <Heart size={24} strokeWidth={1.7} className="text-[#ff4169]" />
                            <div className="h-px w-10 bg-[#ffc6ce]" />
                        </div>

                        <div className="mt-7">
                            <div className="flex items-center gap-2 text-[13px] font-medium text-[#ff4169] sm:text-[14px]">
                                <Clock3 size={16} /> Card text
                            </div>
                            <h2 className="mt-1 text-[29px] font-extrabold tracking-[-1px] text-[#102a56]">Save Time</h2>
                            <p className="mt-1 text-[15px] italic leading-[1.5] text-[#50658a] sm:text-[16px]">
                                Find the right place, plan your date,<br />and save valuable time.
                            </p>
                        </div>

                        <div className="my-5 h-px bg-[#ffcbd1]" />

                        <div>
                            <div className="flex items-center gap-2 text-[13px] font-medium text-[#ff4169] sm:text-[14px]">
                                <Clock3 size={16} /> Another way
                            </div>
                            <h2 className="mt-1 text-[29px] font-extrabold tracking-[-1px] text-[#102a56]">Save Time</h2>
                            <p className="mt-1 max-w-[370px] text-[15px] leading-[1.55] text-[#50658a] sm:text-[16px]">
                                Plan your perfect date in one place—from finding a location to booking your table, room, and celebration.
                            </p>
                        </div>

                        <div className="relative z-10 mt-7 text-right">
                            <p className="font-serif text-[20px] italic leading-none text-[#ff4169]">Your Perfect Date</p>
                            <p className="mt-1 font-serif text-[20px] italic leading-none text-[#ff4169]">Starts Here! ♡</p>
                            <div className="ml-auto mt-2 h-[2px] w-[125px] rotate-[-7deg] bg-[#ff4169]" />
                        </div>

                        <div className="pointer-events-none absolute -bottom-14 -right-8 text-[135px] leading-none text-[#ffdce3]">♥</div>
                    </div>
                </section>
            </div>
        </main>
    );
}