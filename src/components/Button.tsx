import { useEffect, useRef } from 'react'
import { v4 as generateId } from 'uuid';
import { gsap } from 'gsap';

import {chevronRight} from '../assets/icons/index.ts'

type buttonProps = {
    showICon?: 'hide'|'show'
    bgColor?: string
    textShow?: string
    border?: string
}

export default function Button({showICon, bgColor, textShow, border}: buttonProps) {
    const btnId = useRef<string>(generateId())
    const icon = showICon || 'show'
    const text = textShow || 'Shop now'
    const bg = bgColor || 'bg-coral-red'

    useEffect(() => {
        if (bg) {
            const item = document.getElementById(btnId.current)
            gsap.set(item, {'background':bgColor, border:border})
        }
    }, [])

    return (
        <button id={btnId.current} className="relative bg-coral-red py-3 px-6 rounded-full font-semibold active:top-1">
            {text}
            {icon === 'show' && (
                <img className='inline w-6 ml-3' src={chevronRight} alt=" right arrow" />
            )}
        </button>
    )
}