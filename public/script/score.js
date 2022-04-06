let score = document.querySelectorAll("bestScores");
let time = document.querySelectorAll("avrTime");

let divQuiz=document.querySelectorAll("div.quizz");
let bestScore = document.getElementsByClassName('bestScores');
let overAlls= document.getElementsByClassName('OverAlls');
let divHeader= document.querySelector("#iduser");
let allscores= [];
//  quiz_ID.push();
// let test = quiz_ID[0].dataset.id

 for (let i = 0; i < divQuiz.length; i++) {
    let  quizId = divQuiz[i].dataset.id;
    let userId = divHeader.dataset.user;
    fetch('/score/bestscore/',{
        method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    "quizId" : quizId,
                    "userId" : userId,
                })
    })
    .then(res => res.json())
    .then (res => {
        scores = res;
        allscores.push(scores.Total_Score);
        console.log(allscores[i]);

        fetch('/score/bestscore/scorelimit',{ 
            method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            "quizId" : quizId
            })
    })
        .then(res => res.json())
        .then(res =>{
            overall = res;
            if(allscores[i] == undefined  ){
            bestScore[i].innerHTML =" Come back when you've finish it! :D" 
        }else{
            bestScore[i].innerHTML ="Your best score is " + allscores[i] + " out of " + overall.Overall; 
        }
        })
        

    })
    
} 