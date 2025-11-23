import React from "react";
import Image from "next/image";
import HDADraft from "@/public/images/sdg-wheel.svg"
import Link from "next/link";
import {ArrowRight} from "lucide-react";


export default function Destination() {
    return (
        <section className="h-50 bg-gradient-to-r from-purple-500 to-purple-900 flex">
            <div className="relative w-1/2 h-full overflow-hidden">
                <Image
                    className="absolute top-1/7 left-20 h-100 w-100 animate-rotate360"
                    src={HDADraft}
                    alt="HDA"
                />
            </div>
            <div className="h-full w-1/2 flex flex-col gap-4 justify-center">
               <span className="text-white text-4xl font-bold">
                   Destination 2030
               </span>
                <span className="text-white text-xl">
                    Accelerating progress on the Sustainable Development Goals.
                </span>
                <Link className="flex gap-2 text-white font-bold text-xl text-transform: uppercase items-center" href="/"><span>Explore Now</span><ArrowRight className="text-orange-300"/></Link>
            </div>
        </section>
    )
}