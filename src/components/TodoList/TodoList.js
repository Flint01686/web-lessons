import React, {useRef, useState} from "react"
import TodoListItem from "./TodoListItem";
import TodoListLayout from "./TodoListLayout";

let currentKey = 0;

export default function TodoList()
{
    let inp = useRef(null)
    
    let [listItems, setListItems] = useState([])
    
    let delItem = (e) => {
        let event = e.currentTarget.parentNode;
        setListItems(
            (prev) => {
                let todoList = Array.from(prev);
                let deletedItemIndex = 0;
                for (let todoItem of todoList) 
                    if (todoItem.key !== event.id) deletedItemIndex+=1; else break;
                todoList.splice(deletedItemIndex, 1)
                return todoList
            }     
        )   
    } 
    function addList()
    {
        if (!inp.current.value) return;
        let currListItems = Array.from(listItems);
        currListItems.push(
            <TodoListItem 
                id={currentKey} action={delItem} key={currentKey++}>{inp.current.value}
            </TodoListItem>
        )
        setListItems(currListItems);
    }
   
    return (
        <div className="root">
            <div className="root__adder">
                <input ref={inp} type="text" onKeyDown={(e) => { if (e.code === "Enter") addList();}}/>
                <button onClick={addList}>Add</button>
            </div>
            <TodoListLayout>{listItems}</TodoListLayout>
        </div>  
    )
}