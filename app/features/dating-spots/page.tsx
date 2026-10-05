import type { Metadata } from "next";
import DatingSpotsFeaturePage from "./components/DatingSpotsFeaturePage";

export const metadata: Metadata = {
    title: "Find Dating Spots | DateYatra",
    description: "Discover how DateYatra helps you find a lovely place for your next date, from cozy cafés to memorable experiences.",
};

export default function DatingSpotsPage() {
    return <DatingSpotsFeaturePage />;
}
