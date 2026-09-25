"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaClock, FaFire, FaStar, FaChevronDown } from "react-icons/fa";

const WorkoutGrid = ({ workouts }) => {
    const [sortBy, setSortBy] = useState("duration");

    const sortedWorkouts = [...workouts].sort((a, b) => {
        if (sortBy === "duration") {
            return a.duration - b.duration;
        } else if (sortBy === "caloriesBurned") {
            return a.caloriesBurned - b.caloriesBurned;
        } else if (sortBy === "rating") {
            return b.rating - a.rating;
        }
        return 0;
    });

    return (
        <div>
            <div className="flex justify-end mb-6">
                <div className="relative">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-gray-900 text-white border border-gray-700 rounded-full px-4 py-2 pr-8 appearance-none"
                    >
                        <option value="duration">Sort By: Duration</option>
                        <option value="caloriesBurned">Sort By: Calories</option>
                        <option value="rating">Sort By: Rating</option>
                    </select>
                    <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedWorkouts.map((workout) => (
                    <Link
                        key={workout.id}
                        href={`/workout/${workout.id}`}
                        className="border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600"
                    >
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-4">
                            <div className="flex gap-2 mb-3">
                                {workout.muscleGroups.map((group) => (
                                    <span
                                        key={group}
                                        className="bg-gray-800 text-xs px-2 py-1 rounded-full"
                                    >
                                        {group.toUpperCase()}
                                    </span>
                                ))}
                            </div>

                            <h3 className="font-bold text-lg mb-1 uppercase">
                                {workout.name}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">
                                {workout.equipment}
                            </p>

                            <div className="flex gap-4 text-sm text-gray-400">
                                <span className="flex items-center gap-1">
                                    <FaClock /> {workout.duration} min
                                </span>
                                <span className="flex items-center gap-1">
                                    <FaFire /> {workout.caloriesBurned} kcal
                                </span>
                                <span className="flex items-center gap-1">
                                    <FaStar className="text-[#ccff00]" /> {workout.rating}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default WorkoutGrid;
