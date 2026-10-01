import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function CountUp({
    value,
    suffix = '+',
    duration = 1.5,
    className,
    style,
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.8 })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isInView) return

        const animation = animate(0, value, {
            duration,
            ease: 'easeOut',
            onUpdate: (currentValue) => setCount(Math.round(currentValue)),
        })

        return () => animation.stop()
    }, [duration, isInView, value])

    return (
        <span
            ref={ref}
            className={className}
            style={{
                backgroundImage: 'linear-gradient(90deg, var(--primary-dark), var(--primary), #0af6bf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                ...style,
            }}
        >
            {count}{suffix}
        </span>
    )
}