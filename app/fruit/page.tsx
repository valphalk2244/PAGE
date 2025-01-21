/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useState } from "react"

export default function page() {
    const [fruit, setFruit] = useState('Apple');
    const toBanana = () => { setFruit('Banana') };
    const toApple = () => { setFruit('Apple') };
    const toOrange = () => { setFruit('Orange') };
    const toPapaya = () => { setFruit('Papaya') };
    return (
        <div>
            <p>{fruit}</p>
            <div className="space-x-4">
            <button onClick={toBanana}>Banana</button>
            <button onClick={toApple}>Apple</button>
            <button onClick={toOrange}>Orange</button>
            <button onClick={toPapaya}>Papaya</button>
            </div>
        </div>
    )
}