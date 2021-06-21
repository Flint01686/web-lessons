import {Clock} from "./clock.js"
import "../style/style.css"

let output = document.getElementById("output");

console.log("zalups");
let timer = new Clock(output);
timer.show(); 
timer.start(); 