import "../style/style.css"

let items = Array.from(document.querySelectorAll(".timeline li"))

const options = {
    // родитель целевого элемента - область просмотра
    root: null,
    // без отступов
    rootMargin: '0px',
    // процент пересечения - половина изображения
    threshold: 0.5
}

// создаем наблюдатель
const observer = new IntersectionObserver((entries, observer) => {
    // для каждой записи-целевого элемента
    entries.forEach(entry => {
        // если элемент является наблюдаемым
        if (entry.isIntersecting) {
            const item = entry.target
            item.classList.add("in-view");
        }
    })
}, options)

// начинаю следиьт за всеми элементами таймлайна (P.S. годное API)
for (let i = 0; i < items.length; i++) 
    observer.observe(items[i]);