'use client'
// /app/projects/page.js
import Header from "../components/Header/header"
import Link from "next/link"
// import { Flowchart, Node, Edge } from "../components/ui/flowchart";

export default function Projects() {
    return (
        <div>
            <Header />

            <h2>Projects page</h2>
             <div className = "flex flex-col"> 
                <ol >
                    <li className="list-decimal"> 
            <Link href="/projects/timer" className="w-fit px-2">Timer</Link>
            </li>
            <li>
            <Link href="/projects/realnetworth" className="w-fit px-2">Real Net Worth</Link>
            </li>
            <li>
            <Link href="/projects/dennisidea" className="w-fit px-2">Dennis Ide</Link>
            </li>
            </ol>
            </div>    
        </div>
    )
}