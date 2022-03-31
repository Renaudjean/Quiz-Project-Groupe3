const overlay = document.getElementById('overlay'),
      modal = document.getElementById('modal-delete');

let deleteThis = document.querySelectorAll('.btn-secondary.delete');

let quizOption; 

deleteThis.forEach(option => {
    option.addEventListener('click', (o) => {
        o.preventDefault();

        overlay.classList.remove('dnone');
        modal.classList.remove('dnone');

        quizOption = o.target;
        let quizId= quizOption.dataset.id
         ;
        fetch('/deletethis/'+ quizId).then(res => {
           
            console.log("Test")
             fetch('/admin');
        });
        
    })
});

overlay.addEventListener('click', () => {
    overlay.classList.add('dnone');
    modal.classList.add('dnone');
})