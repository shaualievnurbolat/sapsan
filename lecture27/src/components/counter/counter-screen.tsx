import { useState } from "react"

import './counter-screen.css'

function Counter(): JSX.Element {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count - 1)
            }}className="custom-button">DEC</button>
            <button onClick={() => {
                setCount(count + 1)
            }} className="custom-button">INC</button>
        </>
    )
}

export default Counter