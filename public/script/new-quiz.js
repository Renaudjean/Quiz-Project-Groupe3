const questionSection = document.querySelector('.new__question'),
      addQuestBtn = document.getElementById('add-quest'),
      line = document.getElementById('line'),
      form = document.getElementById('new-quiz-form');

let nodeCounter = 0;

addQuestBtn.addEventListener('click', () => {
    // click on btn -> clones the whole new question section and the dividing line
    const clone = questionSection.cloneNode(true);
    const cloneLine = line.cloneNode(true);
    // inserts line and section inside the form
    form.appendChild(cloneLine);
    form.appendChild(clone);
    // counting the index of question section created
    nodeCounter++;
    
    // get all nodelists of used elements: all question sections, all question numerotations, all inputs & textareas (last two are merged into a single array)
    let selectAllClones = document.querySelectorAll('.new__question'),
        selectAllQ = document.querySelectorAll('.count-question'),
        selectAllInputs = document.querySelectorAll('input'),
        selectAllTxtAreas = document.querySelectorAll('textarea'),
        radios = document.querySelectorAll('input[type="checkbox"]'),
        selected = [];
        console.log(radios);
    for (let i = 0; i < selectAllInputs.length; i++) {
        selected.push(selectAllInputs[i]);
    }
    for (let i = 0; i < selectAllTxtAreas.length; i++) {
        selected.push(selectAllTxtAreas[i]);
    }

    // for each input and textarea, if they are children of a newly created section, we empty the value
    selected.forEach(e => {
        if(selectAllClones[nodeCounter].contains(e)) {
            e.value = '';
        }
    });

    // let radiosArr = Array.prototype.slice.call(radios);
    // console.log(radiosArr);

    // for (let i = radiosArr.length; i > radiosArr.length - 4; i--) {
    //     radios[i].checked = false; 
    // }

    // console.log(radios.length);

    // radiosArr.forEach(r => {
    //     if(selectAllClones[nodeCounter].contains(r.checked)) {
    //         r.checked = false; 
    //     }
    // })
    
    // modify the inner text of the newly inserted question numerotation
    selectAllQ[nodeCounter].innerHTML = 'Question ' + (nodeCounter + 1);
})
