const params = new URLSearchParams(location.search);
const idQuiz = params.get('id');

let inputNameOfQuiz = document.getElementById("name-quiz");
let inputDescripOfQuiz = document.getElementById("description-quiz");
let inputMainPhotoQuiz = document.getElementById("test");
const inputImg = document.getElementById('img-quiz');
let inputNewQuestion = document.getElementById('new-question');
let inputNewPhoto = document.getElementById('img-update');
console.log(inputNewPhoto);

// A l'ouverture de la fenetre va chercher les donner de la db et les inserts dans les inputs 
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
        console.log(res);
        inputNameOfQuiz.value = res[0].Quiz_Name;
        inputDescripOfQuiz.value = res[0].Quiz_Description;
        inputMainPhotoQuiz.src = res[0].Quiz_Photo;
    })
})

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
        console.log(res[0]);
        inputNewQuestion.value = res[0].Question;
        inputNewPhoto.src = res[0].Question_Photo;
        let questID = res[0].Question_ID;
        console.log(questID);
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
            console.log(res[0]);
            // inputNewQuestion.value = res[0].Question;
            // inputNewPhoto.src = res[0].Question_Photo;
        })
    })
})



// window.addEventListener("load", () =>{
//     fetch('fetchAnswers',{
//         method : 'POST',
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             id: idQuiz
//         })
//     })
//     .then((res) => res.json())
//     .then((res) => {
//         console.log(res[0]);
//         // inputNewQuestion.value = res[0].Question;
//         // inputNewPhoto.src = res[0].Question_Photo;
//     })
// })


// modifie l'image en temps réel sur la div img au click de l'input file
const changePreview = img => {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
        inputMainPhotoQuiz.src = reader.result
    })
    reader.readAsDataURL(img)
}

inputImg.addEventListener('change', e => {
    changePreview(e.target.files[0])
})