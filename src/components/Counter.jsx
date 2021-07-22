import React, { useState } from 'react'

export function Counter() {
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
    }

    return (
        <>
            <span>{counter}</span>
            <button onClick={increment}>Adiciona</button>
        </>
    )
}