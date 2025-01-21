/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";

export default function page() {
    const [count, setCount] = useState(0);
    const decrement = () => setCount(count - 1);
    const increment = () => setCount(count + 1); 
    return (
        <div>
            <h1 className="text-6xl text-center">
                {count}
            </h1>
            <div className="flex justify-center space-x-4">
                <button onClick={increment} >UP</button>
                <button onClick={decrement} >DOWN</button>
            </div>
        </div>
    )
}

