import { confirmSubmit } from "../components/submitSwal.js";

function goToScorePage() {
  location.href = './score.html';
}

function compareResult(evt) {
    evt.preventDefault();
    let slItem = document.querySelectorAll('.sl-item');
    let score = 0;
    let userOptionArray = [];
    let sysAnswerArray = [];
    slItem.forEach(element => {
        let userOption = element.dataset.result;
        console.log(userOption);
        userOptionArray.push(userOption);
        let rightAnswer = element.dataset.rightAnswer;
        sysAnswerArray.push(rightAnswer);
        if (userOption == rightAnswer) {
            score++;
        }
        
    })
    localStorage.setItem("tempUserOption", JSON.stringify(userOptionArray));
    localStorage.setItem("tempUserScore", JSON.stringify(score));
    localStorage.setItem("tempSysAnswer", JSON.stringify(sysAnswerArray));
    localStorage.setItem("tempUserTime", JSON.stringify(document.querySelector('#time').innerText));
    console.log(document.querySelector('#time').innerText);
    confirmSubmit(
      "Submit?",
      "Are you sure you want to submit?",
      'warning',
      'Submit',
      goToScorePage
    );
}

function calculateScore() {
    let btnSubmit = document.querySelector(".submit-btn-test");
    btnSubmit.addEventListener('click', compareResult);
    
}
export {calculateScore};
























