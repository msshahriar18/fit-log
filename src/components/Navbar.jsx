"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.png";
import { FitLogContext } from "@/context/FitLogContext";

const Navbar = () => {
    const pathname = usePathname();
    const { plan, saved } = useContext(FitLogContext);

    const navLinks = [
        { name: "Workout", href: "/" },
        { name: "My Plan", href: "/my-plan" },
    ];

    return (
        <nav className="bg-black text-white sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4 py-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={Logo} alt="Logo" width={28} height={28} />
                    <h1 className="font-bold text-xl tracking-wide">FITLOG</h1>
                </Link>

                <ul className="flex items-center gap-x-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={
                                    pathname === link.href
                                        ? "text-[#ccff00] font-semibold"
                                        : "text-gray-300"
                                }
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-x-3">
                    <Link
                        href="/my-plan"
                        className="bg-[#ccff00] text-black text-sm font-semibold px-3 py-1 rounded-full"
                    >
                        Plan {plan.length}
                    </Link>
                    <Link
                        href="/my-plan"
                        className="border border-gray-500 text-gray-300 text-sm px-3 py-1 rounded-full"
                    >
                        Saved {saved.length}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;