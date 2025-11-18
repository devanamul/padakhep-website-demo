import React from "react";
import Image from "next/image";
import HDADraft from "@/public/images/HDA-Draft-Final.png"


export default function Destination() {
    return (
        <section className="h-80 bg-white">
            <div className="relative w-1/3 h-full overflow-hidden">
                <Image
                    className="absolute top-2/5 left-20 h-100 w-100 animate-rotate360"
                    src={HDADraft}
                    alt="HDA"
                />
            </div>
        </section>
    )
}