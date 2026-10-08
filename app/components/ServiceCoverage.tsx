"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

type Place = {
    name: string;
    city: "Kathmandu" | "Lalitpur" | "Bhaktapur";
    type: string;
    top: string;
    left: string;
};

const places: Place[] = [
    // Kathmandu (Blue area)
    {
        name: "Swayambhunath (Monkey Temple)",
        city: "Kathmandu",
        type: "Heritage",
        top: "27%",
        left: "22%",
    },
    {
        name: "Boudhanath Stupa",
        city: "Kathmandu",
        type: "Heritage",
        top: "23%",
        left: "50%",
    },
    {
        name: "Pashupatinath Temple",
        city: "Kathmandu",
        type: "Heritage",
        top: "24%",
        left: "71%",
    },
    {
        name: "Thamel",
        city: "Kathmandu",
        type: "Date Spot",
        top: "39%",
        left: "40%",
    },
    {
        name: "Garden of Dreams",
        city: "Kathmandu",
        type: "Date Spot",
        top: "41%",
        left: "24%",
    },
    {
        name: "Kathmandu Durbar Square",
        city: "Kathmandu",
        type: "Heritage",
        top: "49%",
        left: "41%",
    },

    // Bhaktapur (Orange area)
    {
        name: "Bhaktapur Durbar Square",
        city: "Bhaktapur",
        type: "Heritage",
        top: "36%",
        left: "71%",
    },
    {
        name: "Nyatapola Temple",
        city: "Bhaktapur",
        type: "Heritage",
        top: "44%",
        left: "79%",
    },
    {
        name: "Taumadhi Square",
        city: "Bhaktapur",
        type: "Heritage",
        top: "52%",
        left: "68%",
    },
    {
        name: "Dattatreya Square",
        city: "Bhaktapur",
        type: "Heritage",
        top: "52%",
        left: "81%",
    },
    {
        name: "Pottery Square",
        city: "Bhaktapur",
        type: "Date Spot",
        top: "49%",
        left: "58%",
    },
    {
        name: "Siddha Pokhari",
        city: "Bhaktapur",
        type: "Nature",
        top: "32%",
        left: "64%",
    },

    // Lalitpur (Green area)
    {
        name: "Pulchowk",
        city: "Lalitpur",
        type: "Date Spot",
        top: "60%",
        left: "35%",
    },
    {
        name: "Jhamsikhel",
        city: "Lalitpur",
        type: "Restaurant",
        top: "58%",
        left: "55%",
    },
    {
        name: "Golden Temple",
        city: "Lalitpur",
        type: "Heritage",
        top: "68%",
        left: "29%",
    },
    {
        name: "Mahaboudha Temple",
        city: "Lalitpur",
        type: "Heritage",
        top: "74%",
        left: "39%",
    },
    {
        name: "Patan Durbar Square",
        city: "Lalitpur",
        type: "Heritage",
        top: "69%",
        left: "58%",
    },
    {
        name: "Godawari Botanical Garden",
        city: "Lalitpur",
        type: "Nature",
        top: "84%",
        left: "63%",
    },
];

const cityColors = {
    Kathmandu: "#2563EB", // Blue style matching reference
    Bhaktapur: "#D97706", // Orange/Amber style matching reference
    Lalitpur: "#16A34A",  // Green style matching reference
};

export default function DateYatraMap() {
    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20">
            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
                {/* =====================================================
                    HEADER (NO LOGO VERSION)
                ===================================================== */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center mb-12"
                >
                    <div className="inline-block border-b-2 border-slate-900 pb-1 mb-3">
                        <h3 className="font-serif text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                            Our Service Area
                        </h3>
                    </div>
                    <h2 className="font-serif text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">
                        KATHMANDU VALLEY
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                        We provide DateYatra services in Kathmandu, Lalitpur and Bhaktapur.[cite: 1]
                    </p>
                </motion.div>

                {/* =====================================================
                    MAP & SIDEBAR CONTAINER
                ===================================================== */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* MAP CONTAINER */}
                    <div className="lg:col-span-7 relative overflow-hidden rounded-[28px] border border-slate-100 bg-[#F8FAFC] shadow-sm p-4 sm:p-6">
                        <div className="relative mx-auto aspect-[4/4.2] w-full max-w-[550px]">
                            {/* MAP IMAGE */}
                            <Image
                                src="/image/map.jpg"
                                alt="Kathmandu Valley map"
                                fill
                                className="absolute inset-0 object-contain"
                                draggable={false}
                            />

                            {/* CITY LABELS */}
                            <CityLabel name="Kathmandu" city="Kathmandu" top="30%" left="37%" />
                            <CityLabel name="Bhaktapur" city="Bhaktapur" top="41%" left="60%" />
                            <CityLabel name="Lalitpur" city="Lalitpur" top="66%" left="42%" />

                            {/* PLACE MARKERS */}
                            {places.map((place, index) => (
                                <PlaceMarker
                                    key={place.name}
                                    place={place}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>

                    {/* SIDEBAR TEXT LISTS (MATCHING REFERENCE IMAGE RIGHT COLUMN) */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <CityDetailsCard
                            city="Kathmandu"
                            color={cityColors.Kathmandu}
                            items={[
                                "Boudhanath Stupa",
                                "Swayambhunath (Monkey Temple)",
                                "Pashupatinath Temple",
                                "Kathmandu Durbar Square",
                                "Garden of Dreams",
                                "Thamel",
                            ]}
                        />

                        <CityDetailsCard
                            city="Bhaktapur"
                            color={cityColors.Bhaktapur}
                            items={[
                                "Bhaktapur Durbar Square",
                                "Nyatapola Temple",
                                "Taumadhi Square",
                                "Dattatreya Square",
                                "Pottery Square",
                                "Siddha Pokhari",
                            ]}
                        />

                        <CityDetailsCard
                            city="Lalitpur"
                            color={cityColors.Lalitpur}
                            items={[
                                "Patan Durbar Square",
                                "Golden Temple",
                                "Mahaboudha Temple",
                                "Godawari Botanical Garden",
                                "Jhamsikhel",
                                "Pulchowk",
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* =============================================================
   CITY LABEL
============================================================= */
function CityLabel({
    name,
    city,
    top,
    left,
}: {
    name: string;
    city: keyof typeof cityColors;
    top: string;
    left: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ top, left }}
        >
            <div
                className="whitespace-nowrap rounded-full border-2 border-white px-3 py-1 text-xs font-extrabold shadow-sm"
                style={{
                    backgroundColor: `${cityColors[city]}`,
                    color: "white",
                }}
            >
                {name}
            </div>
        </motion.div>
    );
}

/* =============================================================
   PLACE MARKER
============================================================= */
function PlaceMarker({ place, index }: { place: Place; index: number }) {
    const color = cityColors[place.city];

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: 0.05 + index * 0.02,
                type: "spring",
                stiffness: 250,
                damping: 18,
            }}
            whileHover={{ scale: 1.25, zIndex: 50 }}
            className="group absolute z-20 -translate-x-1/2 -translate-y-1/2"
            style={{ top: place.top, left: place.left }}
            title={place.name}
        >
            {/* Pin */}
            <span
                className="relative flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full border-2 border-white shadow-md"
                style={{ backgroundColor: color }}
            >
                <span className="h-1 w-1 rounded-full bg-white" />
            </span>

            {/* Tooltip */}
            <span className="pointer-events-none absolute bottom-full left-1/2 mb-1 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-[#102A56] px-2 py-1 text-[10px] font-semibold text-white shadow-lg group-hover:block">
                {place.name}
            </span>
        </motion.button>
    );
}

/* =============================================================
   CITY DETAILS LIST CARD (Matches Right Side of Reference)
============================================================= */
function CityDetailsCard({
    city,
    color,
    items,
}: {
    city: string;
    color: string;
    items: string[];
}) {
    return (
        <div className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5 shadow-sm">
            <div className="flex items-center gap-2.5 mb-3 border-b border-slate-200/60 pb-3">
                <MapPin className="h-5 w-5" style={{ color }} />
                <h3 className="text-base font-bold text-[#102A56]">{city}</h3>
            </div>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                {items.map((item, idx) => (
                    <li key={item} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <span className="font-semibold text-slate-400 min-w-[14px]">{idx + 1}.</span>
                        <span className="leading-tight">{item}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}