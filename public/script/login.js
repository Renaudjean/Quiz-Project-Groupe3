/* _________Login_page_______ */

// get elements from the page login
const btn = document.querySelector(".btn-secondary.sign.in");
const btnUp = document.querySelector(".btn-secondary.sign.up");
let inputUser = document.getElementById("input-user");
let inputPass = document.getElementById("input-password");
let inputFirstName = document.getElementById("input-first-name");
let inputLastName = document.getElementById("input-last-name");
let inputChooseName = document.getElementById("input-choose-name");
let inputMail = document.getElementById("input-mail");
let inputChoosePass = document.getElementById("input-choose-pass");


let accounts = [];
let newAccounts = [];

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
    
    fetch("/login/up")
    .then((res) => res.json())
    .then((res) => {
        newAccounts = res;
        for (let i = 0; i < newAccounts.length; i++) {
            let elements = newAccounts[i];
            // console.log(elements);
            let email = elements.Email;
            // console.log(email);
            btnUp.addEventListener("click", () => {
                if (email == inputMail.value) {
                    alert("user deja existant");
                } else if (email != inputMail.value) {
                    alert("ok");
                }
            });
        }
    });





    // fetch("/login/up")
    //     .then((res) => res.json())
    //     .then((res) => {
    //         newAccounts = res;
    //         for (let index = 0; index < newAccounts.length; index++) {
    //             const element = newAccounts[index];
                
    //             btnUp.addEventListener('click', (e) => {
    //                 firstName = inputFirstName.value.match(/^[a-zA-Z\ ]{2,50}$/i);
    //                 lastName = inputLastName.value.match(/^[a-zA-Z\ ]{2,50}$/i);
    //                 chooseName = inputChooseName.value.match(/^[a-zA-Z0-9\ ]{2,50}$/i);
    //                 mail = inputMail.value.match(/^[a-z0-9\.-_]+\@[a-z0-9\.-_]+\.[a-z]{2,10}$/i);
    //                 choosePass = inputChoosePass.value.match(/^.{4,30}$/i);
    //                 console.log(choosePass);
    //                 if (firstName && lastName && chooseName && mail && choosePass) {
                        
    //                 }else {
    //                     alert("manque champ")
    //                 }
    //             })
    //         }
    //     })

















