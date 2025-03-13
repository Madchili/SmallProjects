'use client'

import { use } from "react";
import { UserContextProvider } from "./UserContext";

export default function AppProvider({ children }) {
    return (
        <UserContextProvider>{children}</UserContextProvider>
    )
}