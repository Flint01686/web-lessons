import React from 'react'

export default function TodoListLayout({children})
{
    return (
    <ul className="todoList">
        {children}
    </ul>
    )
}