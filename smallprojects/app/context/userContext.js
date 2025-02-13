'use client';

import { createContext, useState, useRef, useContext } from "react";

const userContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    

    return (
        <userContext.Provider value={{
            userData,
            setUserData
        }}>
            {children}
        </userContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(UserContextProvider);
}