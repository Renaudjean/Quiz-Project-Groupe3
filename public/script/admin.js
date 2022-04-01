const overlay = document.getElementById('overlay'),
      modal = document.getElementById('modal-delete'),
      confirmBtn = document.getElementById('confirm-btn'),
      mistakemBtn = document.getElementById('mistake-btn');

let deleteThis = document.querySelectorAll('.btn-secondary.delete');

let quizOption; 

deleteThis.forEach(option => {
    option.addEventListener('click', (o) => {
        // remove the default button action 
        o.preventDefault();
        // call the modal and overlay
        overlay.classList.remove('dnone');
        modal.classList.remove('dnone');

        quizOption = o.target;
     
        fetch('/deletethis/'+ quizId).then(res => {
           
            console.log("Test")
             fetch('/admin');
        });
        
        quizOption = o.target;
        

        console.log(quizOption);
        confirmBtn.addEventListener('click', (a) => {
            a.preventDefault();
             
            fetch('/deletethis/'+ quizId).then(res => {
                fetch('/admin');
            });
            quizOption = '';
            location.reload();
        })
    })
});

overlay.addEventListener('click', () => {
    // overlay.classList.add('dnone');
    // modal.classList.add('dnone');
    // quizOption = '';
    location.reload();
})

mistakemBtn.addEventListener('click', () => {
    location.reload();
})