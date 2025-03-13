'use client'

import { use } from "react";
import { UserContextProvider } from "@/context/UserContext";

export default function AppProvider({ children }) {
    return (
        <UserContextProvider>{children}</UserContextProvider>
    )
}