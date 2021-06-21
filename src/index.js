import "../style/style.css"
import {Calc} from "./calc"
var field = document.getElementsByClassName("calc");
var calc = new Calc(field);
var buttons = document.getElementsByTagName("button");

for (let i = 0; i< buttons.length-1;)
    if (buttons[i].id !== "solver")
        if (!buttons[i].onclick) buttons[i++].onclick = (e) => {
            calc.addElem(e)
        };
console.log();