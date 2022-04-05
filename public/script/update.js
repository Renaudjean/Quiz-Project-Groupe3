let btnEdit = document.querySelector(".btn-secondary.edit");
console.log(btnEdit);

let inputNameOfQuiz = document.getElementById("name-quiz");
console.log(inputNameOfQuiz);

let inputDescripOfQuiz = document.getElementById("description-quiz");
console.log(inputDescripOfQuiz);

let inputMainPhotoQuiz = document.getElementById("img-quiz");
console.log(inputMainPhotoQuiz);

inputNameOfQuiz.addEventListener("click", () =>{
    fetch('update',{
        method : 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "nameOfQuiz" : inputNameOfQuiz.value,
            "description" : inputDescripOfQuiz.value,
            "mainPhotoQuiz" : inputMainPhotoQuiz.value
        })
    })
    .then((res) => res.json())
    .then((res) => {
        
    })
})
// btn.addEventListener("click", (e) => {
//     e.preventDefault()
// fetch('/login/check',{
//     method : 'POST',
//     headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         "username" : inputUser.value,
//         "password" : inputPass.value,
//     })
// })
//     .then((res) => res.json())
//     .then((res) => {
//         if(!res){
//             inputUser.style.backgroundColor = "#A95649";
//             inputPass.style.backgroundColor = "#A95649";
//         }else {
//             document.location.href = "/";
//          }
//     })
// });