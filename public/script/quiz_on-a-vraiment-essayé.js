/* __________QUIZ_page__________ */

// get elements from the page quiz
const questionsLeft = document.getElementById('stats__questions-left'),
      questionsExist = document.getElementById('stats__questions-exist'),
      statsCounter = document.getElementById('stats__counter'),
    //   statsTrackers = document.querySelectorAll('.stats__tracker'),
      timeLeft = document.getElementById('stats__time-left'),
      questionText = document.getElementById('question__text'),
      answerOptions = document.querySelectorAll('.question__option'),
      option1 = document.getElementById('option1'),
      option2 = document.getElementById('option2'),
      option3 = document.getElementById('option3'),
      option4 = document.getElementById('option4'),
      btnQuiz = document.getElementById('question-btn');
      

// _____questions counter _____________________________
let questionCount = 1;
// questionsExist.innerHTML = /* nb of questions from the DB */;

// _____creation of DIVs of tracker _____________________________
let questions = [];
let nOfQuestions = 0;

let statsTrackers = [];
function trackerAppend (a) {
    for(let i=0; i < a; i++) {
        const tracker = document.createElement("div");
        tracker.classList.add("stats__tracker");
        
        statsCounter.appendChild(tracker);
        // statsTrackers.push(tracker);
    };    
    console.log(PromiseA.then(statsTrackers));
};

const createTrackers = () => {
    const PromiseA =  new Promise((resolve, reject) => {
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
            console.log(nOfQuestions); 
            trackerAppend(nOfQuestions);
            // statsTrackers = document.querySelectorAll('.stats__tracker');
            resolve(statsTrackers);
        });
    })
};
createTrackers().then(statsTrackers => {
    console.log(statsTrackers);

    if (selectedAnswer.classList.contains('active-option')) {
        if(selectedAnswer.dataset.id === '4'/* = correct answer from db */) {
            // goGreen(selectedAnswer);
            trackerGreen(statsTrackers[0/* number of question */]);
        } else {
            // goRed(selectedAnswer);
            // goGreen(answerOptions[4-1]/* = correct answer from DB - 1 */);
            trackerRed(statsTrackers[0/* number of question */]);
        }
        // clearInterval(timerFunction); // interval stops when question answered
        // blockOptions(answerOptions);
        // btnQuiz.innerHTML = "Next question";
        /* timer stop */
    }
  });
createTrackers();
console.log(statsTrackers);

// 
// const aaa = document.getElementById('1');
// console.log(aaa);
// _____answer tracker : functions to change style _____________________________
const trackerActive = (t) => {
    t.classList.add('active');
}

const trackerGreen = t => {
    t.classList.remove('active');
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
        
        // selectedOptionNum = parseInt(o.target.dataset.id) + 1; // shows the number of option chosen
        // console.log(selectedOptionNum);
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

const load = () => {

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
        // alert('oops');
        clearInterval(timerFunction);
    }
    }, 1000);
    //_____________________________

    cleanTracker(statsTrackers[0/* number of question */]);
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
        console.log(nOfQuestions); 
        
        questionText.innerHTML = questions[0].Question;
        console.table(questions);
        let answer = [];
        let questionId = questions[0].Question_ID;
        console.log(questionId);
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
    }
    
    )
   
}


// _____main function for the button _____________________________
load();
console.log(nOfQuestions);  
btnQuiz.addEventListener('click', () => {
    if (selectedAnswer.classList.contains('active-option')) {
        if(selectedAnswer.dataset.id === '4'/* = correct answer from db */) {
            goGreen(selectedAnswer);
            // trackerGreen(statsTrackers[0/* number of question */]);
        } else {
            goRed(selectedAnswer);
            goGreen(answerOptions[4-1]/* = correct answer from DB - 1 */);
            // trackerRed(statsTrackers[0/* number of question */]);
        }
        clearInterval(timerFunction); // interval stops when question answered
        blockOptions(answerOptions);
        btnQuiz.innerHTML = "Next question";
        /* timer stop */
    } else if (btnQuiz.innerHTML === "Next question") {
        load();
        btnQuiz.innerHTML = "See answer";
        

    //     /* answerTrackerStyleChange(), 
    //     load(), 
    //     btnQuiz.innerHTML = "See answer"; 
    //     trackerActive(tracker); 
    //     timer start; 
    //     questionCount++;
    //     questionsLeft.innerHTML = questionCount */
    } //else if (/* answer tracker === answer tracker.length && answer tracker === (correct || wrong) */) {
    //     /* btnQuiz.innerHTML = "See results"; */
    // } else {
    //     /* btn prevent default */
    // }





    


    // algorythme de base
    // if (/* exists class active option */) {
    //     /* apply classes correct&|wrong-option; 
    //     btnQuiz.innerHTML = "Next question"; 
    //     timer stop */
    // } else if (/* exists class correct option */) {
    //     /* answerTrackerStyleChange(), 
    //     load(), 
    //     btnQuiz.innerHTML = "See answer"; 
    //     trackerActive(tracker); 
    //     timer start; 
    //     questionCount++;
    //     questionsLeft.innerHTML = questionCount */
    // } else if (/* answer tracker === answer tracker.length && answer tracker === (correct || wrong) */) {
    //     /* btnQuiz.innerHTML = "See results"; */
    // } else {
    //     /* btn prevent default */
    // }
})




















