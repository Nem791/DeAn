import { RadioBtn } from "../components/radioOptions.js";
import { ReadingQuestions } from "../components/readingQuestions.js";
import { QuestionRadio } from "../components/readingQuestionsForm.js";
import { calculateScore } from "./calculateScore.js";
import { changePassage } from "./changePassage.js";
import { countdownTimer } from "./timer.js";

// Phan biet de load dung test
var url_string = location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
let test = url.searchParams.get("test") - 1;

function renderTest() {
  fetch("https://ielts-listening-api.herokuapp.com/api/ielts_listening")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // data = data.ielts_listening;
      console.log(data[id][test]);
      console.log(id);
      console.log(test);


      // data cua section hien tai
      let currentData = data[id][test];
      console.log(currentData.questions.length);

      // render info 
      document.querySelector('.volume__title').innerText = currentData.test_name;
      document.querySelector('.volume__practice-title').innerText = `${document.title} Practice Test ${test + 1}`;

      // render question
      let splitLeft = document.querySelector(".split-left");
      let readingQuestion = new ReadingQuestions();
      splitLeft.appendChild(readingQuestion.render());

      let video = document.querySelector(".embedded-video");
      video.src =
        data[id][test].link +
        "?showinfo=0&rel=0&fs=0&color=white&autohide=0&controls=0&disablekb=1";

      let questionContainer = document.querySelector(".question");

      // Loop so luong cau hoi
      currentData.questions.forEach((element, index) => {
        // Render so luong cau hoi cua passage
        let question = new QuestionRadio();
        questionContainer.appendChild(question.render());

        // Render cau hoi so bao nhieu
        question.render().querySelector(".number").innerText =
          element.quizNumber;

        // Hien text cau hoi
        //   questionTitle la element <p> render cau hoi
        let questionTitle = question
          .render()
          .querySelector(".question-title").firstElementChild;

        // Phan biet de` bai` text hoac anh 
        if (/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(element.quiz)) {
          questionTitle.innerHTML = `<img src="${element.quiz}" alt="Error">`;
        } else {
          questionTitle.innerText = element.quiz;
        }

        // Set dap an
        question.render().dataset.rightAnswer = element.rightAnswer;

        // element.answers la Array chua cac dap an
        element.answers.forEach((answer) => {
          let radio = new RadioBtn();
          // question.render() la cau hoi vua duoc render
          let radioContainer = question
            .render()
            .querySelector(".list-question");

          // Cong them so dap an
          radioContainer.appendChild(radio.render());

          // Hien text moi~ dap an
          radio.render().lastElementChild.innerText = answer;

          // Chinh sua radio btn
          radio
            .render()
            .firstElementChild.setAttribute("name", element.quizNumber);
        });

        //   Hien thong tin section
        let slCaption = readingQuestion.render().querySelector(".sl-caption");
        // let firstQuestionNumber = currentData.questions[0].quizNumber;
        // let lastQuestionNumber = currentData.questions[0].quizNumber + currentData.questions.length - 1;
        slCaption.firstElementChild.innerHTML = `EACH SECTION HAS 10 QUESTIONS`;
      });
    })
    .then(() => {
      document.querySelector(".sl-caption-bottom").hidden = true;
      calculateScore();
      countdownTimer();
    })
    .catch((error) => {
      console.log(error);
    });
}

renderTest();
console.log(document.querySelector(".next"));
