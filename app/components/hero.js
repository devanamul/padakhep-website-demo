import React from "react";

export default function Hero() {
    return (
        <section className="relative h-screen overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/videos/climate-counts-hero.mp4" type="video/mp4"/>
            </video>

            {/* Optional overlay */}
            {/*<div className="absolute inset-0 bg-black/40"></div>*/}

            {/* Content goes here */}
            <div className="relative z-10 flex items-center justify-start h-full pt-30 px-30">
              <span className="flex flex-col animate-fadeSlide">
                <p className="text-white text-7xl font-bold uppercase">
                  Climate counts
                </p>
                <p className="text-white text-3xl w-2/3 py-6">
                  Explore 30 facts about the climate crisis that explain the urgency of action and the promise of solutions.
                </p>
                <button className="bg-[#d12800] w-40 h-10 text-white text-xl">
                  Read More {'>'}
                </button>
              </span>
            </div>

        </section>
    )
}