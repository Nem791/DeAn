import { ListAnswerItem } from "../components/answerLi.js";

// Lay search params tu` url 
var url_string = location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
let test = url.searchParams.get("test");
let type = url.searchParams.get("type");
let email = localStorage.getItem("temp-user-info");
email = JSON.parse(email).email;

// Load ten nguoi dung tren page 
let tempUserInfo = localStorage.getItem('temp-user-info');
tempUserInfo = JSON.parse(tempUserInfo);
let usUser = document.querySelector('.us-user');
usUser.firstElementChild.src = tempUserInfo.photoURL;
usUser.lastElementChild.innerText = tempUserInfo.displayName;
console.log(tempUserInfo)

// Load ten test 
document.querySelector('.test-caption').innerText = JSON.parse(localStorage.getItem("test-name"));

// Lay info kiem tra xem ng dung` da lam` test chua 
var docRef = db.collection(id).doc(email);

docRef
    .get()
    .then((doc) => {
        // Neu lam` test roi` => render ket qua 
        if (doc.exists) {
            console.log("Document data:", doc.data().scoreInfo);
            let scoreInfo = doc.data().scoreInfo;
            scoreInfo.forEach(element => {
                console.log(element);
                if (element.practiceTest == test && element.testType == type) {
                    if (type != 'speaking') {
                        showScore(element.testScore, element.time, 40);
                        showAnswers(element.option, element.sysAnswer);
                    } else {
                        showScore(element.testScore, element.time, 5);
                    }
                }
            })
        } else {
            // Khong co document => Vua lam` test xong 
            // Lay info tu` localStorage 
            console.log("No such document!");
            let tempScore = parseInt(localStorage.getItem("tempUserScore"));
            let tempOption = JSON.parse(localStorage.getItem("tempUserOption"));
            let tempAnswer = JSON.parse(localStorage.getItem("tempSysAnswer"));
            let tempTime = JSON.parse(localStorage.getItem("tempUserTime"));
            showScore(tempScore, tempTime);
            showAnswers(tempOption, tempAnswer);
            if (type != 'speaking') {
                showScore(tempScore, tempTime, 40);
                showAnswers(tempOption, tempAnswer);
            } else {
                showScore(tempScore, tempTime, 5);
            }
        }
    })
    .catch((error) => {
        console.log("Error getting document:", error);
    });

function showAnswers(option, answer) {
    console.log(option);
    console.log(option.length);
    // Tao 40 cau tra loi
    let listAnswer = document.querySelectorAll(".list-answer");
    listAnswer.forEach((element) => {
        for (let i = 0; i < Math.floor(option.length / 2); i++) {
            let listAnswerItem = new ListAnswerItem();
            element.appendChild(listAnswerItem.render());
        }
    });

    let userAnswer = document.querySelectorAll(".user-answer");
    let sysAnswer = document.querySelectorAll(".sys-answer");
    let number = document.querySelectorAll(".number");
    let trueElement = document.querySelectorAll(".true");

    userAnswer.forEach((element, index) => {
        // Neu dap an = E => rong~ nguoc lai se in ra ket qua ng dung chon
        element.innerText = option[index] == "E" ? "" : ": " + option[index];

        // Hien dap an dung
        sysAnswer[index].innerText = " " + answer[index];

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
}

// Hien diem so va thoi gian tuong ung vs 3 hinh` tron`
function showScore(score, time, length) {
    let overlay = document.querySelectorAll(".overlay");
    overlay[0].children[1].innerText = `Correct Answers`;
    overlay[0].children[2].innerText = `${parseFloat(score).toFixed(2)}/${length}`;

    overlay[1].children[1].innerText = `Score`;
    overlay[1].children[2].innerText = `${parseFloat(score * (10 / length)).toFixed(2)}`;

    overlay[2].children[1].innerText = `Time Spent`;
    overlay[2].children[2].innerText = time;
}
