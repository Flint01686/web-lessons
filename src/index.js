import "../style/style.css"

let items = Array.from(document.querySelectorAll(".timeline li"))

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function check() {
    for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
            items.splice(i--, 1);
        }
    }
}

// listen for events
window.addEventListener("load", check);
window.addEventListener("resize", check);
window.addEventListener("scroll", check);