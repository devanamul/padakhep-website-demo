import React from 'react';
import Image from "next/image";
import FullLogo from "@/public/images/full-logo.png"
import Link from "next/link";
import {Facebook, Linkedin, X, Instagram, Youtube} from "lucide-react";


export default function Footer() {
    return (
        <footer className="px-30 bg-[#67469c] text-white">
            <div className="py-10 border-b border-b-white">
                <Image className="w-1/3" src={FullLogo} alt="Full Logo"/>
            </div>
            {/*<hr className="text-white"/>*/}
            <div className="flex justify-between py-10">
                <div>
                    <ul>
                        <li className="text-xl font-bold text-transform: uppercase">
                            Who we are
                        </li>
                        <li>
                            At a glance
                        </li>
                        <li>
                            Governing Body
                        </li>
                        <li>
                            Legal Status
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="text-xl font-bold text-transform: uppercase">
                            What we do
                        </li>
                        <li>
                            Health & Nutrition
                        </li>
                        <li>
                            Social Development
                        </li>
                        <li>
                            Financial Impact Choice
                        </li>
                        <li>
                            Agriculture & Climate Adaption
                        </li>
                        <li>
                            Market Connect
                        </li>
                        <li>
                            Education & Skill Development
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="text-xl font-bold text-transform: uppercase">
                            Useful Links
                        </li>
                        <li>
                            <Link href="/">Gallery</Link>
                        </li>
                        <li>
                            <Link href="/">Notice</Link>
                        </li>
                        <li>
                            <Link href="/">Career</Link>
                        </li>
                        <li>
                            <Link href="/">E News</Link>
                        </li>
                        <li>
                            <Link href="/">Citizen’s Charter</Link>
                        </li>
                        <li>
                            <Link href="/">Contact Us</Link>
                        </li>

                    </ul>
                </div>
                <div className="flex flex-col max-w-1/3 gap-2">
                    <span className="text-xl font-bold text-transform: uppercase">Contact</span>
                    <span className="text-sm font-bold">Padakhep Manabik Unnayan Kendra</span>
                    <span>S Tower, House # 28/1, West Tejturi Bazar, Tejgaon, Dhaka-1215, Bangladesh.</span>
                    <span>PABX 880-2-58151126, 58156925, 55010405</span>
                    <span>pmuk@padakhep.org, info@padakhep.org</span>
                    <p className="flex gap-4 pt-6">
                        <Facebook />
                        <Linkedin />
                        <X />
                        <Instagram />
                        <Youtube />
                    </p>
                </div>

            </div>
        </footer>
    )
}