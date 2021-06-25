import "../style/style.css"
function quiz(title, annotation, questions, output)
{
    let currentQuestionNum = 0;
    let lastQuestion = null
    let sucess = []
    let htmlAnsByQuestArr = (question) => {
        let res=""
        let i = 0;
        for (let ans of question.answers)
            res += `<label><input name="ans" type="${question.type}"
        value="${++i}"> ${ans} </label>`
        return res; 
    };

    let addQuestionToForm = () => {
        askTitle.textContent = questions[currentQuestionNum].text;
        answersOut.innerHTML = htmlAnsByQuestArr(questions[currentQuestionNum])
        lastQuestion = questions[currentQuestionNum]
    }

    function nextQuestion()
    {
        let currAnswers = Array.from(document.getElementsByName("ans")).filter(ans => ans.checked)
        let currAnswersIds = [];
        for (let currAns of currAnswers) currAnswersIds.push(currAns.value)
        if (currAnswersIds.length === 0) {alert("Ты ответ то выбери, пожалуйста, ок да?"); return}
        if (lastQuestion) 
            if (JSON.stringify(lastQuestion.rightAnswersIds) === JSON.stringify(currAnswersIds)) 
                sucess.push(currAnswersIds)

        if (questions.length-1 == currentQuestionNum) 
        {
            currentQuestionNum = 0;
            alert(`${sucess.length} из ${questions.length} ${sucess.length === questions.length ? " красавчик уважаю." : " попытка - не пытка))"}`)
            sucess = []
            lastQuestion = null
        }
        else currentQuestionNum++
        
        addQuestionToForm()
    }

    const html = `
    <strong>${title}</strong>
    <p>${annotation}</p>
    <span id="text"></span>
    <form class="quiz__panel_ans" id="answers">
        
    </form>
    <button id="next">Next</button>
    `

    const quiz = document.createElement('div')
    quiz.innerHTML = html
    quiz.id = "quiz"
    quiz.classList.add("quiz")

    output.appendChild(quiz)
    let next = document.getElementById("next")
    next.onclick = nextQuestion;

    let askTitle = document.getElementById("text")
    askTitle.textContent = questions[currentQuestionNum].text;

    let answersOut = document.getElementById("answers")
    console.log(answersOut);
    addQuestionToForm()
}

let title = "Who is this mysterious Colonel Sanders?";
let annotation = "Это история обычного парня который выгребал конский навоз на Кубе...";
let questions = [
    {
        type: "radio", 
        text: "Когда родился Полковник Сандерс",
        answers: ["11 сентября 2001 года","9 сентября 1890", "19 сентября 2001 года", "10 сентября 1890"],
        rightAnswersIds: ["2"]
    },
    {
        type: "radio", 
        text: "Когда умер Полковник Сандерс",
        answers: ["16 декабря 1980","9 сентября 1990", "25 января 1980", "21 июля 1982"],
        rightAnswersIds: ["1"]
    },
    {
        type: "checkbox", 
        text: "Почему Сандерс - полковник?",
        answers: ["Служил во Вьетнаме", "Убирал дерьмо в конюшнях", "Служил на Кубе"],
        rightAnswersIds: ["2","3"]
    },
    {
        type: "radio", 
        text: "Что лежит у хобицца в карманце",
        answers: ["Ничего"],
        rightAnswersIds: ["1"]
    },
]
let output = document.getElementById("root")
quiz(title, annotation, questions, output)