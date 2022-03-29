/* __________QUIZ_page__________ */

// get elements from the page quiz
const quizMain = document.getElementById('quiz__main'),
      questionsLeft = document.getElementById('stats__questions-left'),
      questionsExist = document.getElementById('stats__questions-exist'),
      statsCounter = document.getElementById('stats__counter'),
      timeLeft = document.getElementById('stats__time-left'),
      questionImg = document.getElementById('question__img'),
      questionText = document.getElementById('question__text'),
      answerOptions = document.querySelectorAll('.question__option'),
      option1 = document.getElementById('option1'),
      option2 = document.getElementById('option2'),
      option3 = document.getElementById('option3'),
      option4 = document.getElementById('option4'),
      btnQuiz = document.getElementById('question-btn');
      
// get elements from endgame screen
const endGameScreen = document.getElementById('endgame__main'),
      yourScore = document.getElementById('endgame__you-got'),
      questYouHad = document.getElementById('endgame__got-from'),
      yourPercent = document.getElementById('endgame__percent'),
      endGamePhrase = document.getElementById('endgame__phrase'),
      endGameAvrTime = document.getElementById('endgame__avr-time'),
      replayBtn = document.getElementById('replay-btn'),
      bg = document.getElementById('bg-div');


// _____questions counter _____________________________
let questionCount = 0;

// _____creation of DIVs of tracker _____________________________
let questions = [];
let nOfQuestions = 0;

let statsTrackers = [];
function trackerAppend (a) {
    for(let i=0; i < a; i++) {
        const tracker = document.createElement("div");
        tracker.classList.add("stats__tracker");
        statsTrackers.push(tracker);
        
        statsCounter.appendChild(tracker);
    };    
    statsTrackers[questionCount].classList.add('active');
};


const createTrackers = () => {
    //This gets the ID of the Quiz via the Main tag in Quiz.ejs 
    let quizId = document.querySelector("#quiz__main").dataset.id;
    //It then generates the question through here
    fetch('/question/' + quizId)
    //Turn the get the Json token delcared in api.js
    .then((res) => res.json())
    //Use the now JSON token to summon the question
    .then((res) => {
        questions = res; 
        nOfQuestions = questions.length;
        trackerAppend(nOfQuestions);
    });
};
createTrackers();
console.log(statsTrackers);

// _____answer tracker : functions to change style _____________________________
// const trackerActive = (t) => {
//     t.classList.add('active');
// }

const trackerGreen = t => {
    t.classList.remove('active');
    t.classList.remove('wrong');
    t.classList.add('correct');
}

const trackerRed = t => {
    t.classList.remove('active');
    t.classList.add('wrong');
}

const cleanTracker = t => {
    t.classList.add('active');
    t.classList.remove('correct');
    t.classList.remove('wrong');
}




// _____functions connencted to answer options : changing styles _____________________________
let selectedOptionNum;
let selectedAnswer;
answerOptions.forEach(option => {
    option.addEventListener('click', (o) => {
        // when choosing an option, we remove active class from the others...
        answerOptions.forEach(option => {
            option.classList.remove('active-option')
        });
        selectedAnswer = o.target;
        // ...and we add the active class to the selected answer
        selectedAnswer.classList.add('active-option');
    })
});

const goGreen = (e) => {
    e.classList.add('correct-option');
    e.classList.remove('active-option');
}
const goRed = (e) => {
    e.classList.add('wrong-option');
    e.classList.remove('active-option');
}
const blockOptions = arr => {
    arr.forEach(a => {
        a.classList.add('pi-none');
    });
}
const cleanOptionStyles = (arr) => {
    arr.forEach(a => {
        a.classList.remove('correct-option');
        a.classList.remove('wrong-option');
        a.classList.remove('pi-none');
    });
}

 
// _____loading of the question_____________________________

const load = (a, b) => {

    // _____ timer on every load() launch ____________________________
    timeLeft.innerText = '20';
    let timeCounter = 19;
    timerFunction = setInterval(() => {
    let seconds = parseInt(timeCounter % 60, 10);

    seconds = seconds < 10 ? "0" + seconds : seconds;

    timeLeft.innerText = `${seconds}`;
    timeCounter = timeCounter <= 0 ? 0 : timeCounter - 1;
    // stop timer if the time is up, mekes an alert -> gotta change that!
    if (seconds === "00") {
        clearInterval(timerFunction);
        a.forEach(e => {
            goRed(e);
        })
        btnQuiz.innerHTML = "Next question";
        questionCount++;
        trackerRed(b);
    }
    }, 1000);
    //_____________________________

    // cleanTracker(statsTrackers[0/* number of question */]);
    cleanOptionStyles(answerOptions);

    //This gets the ID of the Quiz via the Main tag in Quiz.ejs 
    let quizId = document.querySelector("#quiz__main").dataset.id;
    //It then generates the question through here
    fetch('/question/' + quizId)
    //Turn the get the Json token delcared in api.js
    .then((res) => res.json())
    //Use the now JSON token to summon the question
    .then((res) => {
        questions = res; 
        nOfQuestions = questions.length;

        questionText.innerHTML = questions[questionCount].Question;
        questionImg.src = questions[questionCount].Question_Photo;
        console.table(questions);
        let answer = [];
        let questionId = questions[questionCount].Question_ID;
        questionsExist.innerHTML = nOfQuestions;
        fetch('/answer/' + questionId)
        .then((res) => res.json())
        .then((res) =>{
            answer = res;
            console.table(answer);
            option1.innerHTML = answer[0].Answer;
            option2.innerHTML = answer[1].Answer;
            option3.innerHTML = answer[2].Answer;
            option4.innerHTML = answer[3].Answer;
        })
    })   
}


// _____main function for the button _____________________________
let timerAverage = 0;
load(answerOptions, statsTrackers[questionCount]);
let correctAnswers = 0;
btnQuiz.addEventListener('click', () => {
    let quizId = document.querySelector("#quiz__main").dataset.id;
    //It then generates the question through here
    fetch('/question/' + quizId)
    //Turn the get the Json token delcared in api.js
    .then((res) => res.json())
    //Use the now JSON token to summon the question
    .then((res) => {
        questions = res; 
        let answer = [];
        let questionId = questions[questionCount].Question_ID;
    fetch('/correct-answer/' + questionId)
        .then((res) => res.json())
        .then((res) =>{
            answer = res;
            console.table(answer);    

    // verification of the chosen answer is correct on click 
    if (selectedAnswer.classList.contains('active-option')) {
        if(answer[selectedAnswer.dataset.id].Correct_Or_Not === 1) {
            goGreen(selectedAnswer);
            trackerGreen(statsTrackers[questionCount]);
            correctAnswers++;
        } else {
            goRed(selectedAnswer);
            if (answer[0].Correct_Or_Not == 1) {
                goGreen(answerOptions[0]);
            } else if (answer[1].Correct_Or_Not == 1) {
                goGreen(answerOptions[1]);
            } else if (answer[2].Correct_Or_Not == 1) {
                goGreen(answerOptions[2]);
            } else if (answer[3].Correct_Or_Not == 1){
                goGreen(answerOptions[3]);
            } 
            trackerRed(statsTrackers[questionCount]);
        }
        clearInterval(timerFunction); // interval stops when question answered
        blockOptions(answerOptions);
        btnQuiz.innerHTML = "Next question";
        timerAverage += parseInt(timeLeft.innerText);
        console.log(timerAverage);
        questionCount++;
    } else if (btnQuiz.innerHTML === "Next question") {
        load(answerOptions, statsTrackers[questionCount]);
        questionsLeft.innerHTML = questionCount + 1;
        cleanTracker(statsTrackers[questionCount]);
        btnQuiz.innerHTML = "See answer";
    }

    if (questionCount === nOfQuestions) {
        btnQuiz.innerHTML = "See results";
    } 

    if (questionCount === nOfQuestions && btnQuiz.innerHTML === "See results") {
        btnQuiz.addEventListener('click', () => {
            quizMain.classList.add('dnone');
            endGameScreen.classList.remove('dnone');

            // got to insert the image from the quiz DB -> now is inserted from the second question
            bg.style.background = 'center/cover no-repeat url("' + questions[1].Question_Photo + '")';

            yourScore.innerHTML = correctAnswers;
            questYouHad.innerHTML = nOfQuestions;
            let percent = correctAnswers * 100 / nOfQuestions;
            yourPercent.innerHTML = percent.toFixed(0) + '%';
            endGameAvrTime.innerHTML = (20 - (timerAverage / nOfQuestions)).toFixed(2);
            console.log((timerAverage / nOfQuestions).toFixed(2));

            if (percent < 35) {
                endGamePhrase.innerHTML = "Ooooups, your score is";
            } else if (percent > 80) {
                endGamePhrase.innerHTML = "Awesome! Your score is";
            }

            replayBtn.addEventListener('click', () => {
                location.reload();
            })
        })
    }
})       
})
})

