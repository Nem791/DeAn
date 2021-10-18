import { ListAnswerItem } from "../components/answerLi.js";

let score = parseInt(localStorage.getItem("tempUserScore"));
let option = JSON.parse(localStorage.getItem('tempUserOption'));
let answer = JSON.parse(localStorage.getItem('tempSysAnswer'));

// Tao 40 cau tra loi 
let listAnswer = document.querySelectorAll('.list-answer');
listAnswer.forEach(element => {
    for (let i = 0; i < 20; i++) {
        let listAnswerItem = new ListAnswerItem();
        element.appendChild(listAnswerItem.render());
    }
})

let userAnswer = document.querySelectorAll(".user-answer");
let sysAnswer = document.querySelectorAll(".sys-answer");
let number = document.querySelectorAll(".number");
let trueElement = document.querySelectorAll(".true");

userAnswer.forEach((element, index) => {
    // Neu dap an = E => rong~ nguoc lai se in ra ket qua ng dung chon
    element.innerText = option[index] == "E" ? "" : ": " + option[index];

    // Hien dap an dung 
    sysAnswer[index].innerText = ' ' + answer[index];

    // Hien so cau 
    number[index].innerText = index + 1;

    // Danh dau dung sai 
    if (option[index] != answer[index]) {
        trueElement[
          index
        ].innerHTML = `&nbsp;<i class="fas fa-times" style="color: red;"></i>`;
    } else {
        trueElement[
          index
        ].innerHTML = `&nbsp;<i class="fas fa-check" style="color: greenyellow;"></i>`;
    }
});

let overlay = document.querySelectorAll('.overlay');
overlay[0].children[1].innerText = `Correct Answers`;
overlay[0].children[2].innerText = `${score}/40`;

overlay[1].children[1].innerText = `Score`;
overlay[1].children[2].innerText = `${score * (10/40)}`;

let time = localStorage.getItem("tempUserTime");
overlay[2].children[1].innerText = `Time Spent`;
overlay[2].children[2].innerText = `${JSON.parse(time)}`;













