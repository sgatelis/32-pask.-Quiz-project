"use strict"

var questions = [
    {
        text: "Kam naudingos morkos?",
        choices: ["Niekam", "Hitleriui", "Kepenims", "Odai"],
        answer: "Odai"
    },
    {
      text: "Kam naudingi obuoliai?",
      choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
      answer: "Virškinimui"
    },
    {
      text: "Kokias ligas padeda gydyti agrastai?",
      choices:  ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
      answer:  "Cukrini diabetą"
    },
    {
      text: "Kokio vitamino gausu apelsinuose?",
      choices:  ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
      answer: "Vitamino C"
    },
    {
      text: "Kokiais dalykais yra turtingi arbūzai?",
      choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
      answer: "Visi teisingi"
    }
]

// Kintamieji
var quiz = document.getElementById("quiz")
var startQuiz = document.getElementById("startQuiz")
var domQuestion, progress, buttons, questionNumber, resultsNumber

// Paleidžia klausimyną
startQuiz.addEventListener("click", start)
function start(){
    quiz.innerHTML =
    `
        <!-- Pavadinimas -->
            <h1>Vaisiai</h1>

            <!-- Klausimas -->
            <p id="question">Aš norėčiau Jūsų paklausti...?</p>

            <!-- Atsakymai -->
            <div class="buttons">
                <button>Pirmas</button>
                <button>Antras</button>
                <button>Trečias</button>
                <button>Ketvirtas</button>
            </div>
            <hr>

            <!-- Progresas -->
            <footer>
                <p>Klausimas: <span id="progress">1</span>&nbspiš 5</p>
            </footer>
    `

    loadSelectors()
}

// Pasižymi visus DOM elementus
function loadSelectors(){
    domQuestion = document.getElementById("question")
    progress = document.getElementById("progress")
    buttons = document.querySelectorAll("button")
    questionNumber = 0
    resultsNumber = 0

    // Priskiria mygtukams eventus
    buttons.forEach((x, i) => {
            x.addEventListener("click", function(){
                // Skaičiuoja teisingus pasirinkimus
                if(this.innerText === questions[questionNumber - 1].answer){
                    resultsNumber++
                }
                
                // Atnaujina informaciją
                if(questionNumber <= buttons.length) {            
                    populate()
                } else {
                    quiz.innerHTML =
                    `
                    <h1>Results: ${resultsNumber}</h1>
                    <button onClick="start()">Bandyti dar kartą</button>
                    `
                }
        })
    })

    // Užkrauna turinį
    populate()
}

// Užkrauna ir atnaujina turinį
function populate(){
     domQuestion.innerText = questions[questionNumber].text
    
    buttons.forEach((x, i) => {
        x.innerText = questions[questionNumber].choices[i]
    })

    questionNumber++
    progress.innerText = questionNumber
}


