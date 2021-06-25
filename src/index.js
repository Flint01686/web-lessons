import "../style/style.css"
function quiz(title, annotation, questions, output)
{
    let currentQuestionNum = 0;
    let lastQuestion = null;
    let htmlAnsByQuestArr = (question) => {
        let res=""
        let i = 0;
        for (let ans of question.answers)
            res += `<label><input name="ans" type="${question.type}"  required
            value="ansId${i}"> ${ans} </label>`
        return res; 
    };

    const html = `
    <strong>${title}</strong>
    <p>${annotation}</p>
    <span>${questions[currentQuestionNum].text}</span>
    <form class="quiz__panel_ans" id="answers">
        
    </form>
    <button oncklick>Next</button>
    `

    const quiz = document.createElement('div')
    quiz.innerHTML = html
    quiz.id = "quiz"
    quiz.classList.add("quiz")

    output.appendChild(quiz)

    let answersOut = document.getElementById("answers")
    console.log(answersOut);
    answersOut.innerHTML = htmlAnsByQuestArr(questions[currentQuestionNum])
}

let title = "Who is this mysterious Colonel Sanders?";
let annotation = "Это история обычного парня который выгребал конский навоз на Кубе...";
let questions = [
    {
        type: "radio", 
        text: "Когда родился Полковник Сандерс",
        answers: ["11 сентября 2001 года","9 сентября 1890", "19 сентября 2001 года", "10 сентября 1890"],
        rightAnsId: 1
    }
]
let output = document.getElementById("root")
quiz(title, annotation, questions, output)