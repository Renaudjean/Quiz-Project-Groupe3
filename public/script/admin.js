let deleteThis = document.querySelectorAll('.btn-secondary.delete');

let quizOption; 
console.log(deleteThis);
deleteThis.forEach(option => {
    option.addEventListener('click', (o) => {
        quizOption = o.target;
        let quizId= quizOption.dataset.id
         
        fetch('/deletethis/'+ quizId).then(res => {
            fetch('/admin');
        });
        
    })
});

