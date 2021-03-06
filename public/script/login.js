/* _________Login_page_______ */

// get elements from the page login
let form = document.querySelector(".form.login.create");
const btn = document.querySelector(".btn-secondary.sign.in");
const btnUp = document.querySelector(".btn-secondary.sign.up");
const logout = document.getElementById("logout");

// sign in
let inputUser = document.getElementById("input-user");
let inputPass = document.getElementById("input-password");

// sign up
let inputFirstName = document.getElementById("input-first-name");
let inputLastName = document.getElementById("input-last-name");
let inputChooseName = document.getElementById("input-choose-name");
let inputMail = document.getElementById("input-mail");
let inputChoosePass = document.getElementById("input-choose-pass");

// variable
let accounts = [];
let newAccounts = [];
let firstName;
let lastName;
let chooseName;
let mail;
let choosePass;
let username;
let user = true;

// ______________ bloc sign in __________ //
btn.addEventListener("click", (e) => {
    e.preventDefault()
fetch('/login/check',{
    method : 'POST',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        "username" : inputUser.value,
        "password" : inputPass.value,
    })
})
    .then((res) => res.json())
    .then((res) => {
        if(!res){
            inputUser.style.backgroundColor = "#A95649";
            inputPass.style.backgroundColor = "#A95649";
        }else {
            document.location.href = "/";
         }
    })
});


let validInput = [
    { e: inputFirstName, correct: 0 },
    { e: inputLastName, correct: 0 },
    { e: inputChooseName, correct: 0 },
    { e: inputMail, correct: 0 },
    { e: inputChoosePass, correct: 0 },
];

// au click du bouton sign up verifie les regex et modifie la couleur de l'input vert ok rouge non

btnUp.addEventListener("click", (e) => {
        e.preventDefault()
            if (
                (firstName = inputFirstName.value.match(/^[a-zA-Z\ ]{3,50}$/i))
            ) {
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
            // verifie si tout les inputs son valide 
            if (
                validInput[0].correct == 1 &&
                validInput[1].correct == 1 &&
                validInput[2].correct == 1 &&
                validInput[3].correct == 1 &&
                validInput[4].correct == 1
            ) {
                firstName = inputFirstName.value;
                lastName = inputLastName.value;
                chooseName = inputChooseName.value;
                mail = inputMail.value;
                choosePass = inputChoosePass.value;

                // envoie en base de donn??e
                fetch('/login/createUsers', {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "firstName" : firstName,
                        "lastName" : lastName,
                        "chooseName" : chooseName,
                        "mail" : mail,
                        "choosePass" : choosePass,
                    }),
                })
                    .then((res) => {
                        console.log(res);
                    })
                    
                    // creer une div "user create" a la validation du formulaire
                    const notification = document.createElement('div');
                    notification.classList.add('toast');
                    notification.innerText = "User created, please log in on the left"
                    form.appendChild(notification);

                    // reset la couleur, le formulaire et enleve la div "user create" au bout de 5 sec
                    setTimeout(function(){
                        notification.remove();
                        form.reset();
                        inputFirstName.style.backgroundColor = "#314657";
                        inputLastName.style.backgroundColor = "#314657";
                        inputChooseName.style.backgroundColor = "#314657";
                        inputMail.style.backgroundColor = "#314657";
                        inputChoosePass.style.backgroundColor = "#314657";
                    }, 5000);

                // document.location.href = "/";
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



 

