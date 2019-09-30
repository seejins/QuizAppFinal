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
    $('.home').on('click', '.startButton', function(event) {
        console.log("start!");
        $('.status').show();
        $('.home').hide();
        $('.questionBox').show();
        $('.questionBox').prepend(handleQuestion(questionNum));
    });
}

function handleQuestion(num) {
    $('.questionBox').html(
        `<form>
            <fieldset>
                <legend class="questionText">${STORE[num].question}</legend>
            </fieldset>
        </form>`);

    handleChoices(num);
}

function handleChoices(index) {
    let field = $('.questionBox').find('fieldset');

    STORE[index].choices.forEach(function (value, answerIndex) {
        $(`<label class="format" for="${answerIndex}">
            <input class="radio" type="radio" id="${answerIndex}" value="${value}" name="answer" required>
            <span>${value}</span>
        </label>
        `).appendTo(field);
    });
    $(`<button type="submit" class="submitButton button">Submit</button>`).appendTo(field);

}

function submitAnswer() {
    $('.questionBox').on('submit', function(event) {
        event.preventDefault();
        $('.alt').hide();
        $('.feedback').show();
        if($('input:checked').val() === STORE[questionNum].answer) {
            right();
        } else {
            wrong();
        }

    });

}

function right() {
    $('.feedback').html(
        `<span>That's right!</span>
        <button type="button" class="next button">Next</button>`);
    
        updateScore();
        console.log('right');
}

function wrong() {
    $('.feedback').html(
        `<span>Boo.. The right answer is ${STORE[questionNum].answer}</span>
        <button type="button" class="next button">Next</button>`);

        console.log('wrong');
}

function handleNext() {
    $('.questBox').on('click', '.next', function(event) {
        $('.alt').hide();
        updateQuestion();
        console.log(questionNum < STORE.length);    
        if (questionNum < STORE.length) {
            $('.questionBox').show();
            $('.questionBox form').replaceWith(handleQuestion(questionNum));
        } else {
            $('.questionNum').text(5);
            results();
        }
    });

    
}

function results() {
    $('.results').show();
    console.log('results');

    $('.results').html(
        `<span>You got ${score} out of 5!</span>

        <button type="submit" class="restart button">Go Again!</button>`);
}

function restart() {
    $('.questBox').on('click', '.restart', function(event) {
        event.preventDefault();
        resetStats();
        $('.alt').hide();
        $('.home').show();
    });
}

function resetStats() {
    score=0;
    questionNum=0;
    $('.score').text(0);
    $('.questionNum').text(0);
}


function handleQuizApp() {
    startQuiz();
    submitAnswer();
    handleNext();
    restart();
}

$(handleQuizApp);