// ________________part that creates new elements_________________

const questionSection = document.querySelector('.new__question'),
      addQuestBtn = document.getElementById('add-quest'),
      line = document.getElementById('line'),
      form = document.getElementById('new-quiz-form');

let nodeCounter = 0;

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

    // checkArr.forEach(r => {
    //     if(selectAllClones[0][nodeCounter].contains(r.checked)) {
    //         r.checked = false; 
    //     }
    // })
    
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
    answerOption,
    optionNumber,
    correctOrNot,
    questionId;




let validQuizInput = [
    { e: quizName, correct: 0 },
    { e: quizDesc, correct: 0 },
    { e: quizPhoto, correct: 0},
    { e: questionTxt, correct: 0},
    { e: questionPhoto, correct: 0},
];

//functions to add styles to the inputs well filled/not
const inputRed = (e) => {
    e.style.backgroundColor = "#A95649";
}
const inputGreen = (e) => {
    e.style.backgroundColor = "#156E74";
}

submitQuizBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // verify inputs sent to quiz table
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

    // verify inputs sent to question table
    if (questionTxt = inputQuestionTxt.value.match(/^[a-zA-Z\ ]{3,50}$/i)) {
        inputGreen(inputQuestionTxt);
        validQuizInput[3].correct = 1;
    } else {
        inputRed(inputQuestionTxt);
        validQuizInput[3].correct = 0;
    }

    if (questionPhoto = inputQuestionPhoto.value.match(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png))/i)) {
        inputGreen(inputQuestionPhoto);
        validQuizInput[4].correct = 1;
    } else {
        inputRed(inputQuestionPhoto);
        validQuizInput[4].correct = 0;
    }





    // verify if all inputs are well filled
    if (validQuizInput[0].correct == 1 && 
        validQuizInput[1].correct == 1 && 
        validQuizInput[2].correct == 1 &&
        validQuizInput[3].correct == 1 &&
        validQuizInput[4].correct == 1) {

            // insert values of quiz
            quizName = inputQuizDesc.value;
            quizDesc = inputQuizDesc.value;
            quizPhoto = "/assets/img/img-quiz/" + inputQuizPhoto.files[0].name;  // ! photos should already exist in the "img-quiz "folder

            // insert values of question
            questionTxt = inputQuestionTxt.value;
            questionPhoto = "/assets/img/img-question/" + inputQuestionPhoto.files[0].name;

            fetch('/new-quiz/', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "quizName" : quizName,
                    "quizDesc" : quizDesc,
                    "quizPhoto" : quizPhoto,
                    "questionTxt" : questionTxt,
                    "questionPhoto" : questionPhoto
                }),
            })
            .then((res) => {
                console.log(res);
            })
            document.location.href = "/admin/";


    }
})

