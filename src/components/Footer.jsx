import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-4 py-6">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={Logo} alt="Logo" width={28} height={28} />
                    <h1 className="font-bold text-xl tracking-wide">FITLOG</h1>
                </Link>

                <p className="text-gray-400 text-sm">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;