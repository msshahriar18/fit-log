import Image from "next/image";
import { notFound } from "next/navigation";
import AddToPlanButton from "@/components/AddToPlanButton";
import SaveButton from "@/components/SaveButton";

const getWorkout = async (id) => {
    try {
        const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
        if (!res.ok) {
            return null;
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching workout:", error);
        return null;
    }
};

const WorkoutDetailsPage = async ({ params }) => {
    const { id } = await params;
    const workout = await getWorkout(id);

    if (!workout || !workout.name) {
        notFound();
    }

    const muscleGroups = workout.muscleGroups || [];
    const instructions = workout.instructions || [];

    return (
        <section className="bg-black text-white py-16 px-4 md:px-10">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                <div>
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={600}
                        height={400}
                        className="rounded-2xl w-full object-cover"
                    />
                </div>

                <div>
                    <h1 className="text-3xl font-bold mb-3">{workout.name}</h1>
                    <p className="text-gray-400 mb-4">{workout.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="badge badge-outline text-[#ccff00] border-[#ccff00]"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-900 rounded-xl p-4">
                            <p className="text-gray-500 text-sm">EQUIPMENT</p>
                            <p className="font-semibold">{workout.equipment}</p>
                        </div>
                        <div className="bg-gray-900 rounded-xl p-4">
                            <p className="text-gray-500 text-sm">DIFFICULTY</p>
                            <p className="font-semibold">{workout.difficulty}</p>
                        </div>
                        <div className="bg-gray-900 rounded-xl p-4">
                            <p className="text-gray-500 text-sm">SETS</p>
                            <p className="font-semibold">{workout.sets}</p>
                        </div>
                        <div className="bg-gray-900 rounded-xl p-4">
                            <p className="text-gray-500 text-sm">REPS</p>
                            <p className="font-semibold">{workout.reps}</p>
                        </div>
                        <div className="bg-gray-900 rounded-xl p-4">
                            <p className="text-gray-500 text-sm">DURATION</p>
                            <p className="font-semibold">{workout.duration} min</p>
                        </div>
                        <div className="bg-gray-900 rounded-xl p-4">
                            <p className="text-gray-500 text-sm">CALORIES</p>
                            <p className="font-semibold">{workout.caloriesBurned}</p>
                        </div>
                        <div className="bg-gray-900 rounded-xl p-4">
                            <p className="text-gray-500 text-sm">RATING</p>
                            <p className="font-semibold">{workout.rating}</p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-3">Instructions</h2>
                        <ol className="list-decimal list-inside space-y-2 text-gray-300">
                            {instructions.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <AddToPlanButton workout={workout} />
                        <SaveButton workout={workout} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkoutDetailsPage;
