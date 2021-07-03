import React, {useRef, useEffect} from 'react'

export default function TimeBlock({year, children, observer})
{
    const ref = useRef(null)

    useEffect(() => {
        if (observer && ref.current) {
            observer.observe(ref.current)
        }
    }, [observer, ref])

    return (
        <li ref={ref} style={{color: 'white'}}>
            <div>
                <time>{year}</time> {children}
            </div>
        </li>
    ) 
}

