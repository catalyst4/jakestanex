import React, { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { useTimeoutFn } from 'react-use'

export const About = () => {

    let [isShowing, setIsShowing] = useState(true)
    let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500)

    return (
        <Transition
          as={Fragment}
          show={isShowing}
          enter="transition ease-out duration-2000"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
            <div 
                style={{background: 'linear-gradient(90deg, rgba(0,255,102,0.8) 0%, rgba(0,198,255,0.8) 100%)'}} 
                className="mb-5 p-5 rounded-xl shadow-lg"
            >
                <h2 className="text-sm uppercase font-black tracking-widest mb-3">Mission</h2>
                <p className="text-sm font-mono">hey im jake. i want to make the world a better place. im not sure how. but i will.</p>
            </div>    
        </Transition>
    )
}