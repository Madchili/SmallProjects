'use client'

import { use } from "react";
import { UserContextProvider } from "./usercontext";

export default function AppProvider({ children }) {
    return (
        <UserContextProvider>{children}</UserContextProvider>
    )
}