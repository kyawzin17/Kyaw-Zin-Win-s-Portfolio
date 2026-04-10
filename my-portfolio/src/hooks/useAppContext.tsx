import React, { useContext, createContext, useState } from "react";

interface AppContextType {
    active: string;
    setActive: ( active: string) => void;
}


const Context= createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
    const context= useContext(Context);

    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}

export function AppProvider({ children} : { children: React.ReactNode}) {
    const [active, setActive]= useState("Home");

    return (
        <Context.Provider value={{ active, setActive }}>
            {children}
        </Context.Provider>
    )
}

export default Context;