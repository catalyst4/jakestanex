import React from 'react'

export const Container = ({ children }) => {
    return (
        <div className="container mx-auto px-5 md:px-0">
            {children}
        </div>
    )
}