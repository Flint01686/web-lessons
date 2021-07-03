import React from 'react'

export default function Button({className, action, children})
{
    return (
        <button className={className} onClick={action} > {children} </button>
    )
}