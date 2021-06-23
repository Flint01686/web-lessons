import "../style/style.css"
let add = document.getElementById("add");
let inp = document.getElementById("inp");
let todo = document.getElementById("todo");

function delItem(e)
{
    let item = e.currentTarget.parentNode
    item.remove();
}
let listItemHtml = (text) => `
        <input type="checkbox">
        <span>${text}</span>
        <button>Delete</button>
        `
function addList ()
{
    const newItem = document.createElement('li')
    if (!inp.value) return;
    newItem.innerHTML = listItemHtml(inp.value)
    newItem.children[2].onclick = delItem;

    todo.appendChild(newItem);
}
add.onclick = addList;
inp.addEventListener('keydown', (e) => { if (e.code === "Enter") addList(); })