let deleteThis = document.querySelectorAll('.btn-secondary.delete');

let quizOption; 

deleteThis.forEach(option => {
    option.addEventListener('click', (o) => {
        quizOption = o.target;
        let quizId= quizOption.dataset.id
         ;
        fetch('/deletethis/'+ quizId).then(res => {
           
            console.log("Test")
             fetch('/admin');
        });
        
    })
});

