import bag from "./img.svg"

export function img() {  
    let div = document.createElement("div");
    div.innerHTML = bag;
    document.body.append(div)
}