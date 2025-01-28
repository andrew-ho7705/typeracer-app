"use client";

import Game from "@/components/Game";
import Timer from "@/components/Timer";

export default function App() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <Timer />
            <Game />
        </div>
    );
}
