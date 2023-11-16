import React, { useState } from "react";

export function TallyCounter() {
    const [tally,setTally] = useState(0);

    return (
        <div className="w-full flex flex-col justify-center items-center py-20">
            <h1 className="text-3xl">{tally}</h1>

            <div className="flex flex-row gap-2">
                <button 
                className="h-[48px] px-2 flex justify-center items-center bg-black text-white">-</button>
                <button 
                onClick={() => setTally(tally + 1)}
                className="h-[48px] px-2 flex justify-center items-center bg-black text-white">+</button>
            </div>
        </div>
    )
}