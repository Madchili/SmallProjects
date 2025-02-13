'use client'

import { use } from "react";
import { UserContextProvider } from "./userContext";

export default function AppProvider({ children }) {
    return (
        <UserContextProvider>
            {children}
        </UserContextProvider>
    )
}