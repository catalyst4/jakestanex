import React from 'react'

export const About = () => {
    return (
        <div 
            style={{background: 'linear-gradient(90deg, rgba(0,255,102,0.8) 0%, rgba(0,198,255,0.8) 100%)'}} 
            className="my-10 p-5 rounded-xl shadow-lg"
            >
            <h2 className="text-sm uppercase font-black tracking-widest mb-3">About me</h2>
            <p className="text-sm font-mono">hey im jake. im a web developer. i want to change the world. not sure how. but i will.</p>
        </div>
    )
}