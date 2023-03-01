const selectedQuestion = localStorage.getItem('selectedQuestion')
const nextBtn = document.querySelector('.next')
const submitBtn = document.querySelector('.submit')

let questions;
let currentQuestionIndex = 0;
let totalQuestions;
let score = 0;
let wrongAnswerCount = 0


///API

function getQuestions() {
    fetch(`../Questions/${selectedQuestion}.json`).then(response => {
        return response.json()
    }).then(result => {
        console.log(result)
        questions = result
        totalQuestions = result.length
        generateQuestion(questions[currentQuestionIndex])
    })

}

nextBtn.addEventListener('click',()=> {
    checkAnswer(questions[currentQuestionIndex])
    currentQuestionIndex++
    if(currentQuestionIndex === totalQuestions - 1) {
        nextBtn.classList.add('hidden')
        submitBtn.classList.remove('hidden')
    }
    generateQuestion(questions[currentQuestionIndex])
})

submitBtn.addEventListener('click', ()=> {
    checkAnswer(questions[currentQuestionIndex])
    localStorage.setItem('result', JSON.stringify({score,wrongAnswerCount}))
    location.href = '../pages/result.html'
})

function checkAnswer(question){
    const selectedOption = +document.querySelector('input[name="option"]:checked').value
    console.log(selectedOption)

    if(question.options[selectedOption] === question.answer){
        score++
    }else {
        wrongAnswerCount++
    }
}

function generateQuestion(question) {
    console.log(question);
    const template = `
    <div class="questions">
        <div class="question1">
            <h3 class="num">Q${currentQuestionIndex + 1}</h3>
            <h3 class="quest">${question.question}</h3>
        </div>
    </div>
    <div class="display">
    ${question.options.map((option,index) => {
        index = index.toString()
        return `
        <label for=${index} class="option1 answers">
      
        <span>
            <input type="radio" name="option" id=${index} value=${index}>
            ${option}
        </span>
        </label>
        `
    }).join('')}
              
    </div>
    `
    document.querySelector('.question-container').innerHTML = template
}

getQuestions()