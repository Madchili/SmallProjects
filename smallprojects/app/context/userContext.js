'use client';

import { createContext, useState, useRef, useContext } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        personalData: {
            userId: 1,
            name: "John Doe",
            email: "example@email.com",
            socials: {
                github: "https://github.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
            },
            password: "password",
            role: "user",
            image: "/BK fan-art.webp",
        },
        pageData: {
            Timer: 0,
            Score: 0,
            Level: 1,
        }
    });
    

    return (
        <UserContext.Provider value={{
            userData,
            setUserData
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}