/* _________Login_page_______ */

// get elements from the page login
const btn = document.querySelector('.btn-secondary.sign');
let inputUser = document.getElementById('input-user');
let inputPass = document.getElementById('input-password');




let accounts = [];

// ______________ bloc sign in __________ //

fetch('/login/check')
.then((res) => res.json())
.then((res) => {
    accounts = res
    for (let i = 0; i < accounts.length; i++) {
        let elements = accounts[i];
        // console.log(elements);
        let username = elements.UserName;
        // console.log(username);
        let password = elements.Password;
        // console.log(password);
        btn.addEventListener('click', (e) => {
            if (username == inputUser.value) {
                alert('user ok');
            }else if (username != inputUser.value) {
                alert('user pas reconnu')
            }
            if (username == inputUser.value && password == inputPass.value) {
                alert('pass ok')
                document.location.href="/";
            }else if (password != inputPass.value) {
                alert('pass pas reconnu')
            }
        })
    }
})

// _____________ bloc sign up ___________ //






