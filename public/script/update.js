const params = new URLSearchParams(location.search);
const idQuiz = params.get('id');

const form = document.getElementById('new-quiz-form')
let inputNameOfQuiz = document.getElementById("name-quiz");
let inputDescripOfQuiz = document.getElementById("description-quiz");
let inputMainPhotoQuiz = document.getElementById("test");
const inputImg = document.getElementById('img-quiz');
let inputNewQuestion = document.getElementById('new-question');
let inputNewPhoto = document.getElementById('img-update');
const inputImgQuestion = document.getElementById('img-question');
let inputOption1 = document.getElementById('1');
let inputOption2 = document.getElementById('2');
let inputOption3 = document.getElementById('3');
let inputOption4 = document.getElementById('4');
let btnNextQuestion = document.getElementById("btn-next-question");
const labelQuestion = document.querySelector('.count-question');
allCheckboxInputs = document.querySelectorAll('.checkbox');
let btnSave = document.querySelector('.btn-primary.update');
labelQuestion.innerHTML = "Question 1";
let questID;
let reponses;
let reponse;
let correct;

// A l'ouverture de la fenetre va chercher les donner de la db et les inserts dans les inputs quiz
window.addEventListener("load", () =>{
    fetch('update',{
        method : 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: idQuiz
        })
    })
    .then((res) => res.json())
    .then((res) => {
        inputNameOfQuiz.value = res[0].Quiz_Name;
        inputDescripOfQuiz.value = res[0].Quiz_Description;
        inputMainPhotoQuiz.src = res[0].Quiz_Photo;
    })
})

// A l'ouverture de la fenetre va chercher les donner de la db et les inserts dans les inputs question
window.addEventListener("load", () =>{
    fetch('fetchQuest',{
        method : 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: idQuiz
        })
    })
    .then((res) => res.json())
    .then((res) => {
        inputNewQuestion.value = res[0].Question;
        inputNewPhoto.src = res[0].Question_Photo;
        questID = res[0].Question_ID;
        
        // récupere les réponse par rapport a l'id question
        fetch('fetchAnswers',{
            method : 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": questID
            })
        })
        .then((res) => res.json())
        .then((res) => {
            reponses = res
            inputOption1.value = res[0].Answer;
            inputOption2.value = res[1].Answer;
            inputOption3.value = res[2].Answer;
            inputOption4.value = res[3].Answer;

            // check la bonne réponse et l'affiche sur la checkbox associer
            let correctOrNot;
            for (let i = 0; i < res.length; i++) {
                correctOrNot = res[i].Correct_Or_Not;
                if (correctOrNot === 1) {
                    allCheckboxInputs[i].checked = true;
                } else {
                    allCheckboxInputs[i].checked = false;
                }
            }
        })
    })
})

// au click du bouton récupere les questions suivantes et les reponses lier au questions
let i = 0;
btnNextQuestion.addEventListener("click", () =>{
    i ++;
    
    fetch('fetchQuest',{
        method : 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: idQuiz
        })
    })
    .then((res) => res.json())
    .then((res) => {
            if(i == res.length) i=0;
            labelQuestion.innerHTML = "Question " + (i+1);
            inputNewQuestion.value = res[i].Question;
            inputNewPhoto.src = res[i].Question_Photo;
            let questID = res[i].Question_ID;
    
            // récupere les réponse par rapport a l'id question
            fetch('fetchAnswers',{
                method : 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "id": questID
                })
            })
            .then((res) => res.json())
            .then((res) => {
                    reponses = res;
                    inputOption1.value = res[0].Answer;
                    inputOption2.value = res[1].Answer;
                    inputOption3.value = res[2].Answer;
                    inputOption4.value = res[3].Answer;
                    
                    // check la bonne réponse et l'affiche sur la checkbox associer
                    for (let i = 0; i < res.length; i++) {
                        correctOrNot = res[i].Correct_Or_Not;
                        allCheckboxInputs[i].dataset.id = res[i].ANS_ID
                        if (correctOrNot === 1) {
                            allCheckboxInputs[i].checked = true;
                        } else {
                            allCheckboxInputs[i].checked = false;
                        }
                    }
            })        
    })
})

// modifie l'image en temps réel sur la div img au click de l'input file quiz
const changePreview = img => {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
        inputMainPhotoQuiz.src = reader.result;
    })
    reader.readAsDataURL(img)
}
inputImg.addEventListener('change', e => {
    changePreview(e.target.files[0])
})

// modifie l'image en temps réel sur la div img au click de l'input file question
const changePreviews = img => {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
        inputNewPhoto.src = reader.result;
    })
    reader.readAsDataURL(img)
}
inputImgQuestion.addEventListener('change', e => {
    changePreviews(e.target.files[0])
})

// update des données au click du boutton Save
btnSave.addEventListener('click', (e) => {
    
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', idQuiz);
    formData.append('name', inputNameOfQuiz.value);
    formData.append('description', inputDescripOfQuiz.value);
    formData.append('photo', inputImg.files[0]);

    fetch('update/quiz',{
        method : 'POST',
        headers: {
            
            // Accept: "application/json",
            // "Content-Type": "multipart/form-data",
        },
        body: formData
    })
    .then((res) => console.log(res))

    const formDataQuestion = new FormData()
    formDataQuestion.append('question', inputNewQuestion.value);
    formDataQuestion.append('questionPhoto', inputImgQuestion.files[0])
    formDataQuestion.append('id', questID);
    
    const answer = Array.from(allCheckboxInputs).find((e)=> {
        return e.checked
    }).dataset.id
    formDataQuestion.append('answer', answer)
    console.log(answer);
    fetch('update/question',{
        method : 'POST',
        body: formDataQuestion
    })
    .then((res) => console.log(res))


// update input 1 
    if (inputOption1.value !== reponses[0].Answer ||  allCheckboxInputs[0].checked != reponses[0].Correct_Or_Not) {
    
        fetch('update/answer',{
            method : 'POST',
            headers: {
                
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: reponses[0].ANS_ID,
                reponse: inputOption1.value,
                correct: allCheckboxInputs[0].checked
            })
        })
        .then((res) => console.log(res))
    }

// update input 2 
    if (inputOption2.value !== reponses[1].Answer ||  allCheckboxInputs[1].checked != reponses[1].Correct_Or_Not) {
        fetch('update/answer',{
            method : 'POST',
            headers: {
                
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: reponses[1].ANS_ID,
                reponse: inputOption2.value,
                correct: allCheckboxInputs[1].checked
            })
        })
        .then((res) => console.log(res))
    }

// update input 3
    if (inputOption3.value !== reponses[2].Answer ||  allCheckboxInputs[2].checked != reponses[2].Correct_Or_Not) {
        fetch('update/answer',{
            method : 'POST',
            headers: {
                
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: reponses[2].ANS_ID,
                reponse: inputOption3.value,
                correct: allCheckboxInputs[2].checked
            })
        })
        .then((res) => console.log(res))
    }

// update input 4
    if (inputOption4.value !== reponses[3].Answer ||  allCheckboxInputs[3].checked != reponses[3].Correct_Or_Not) {
        fetch('update/answer',{
            method : 'POST',
            headers: {
                
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: reponses[3].ANS_ID,
                reponse: inputOption4.value,
                correct: allCheckboxInputs[3].checked
            })
        })
        .then((res) => console.log(res))
    }
})
