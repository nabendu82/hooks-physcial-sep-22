import React, { useEffect, useState } from 'react'

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('HookMouse logMousePosition')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('HookMouse useEffect');
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log('HookMouse cleanupcode')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])

    return (
        <>
            <h1>Hooks X - {x}, Y - {y}</h1>
        </>
    )
}

export default HookMouse