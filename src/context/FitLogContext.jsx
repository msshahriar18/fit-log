"use client";

import { createContext, useState } from "react";

export const FitLogContext = createContext({
    plan: [],
    setPlan: () => { },
    saved: [],
    setSaved: () => { },
});

const FitLogProvider = ({ children }) => {
    const [plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);

    const sharedData = {
        plan,
        setPlan,
        saved,
        setSaved,
    };

    return (
        <FitLogContext.Provider value={sharedData}>
            {children}
        </FitLogContext.Provider>
    );
};

export default FitLogProvider;