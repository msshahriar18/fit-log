import Image from "next/image";
import Banner from "@/assets/banner.png";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="bg-black text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4 py-16 bg-[#15171C]">
                <div className="flex-1 text-center md:text-left">
                    <p className="text-[#ccff00] font-semibold tracking-widest text-sm mb-3">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight mb-6">
                        TRAIN WITH INTENT. <br />
                        LOG EVERY SET.
                    </h1>

                    <p className="text-gray-400 max-w-md mx-auto md:mx-0 mb-8">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>


                    <a href="#library"
                        className="inline-flex items-center gap-2 bg-[#ccff00] text-black font-semibold px-6 py-3 rounded-full"
                    >
                        BROWSE WORKOUTS <FaArrowRight />
                    </a>
                </div>

                <div className="flex-1">
                    <Image src={Banner} alt="Banner" width={1000} height={500} />
                </div>
            </div>
        </section>
    );
};

export default Hero;