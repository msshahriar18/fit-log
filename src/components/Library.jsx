import WorkoutGrid from "@/components/WorkoutGrid";

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

                <WorkoutGrid workouts={workouts} />
            </div>
        </section>
    );
};

export default Library;
