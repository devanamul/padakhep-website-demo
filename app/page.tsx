import Image from "next/image";
import Hero from "@/app/components/hero";
import Destination from "@/app/components/destination";
import Featured from "@/app/components/featured";

export default function Home() {
    return (
        <main className="flex flex-col gap-3">
            <Hero/>
            <Destination/>
            <Featured/>
        </main>
    );
}
