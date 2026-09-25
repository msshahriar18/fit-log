"use client";

import { useContext } from "react";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import { FitLogContext } from "@/context/FitLogContext";

const AddToPlanButton = ({ workout }) => {
    const { plan, setPlan } = useContext(FitLogContext);

    const handleAddToPlan = () => {
        const alreadyAdded = plan.some((item) => item.id === workout.id);
        if (alreadyAdded) {
            toast.warning("Already in today's plan");
            return;
        }
        setPlan([...plan, workout]);
        toast.success("Added to today's plan");
    };

    return (
        <button
            onClick={handleAddToPlan}
            className="flex items-center gap-2 bg-[#ccff00] text-black font-semibold px-5 py-3 rounded-full"
        >
            <FaPlus /> Add to today&apos;s plan
        </button>
    );
};

export default AddToPlanButton;
