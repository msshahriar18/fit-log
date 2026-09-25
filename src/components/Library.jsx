import Link from "next/link";
import Image from "next/image";
import { FaClock, FaFire, FaStar } from "react-icons/fa";

const getWorkouts = async () => {
    try {
        const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching workouts:", error);
        return [];
    }
};

const Library = async () => {
    const workouts = await getWorkouts();

    return (
        <section id="library" className="bg-black text-white">
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-2">
                    THE LIBRARY
                </h2>
                <p className="text-gray-400 mb-10">
                    Twelve lifts covering every major muscle group.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workouts.map((workout) => (
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
        </section>
    );
};

export default Library;
