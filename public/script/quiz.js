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
    // stop timer if the time is up, all options get blocked, are marked as wrong
    if (seconds === "00") {
        clearInterval(timerFunction);
        a.forEach(e => {
            e.classList.add('wrong-option');
            e.classList.add('pi-none');
        })
        btnQuiz.innerHTML = "Next question";
        statsTrackers[questionCount].classList.remove('active');
        statsTrackers[questionCount].classList.add('wrong');
        questionCount++;

        if (questionCount === statsTrackers.length) {
            btnQuiz.innerHTML = "See results";
            questionCount--;
        }
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

    // if (answerOptions[0].classList.contains('wrong-option') && answerOptions[1].classList.contains('wrong-option')) {
    //     console.log("A-HA!!!");

    // }        

    // verification of the chosen answer is correct on click 
    if (selectedAnswer.classList.contains('active-option')) {
    // if correct -> apply green classes to tracker, to answer, concatenate correct answers
        if(answer[selectedAnswer.dataset.id].Correct_Or_Not === 1) {
            goGreen(selectedAnswer);
            trackerGreen(statsTrackers[questionCount]);
            correctAnswers++;
    // otherwise the chosen answer turns red, we find the correct answer and turn it red, tracker goes red
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
    // whatewer the response, we stop the timer, disable clicking of answer options, change button text, add the data from timer to timerAverage variable, concatenate the index of the question
        clearInterval(timerFunction); // interval stops when question answered
        blockOptions(answerOptions);
        btnQuiz.innerHTML = "Next question";
        timerAverage += parseInt(timeLeft.innerText);
        questionCount++;
    // if the correct answer is shown, we click to "refresh" the question -> adds new question and answers from DB; we take off all additional classes from answer options; change again the button text    
    } else if (btnQuiz.innerHTML === "Next question") {
        load(answerOptions, statsTrackers[questionCount]);
        questionsLeft.innerHTML = questionCount + 1;
        cleanTracker(statsTrackers[questionCount]);
        btnQuiz.innerHTML = "See answer";
    }

    // if there is no questions left, the button text transforms into "see results"
    if (questionCount === nOfQuestions) {
        btnQuiz.innerHTML = "See results";
    } 

    // once there is no questions left and the "see results" button is clicked, ...
    if ((questionCount === nOfQuestions && btnQuiz.innerHTML === "See results") || (answerOptions[0].classList.contains('wrong-option') && answerOptions[1].classList.contains('wrong-option') && btnQuiz.innerHTML === "See results")) {
        btnQuiz.addEventListener('click', () => {
            // ... we hide the game screen and show the endgame container
            quizMain.classList.add('dnone');
            endGameScreen.classList.remove('dnone');

            // insert the image from the `quiz` DB as bg image for the quiz played
            fetch('/quizz/' + quizId)
            .then((res) => res.json())
            .then((res) => {
                quiz = res;
                console.table(quiz); 
                console.log(quiz[0].Quiz_Photo);
                bg.style.background = 'center/cover no-repeat url("' + quiz[0].Quiz_Photo + '")';
            })

            // insertion of instant data into HTML (end game screen)
            yourScore.innerHTML = correctAnswers;
            questYouHad.innerHTML = nOfQuestions;
            let percent = correctAnswers * 100 / nOfQuestions;
            yourPercent.innerHTML = percent.toFixed(0) + '%';
            endGameAvrTime.innerHTML = (20 - (timerAverage / nOfQuestions)).toFixed(2);

            // modification of starting phrase on endgame screen according to the percentage of correct answers
            if (percent < 35) {
                endGamePhrase.innerHTML = "Ooooups, your score is";
            } else if (percent > 80) {
                endGamePhrase.innerHTML = "Awesome! Your score is";
            }

            // refreshes page on "replay btn"
            replayBtn.addEventListener('click', () => {
                location.reload();
            })
        })
    }
})       
})
})

