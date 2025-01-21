/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useEffect, useState } from "react"
import Card from "../components/Card";


export default function page() {
    const [fruit, setFruit] = useState('Apple');
    const toBanana = () => { setFruit('Banana') };
    const toApple = () => { setFruit('Apple') };
    const toOrange = () => { setFruit('Orange') };
    const toPapaya = () => { setFruit('Papaya') };

    useEffect(() => {
        document.title =  `My fruit is ${fruit}` ;
     });
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p>{fruit}</p>
            <div className="space-x-4">
                <button onClick={toBanana}>Banana</button>
                <button onClick={toApple}>Apple</button>
                <button onClick={toOrange}>Orange</button>
                <button onClick={toPapaya}>Papaya</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                <Card src="/4.jpg" title="" />
                <Card src="/1.jpg" title="" />
                <Card src="/2.jpg" title="" />
                <Card src="/3.jpg" title="" />
            </div>
        </div>
    )
}


