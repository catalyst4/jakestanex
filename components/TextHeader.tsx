import React from 'react'

export const TextHeader = () => {

    const dob = new Date('September 3, 2001').getTime()
    const today = new Date().getTime()
    const age = Math.floor((today-dob) / (1000 * 60 * 60 * 24 * 365))

    return (
        <div className="my-10">
            <h1 className="text-5xl font-black">jake stanex</h1>
            <span className="text-sm font-mono">{age} / 👨‍💻 web dev / ☘️ northern ireland</span>
        </div>
    )
}