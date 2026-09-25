"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { FaClock, FaFire, FaStar, FaCheck, FaTimes } from "react-icons/fa";
import { FitLogContext } from "@/context/FitLogContext";

const MyPlanPage = () => {
    const { plan, setPlan, saved, setSaved } = useContext(FitLogContext);
    const [activeTab, setActiveTab] = useState("plan");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const handleMarkAsDone = (id) => {
        setPlan(plan.filter((item) => item.id !== id));
        toast.success("Marked as done");
    };

    const handleRemove = (id) => {
        if (activeTab === "plan") {
            setPlan(plan.filter((item) => item.id !== id));
        } else {
            setSaved(saved.filter((item) => item.id !== id));
        }
        toast.info("Removed");
    };

    const activeList = activeTab === "plan" ? plan : saved;
    const totalMinutes = activeList.reduce((sum, item) => sum + (item.duration || 0), 0);
    const totalCalories = activeList.reduce((sum, item) => sum + (item.caloriesBurned || 0), 0);

    return (
        <section className="bg-black text-white min-h-screen py-16 px-4 md:px-10">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-2">MY PLAN</h1>
                <p className="text-gray-400 mb-8">
                    Cap of five lifts for today. Finish them, then load more.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-gray-900 rounded-xl p-4 text-center">
                        <p className="text-gray-500 text-sm">Exercises</p>
                        <p className="text-2xl font-bold text-[#ccff00]">{activeList.length}</p>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-4 text-center">
                        <p className="text-gray-500 text-sm">Minutes</p>
                        <p className="text-2xl font-bold text-[#ccff00]">{totalMinutes}</p>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-4 text-center">
                        <p className="text-gray-500 text-sm">Calories</p>
                        <p className="text-2xl font-bold text-[#ccff00]">{totalCalories}</p>
                    </div>
                </div>

                <div className="flex gap-x-6 border-b border-gray-800 mb-8">
                    <button
                        onClick={() => setActiveTab("plan")}
                        className={
                            activeTab === "plan"
                                ? "pb-3 border-b-2 border-[#ccff00] text-[#ccff00] font-semibold"
                                : "pb-3 text-gray-400"
                        }
                    >
                        Today&apos;s Plan
                    </button>
                    <button
                        onClick={() => setActiveTab("saved")}
                        className={
                            activeTab === "saved"
                                ? "pb-3 border-b-2 border-[#ccff00] text-[#ccff00] font-semibold"
                                : "pb-3 text-gray-400"
                        }
                    >
                        Saved
                    </button>
                </div>

                {isLoading ? (
                    <p className="text-center text-gray-400 py-16">Loading workouts…</p>
                ) : activeList.length === 0 ? (
                    <div className="text-center py-16">
                        <h2 className="text-xl font-bold mb-2">NOTHING HERE YET</h2>
                        <p className="text-gray-400 mb-6">
                            Browse the library and add a lift to get today moving.
                        </p>
                        <Link
                            href="/"
                            className="bg-[#ccff00] text-black font-semibold px-6 py-3 rounded-full"
                        >
                            Go to workouts
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {activeList.map((item) => (
                            <div
                                key={item.id}
                                className="bg-gray-900 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                    className="rounded-xl w-24 h-24 object-cover"
                                />

                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="font-bold">{item.name}</h3>
                                    <p className="text-gray-500 text-sm">{item.equipment}</p>
                                    <div className="flex items-center justify-center sm:justify-start gap-4 text-gray-400 text-sm mt-2">
                                        <span className="flex items-center gap-1">
                                            <FaClock /> {item.duration} min
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaFire /> {item.caloriesBurned} kcal
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaStar /> {item.rating}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Link
                                        href={`/workout/${item.id}`}
                                        className="border border-gray-500 text-white text-sm px-4 py-2 rounded-full"
                                    >
                                        View Details
                                    </Link>
                                    {activeTab === "plan" && (
                                        <button
                                            onClick={() => handleMarkAsDone(item.id)}
                                            className="bg-[#ccff00] text-black text-sm px-3 py-2 rounded-full"
                                        >
                                            <FaCheck />
                                        </button>
                                    )}
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="border border-gray-600 text-gray-300 text-sm px-3 py-2 rounded-full"
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default MyPlanPage;
