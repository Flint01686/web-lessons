import React from 'react'

export default function TodoListItem({children, id, action})
{
    return(
        <li id={id}>
            <input type="checkbox" />
            <span>{children}</span>
            <button onClick={action}>Delete</button>
        </li>    
    )
}