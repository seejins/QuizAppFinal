//question database
const STORE = [
    
    {
        question: "What's Spider-Man's real name?",
        choices: [
            "Bruce Wayne",
            "Clark Kent",
            "Peter Parker",
            "Rory Mcilroy"
        ],
        answer: "Peter Parker"
    },

    {
        question: "How did Spider-man gain his powers?",
        choices: [
            "Oscorp genetically modified the DNA in his body",
            "He was bitten by a radioactive spider",
            "He was born with powers",
            "Iron-Man gave him a suit that contains the powers"
        ],
        answer: "He was bitten by a radioactive spider"
    },

    {
        question: "What year was Spider-Man first introduced?",
        choices: [
            "1962",
            "1984",
            "1995",
            "2002"
        ],
        answer: "1962"
    },

    {
        question: "Which actor has not played Spider-Man on the big screen?",
        choices: [
            "Tom Holland",
            "Tobey Maguire",
            "Andrew Garfield",
            "Christian Bale"
        ],
        answer: "Christian Bale"
    },

    {
        question: "Which villain is not a part of the Sinister Six?",
        choices: [
            "Doctor Octopus",
            "Kraven",
            "Venom",
            "Sandman"
        ],
        answer: "Venom"
    }
];


//varibles for quiz and score
let score = 0;
let questionNum = 0;

//update question #
function updateQuestion() {
    questionNum++;
    $('.questionNum').text(questionNum);
}

//update score
function updateScore() {
    score++;
    $('.score').text(score);
}

//starts the quiz
function startQuiz() {
    $('.status').hide();
    $('.startQuiz').on('click', '.startButton', function(event) {
        console.log("start!");
        $('.status').show();
        $('.startQuiz').hide();
        $('.questionBox').show();
        createQuestion(questionNum);
    });
}

function createQuestion() {
    if (questionNum < STORE.length) {
        return createHTML(questionNum);
    } else {
        $('.questionBox').hide();
        finalScore();
        $('.questionNumber').text(questionNum);
    }
        
}

function createHTML(index) {
    let form = $(`
        <form>
            <fieldset>
                <legend class="questionText">${STORE[index].question}</legend>

                <div class="js-choices"> </div>
            </fieldset>
        </form>`)

    /*for(let i=0; i < STORE[index].choices.length; i++) {
        $('.js-choices').append(`
        <input type = "radio" name = "choices" id = "choice${i+1}" 
        value = "${STORE.choices[i]}" tabindex = "${i+1}">
        <label for = "choices${i+1}"> ${STORE.choices[i]}</label><br/>
        `);
    }
    */

    
    return form;
    



}


function handleQuizApp() {
    startQuiz();
}

$(handleQuizApp);