import type { Metadata } from "next";
import TimeManagementFeaturePage from "./components/TimeManagementFeaturePage";

export const metadata: Metadata = {
    title: "Time Management | DateYatra",
    description:
        "Plan your dating time, activities, and schedules easily with DateYatra. Discover a more thoughtful way to organize every special moment.",
};

export default function TimeManagementPage() {
    return <TimeManagementFeaturePage />;
}
