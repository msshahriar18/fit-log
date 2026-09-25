"use client";

import { useContext } from "react";
import { toast } from "react-toastify";
import { FaBookmark } from "react-icons/fa";
import { FitLogContext } from "@/context/FitLogContext";

const SaveButton = ({ workout }) => {
    const { saved, setSaved } = useContext(FitLogContext);

    const handleSave = () => {
        const alreadySaved = saved.some((item) => item.id === workout.id);
        if (alreadySaved) {
            toast.warning("Already saved");
            return;
        }
        setSaved([...saved, workout]);
        toast.success("Saved for later");
    };

    return (
        <button
            onClick={handleSave}
            className="flex items-center gap-2 border border-gray-500 text-white font-semibold px-5 py-3 rounded-full"
        >
            <FaBookmark /> Save for later
        </button>
    );
};

export default SaveButton;
