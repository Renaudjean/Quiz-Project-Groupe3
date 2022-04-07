const params = new URLSearchParams(location.search);
const idQuiz = params.get('id');

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

labelQuestion.innerHTML = "Question 1";

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
        console.log(res);
        inputNewQuestion.value = res[0].Question;
        inputNewPhoto.src = res[0].Question_Photo;
        let questID = res[0].Question_ID;
        
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
                inputOption1.value = res[0].Answer;
                inputOption2.value = res[1].Answer;
                inputOption3.value = res[2].Answer;
                inputOption4.value = res[3].Answer;
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
                    inputOption1.value = res[0].Answer;
                    inputOption2.value = res[1].Answer;
                    inputOption3.value = res[2].Answer;
                    inputOption4.value = res[3].Answer;
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
