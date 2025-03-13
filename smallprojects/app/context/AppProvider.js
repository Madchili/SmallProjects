'use client'

import { use } from "react";
import { UserContextProvider } from "@/app/context/UserContext";

export default function AppProvider({ children }) {
    return (
        <UserContextProvider>{children}</UserContextProvider>
    )
}