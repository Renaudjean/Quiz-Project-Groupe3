// ________________part that creates new elements_________________

const questionSection = document.querySelector('.new__question'),
      addQuestBtn = document.getElementById('add-quest'),
      line = document.getElementById('line'),
      form = document.getElementById('new-quiz-form');

let nodeCounter = 0;

let allQuestionInputs = [];
let allQuestionImgInputs = [];
let allAnswerInputs = [];

addQuestBtn.addEventListener('click', () => {
    // click on btn -> clones the whole new question section and the dividing line
    const clone = questionSection.cloneNode(true);
    const cloneLine = line.cloneNode(true);
    // inserts line and section inside the form
    form.appendChild(cloneLine);
    form.appendChild(clone);
    // counting the index of question section created
    nodeCounter++;
    console.log(inputQuizPhoto);
    console.log(bool1);

    // get all nodelists of used elements: all question sections, all question numerotations, all inputs & textareas (last two are merged into a single array)
    let selectAllClones = document.querySelectorAll('.new__question'),
        selectAllQ = document.querySelectorAll('.count-question'),
        selectAllInputs = document.querySelectorAll('input'),
        selectAllTxtAreas = document.querySelectorAll('textarea'),
        checkboxes = document.querySelectorAll('input[type="checkbox"]'),
        selected = [];
    for (let i = 0; i < selectAllInputs.length; i++) {
        selected.push(selectAllInputs[i]);
    }
    for (let i = 0; i < selectAllTxtAreas.length; i++) {
        selected.push(selectAllTxtAreas[i]);
    }

    // for each input and textarea, if they are children of a newly created section, we empty the value
    selected.forEach(e => {
        if(selectAllClones[nodeCounter].contains(e)) {
            e.value = '';
        }
    });

    // modify the inner text of the newly inserted question numerotation
    selectAllQ[nodeCounter].innerHTML = 'Question ' + (nodeCounter + 1);

    // // code that clears the checkboxes -> creates an error, better not use and take away manually
    // let checkArr = Array.prototype.slice.call(checkboxes);
    // for (let i = nodeCounter; i < (nodeCounter + 4); i++) {
    //     if (checkArr[0].checked) {
    //         checkArr[i*4].checked = false;
    //         // console.log(checkArr[i*4]);
    //     } else if (checkArr[1].checked) {
    //         // console.log(checkArr[i*4+1]);
    //         checkArr[i*4+1].checked = false;
    //     } else if (checkArr[2].checked) {
    //         checkArr[i*4+2].checked = false;
    //     } else if (checkArr[3].checked) {
    //         checkArr[i*4+3].checked = false;
    //     }
    // }
    allQuestionInputs = document.querySelectorAll('.question-input');
    allQuestionImgInputs = document.querySelectorAll('.question-img-input');
    allAnswerInputs = document.querySelectorAll('.answer-option');
    console.log(allQuestionImgInputs);
})


// ________________part that sends the data into DB _________________

// elements getting the quiz, ..
const inputQuizName = document.getElementById('name-quiz'),
      inputQuizPhoto = document.getElementById('img-quiz'),
      inputQuizDesc = document.getElementById('description-quiz'),
// ..questions, ..
      inputQuestionTxt = document.getElementById('new-question'),
      inputQuestionPhoto = document.getElementById('img-question');
// ..answers 
let option1 = document.querySelectorAll('input[type=text][data-id="1"]');
let option2 = document.querySelectorAll('input[type=text][data-id="2"]');
let option3 = document.querySelectorAll('input[type=text][data-id="3"]');
let option4 = document.querySelectorAll('input[type=text][data-id="4"]');
let bool1 = document.querySelectorAll('input[type=checkbox][data-id="1"]');
let bool2 = document.querySelectorAll('input[type=checkbox][data-id="2"]');
let bool3 = document.querySelectorAll('input[type=checkbox][data-id="3"]');
let bool4 = document.querySelectorAll('input[type=checkbox][data-id="4"]');
// main submit button
const submitQuizBtn = document.getElementById('submit-quiz-btn');



//variables to use in query
let quizName,
    quizDesc,   
    quizPhoto,
    questionTxt,
    questionPhoto,
    questionQuizId,
    answerOption,
    optionNumber,
    correctOrNot,
    questionId;

let validQuizInput = [
    { e: quizName, correct: 0 },
    { e: quizDesc, correct: 0 },
    { e: quizPhoto, correct: 0 },
    { e: questionTxt, correct: 0 },
    { e: questionPhoto, correct: 0 }
];

console.log(validQuizInput);

//functions to add styles to the inputs well filled/not
const inputRed = (e) => {
    e.style.backgroundColor = "#A95649";
}
const inputGreen = (e) => {
    e.style.backgroundColor = "#156E74";
}

submitQuizBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // ________________verify inputs sent to quiz table___________________

    if (quizName = inputQuizName.value.match(/^[a-zA-Z\ ]{3,50}$/i)) {
        inputGreen(inputQuizName);
        validQuizInput[0].correct = 1;
        
    } else {
        inputRed(inputQuizName);
        validQuizInput[0].correct = 0;
    }

    if (quizDesc = inputQuizDesc.value.match(/^[a-zA-Z\ ]{3,50}$/i)) {
        inputGreen(inputQuizDesc);
        validQuizInput[1].correct = 1;
    } else {
        inputRed(inputQuizDesc);
        validQuizInput[1].correct = 0;
    }

    if (quizPhoto = inputQuizPhoto.value.match(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png))/i)) {
        inputGreen(inputQuizPhoto);
        validQuizInput[2].correct = 1;
    } else {
        inputRed(inputQuizPhoto);
        validQuizInput[2].correct = 0;
    }

    // ________________verify inputs sent to question table___________________

    // verify all question inputs
    let correctQuestionInputs = 0;
    for (let i = 0; i < allQuestionInputs.length; i++) {
        if (questionTxt = allQuestionInputs[i].value.match(/^[a-zA-Z\ ]{3,50}$/i)) {
            inputGreen(allQuestionInputs[i]);
            correctQuestionInputs++;
        } else {
            inputRed(allQuestionInputs[i]);
        }

        if (correctQuestionInputs === allQuestionInputs.length) {
            validQuizInput[3].correct = 1;
        }
    }

    // verify all question img inputs
    let correctQuestionImgInputs = 0;
    for (let i = 0; i < allQuestionImgInputs.length; i++) {
        if (questionPhoto = allQuestionImgInputs[i].value.match(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png))/i)) {
            inputGreen(allQuestionImgInputs[i]);
            correctQuestionImgInputs++;
        } else {
            inputRed(allQuestionImgInputs[i]);
        }

        if (correctQuestionImgInputs === allQuestionImgInputs.length) {
            validQuizInput[4].correct = 1;
        }
    }


    // verify if all inputs are well filled...
    if (validQuizInput[0].correct == 1 && 
        validQuizInput[1].correct == 1 && 
        validQuizInput[2].correct == 1 &&
        validQuizInput[3].correct == 1 &&
        validQuizInput[4].correct == 1) {
    // .. if ok...
            // insert values of quiz
            quizName = inputQuizName.value;
            quizDesc = inputQuizDesc.value;
            quizPhoto = "/assets/img/img-quiz/" + inputQuizPhoto.files[0].name;  // ! photos should already exist in the "img-quiz "folder


            // __________the main fetch post that sends information to the db_______________________
            fetch('/new-quiz/', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // here we send the infos concerning the table "quiz"
                    "quizName" : quizName,
                    "quizDesc" : quizDesc,
                    "quizPhoto" : quizPhoto
                }),
            })
            .then((res) => {
                return res.json();
            }) 
            .then((res) => {
                // here we send the infos concerning the table "question"; we use loop "for" to send the data as many times as needed (for as many questions as required)
                // we do this fetch inside of the main fetch to access the instantly added quiz id 
                for (let i = 0; i < allQuestionInputs.length; i++) {
                    questionTxt = allQuestionInputs[i].value;
                    questionPhoto = "/assets/img/img-question/" + allQuestionImgInputs[i].files[0].name;
    
                    fetch('/new-quiz/', {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            "questionTxt" : questionTxt,
                            "questionPhoto" : questionPhoto,
                            "questionQuizId" : res
                        }),
                    })
                }
            })
        // if data successfully sent, redirection to the admin page in 300ms
        setTimeout(() => {document.location.href = "/admin/"}, 300);
    }
})

