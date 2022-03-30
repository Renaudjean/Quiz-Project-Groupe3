/* _________Login_page_______ */

// get elements from the page login
let form = document.querySelector(".form.login.create");
const btn = document.querySelector(".btn-secondary.sign.in");
const btnUp = document.querySelector(".btn-secondary.sign.up");
// sign in
let inputUser = document.getElementById("input-user");
let inputPass = document.getElementById("input-password");
// sign up
let inputFirstName = document.getElementById("input-first-name");
let inputLastName = document.getElementById("input-last-name");
let inputChooseName = document.getElementById("input-choose-name");
let inputMail = document.getElementById("input-mail");
let inputChoosePass = document.getElementById("input-choose-pass");

let accounts = [];
let newAccounts = [];
let firstName;
let lastName;
let chooseName;
let mail;
let choosePass;

// ______________ bloc sign in __________ //

fetch("/login/check")
    .then((res) => res.json())
    .then((res) => {
        accounts = res;
        for (let i = 0; i < accounts.length; i++) {
            let elements = accounts[i];
            // console.log(elements);
            let username = elements.UserName;
            // console.log(username);
            let password = elements.Password;
            // console.log(password);
            btn.addEventListener("click", (e) => {
                if (username == inputUser.value) {
                    alert("user ok");
                } else if (username != inputUser.value) {
                    alert("user pas reconnu");
                }
                if (
                    username == inputUser.value &&
                    password == inputPass.value
                ) {
                    alert("pass ok");
                    document.location.href = "/";
                } else if (password != inputPass.value) {
                    alert("pass pas reconnu");
                }
            });
        }
    });

// _____________ bloc sign up ___________ //

// verify existing user
fetch("/login/up")
    .then((res) => res.json())
    .then((res) => {
        checkMail = res;
        for (let i = 0; i < checkMail.length; i++) {
            let itemes = checkMail[i];
            let email = itemes.Email;

            btnUp.addEventListener("click", () => {
                if (email == inputMail.value) {
                    alert("user deja existant");
                } else if (email != inputMail.value) {
                    alert("email invalide");
                }
            });
        }
    });

// let regExp = {
//     firstName: inputFirstName.value.match(/^[a-zA-Z\ ]{3,50}$/i),
//     lastName: inputLastName.value.match(/^[a-zA-Z\ ]{3,50}$/i),
//     chooseName: inputChooseName.value.match(/^[a-zA-Z0-9\ ]{3,50}$/i),
//     mail: inputMail.value.match(/^[a-z0-9\.-_]+\@[a-z0-9\.-_]+\.[a-z]{3,30}$/i),
//     choosePass: inputChoosePass.value.match(/^.{6,30}$/i)
// }
// console.log(regExp);

let formIsOk = false;

// let validInput = {
//     inputFirstName: 0,
//     inputLastName: 0,
//     inputChooseName: 0,
//     inputMail: 0,
//     inputChoosePass: 0
// }

let validInput = [
    { e: inputFirstName, correct: 0 },
    { e: inputLastName, correct: 0 },
    { e: inputChooseName, correct: 0 },
    { e: inputMail, correct: 0 },
    { e: inputChoosePass, correct: 0 },
];

// recovery of user data

btnUp.addEventListener("click", (e) => {
    fetch("/login/create-users")
        .then((res) => res.json())
        .then((res) => {
            newAccounts = res;
            if (
                (firstName = inputFirstName.value.match(/^[a-zA-Z\ ]{3,50}$/i))
            ) {
                console.log(firstName);
                inputFirstName.style.backgroundColor = "#156E74";
                validInput[0].correct = 1;
            } else {
                inputFirstName.style.backgroundColor = "#A95649";
                validInput[0].correct = 0;
            }
            if ((lastName = inputLastName.value.match(/^[a-zA-Z\ ]{3,50}$/i))) {
                inputLastName.style.backgroundColor = "#156E74";
                validInput[1].correct = 1;
            } else {
                inputLastName.style.backgroundColor = "#A95649";
                validInput[1].correct = 0;
            }
            if (
                (chooseName = inputChooseName.value.match(
                    /^[a-zA-Z0-9\ ]{3,50}$/i
                ))
            ) {
                inputChooseName.style.backgroundColor = "#156E74";
                validInput[2].correct = 1;
            } else {
                inputChooseName.style.backgroundColor = "#A95649";
                validInput[2].correct = 0;
            }
            if (
                (mail = inputMail.value.match(
                    /^[a-z0-9\.-_]+\@[a-z0-9\.-_]+\.[a-z]{2,30}$/i
                ))
            ) {
                inputMail.style.backgroundColor = "#156E74";
                validInput[3].correct = 1;
            } else {
                inputMail.style.backgroundColor = "#A95649";
                validInput[3].correct = 0;
            }
            if ((choosePass = inputChoosePass.value.match(/^.{6,30}$/i))) {
                inputChoosePass.style.backgroundColor = "#156E74";
                validInput[4].correct = 1;
            } else {
                inputChoosePass.style.backgroundColor = "#A95649";
                validInput[4].correct = 0;
            }
            // verifie si tout les inputs son valide et redirige a la page index
            if (
                validInput[0].correct == 1 &&
                validInput[1].correct == 1 &&
                validInput[2].correct == 1 &&
                validInput[3].correct == 1 &&
                validInput[4].correct == 1
            ) {
                document.location.href = "/";
            } else {
                // reset les inputs non valide apres 3 sec
                window.setTimeout(function () {
                    validInput.forEach((input) => {
                        if (input.correct === 0) {
                            input.e.value = "";
                        }
                    });
                }, 3000);
            }
        });
});
