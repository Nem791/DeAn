import { RadioBtn } from "../components/radioOptions.js";
import { ReadingPassage } from "../components/readingPassage.js";
import { ReadingQuestions } from "../components/readingQuestions.js";
import { QuestionRadio } from "../components/readingQuestionsForm.js";
import { calculateScore } from "./calculateScore.js";
import { changePassage } from "./changePassage.js";
import { countdownTimer } from "./timer.js";

function renderTest() {
  fetch("http://localhost:3000/ielts")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      for (let i = 0; i < 3; i++) {
        // render passage
        let splitRight = document.querySelector(".split-right");
        let readingSection = new ReadingPassage();
        splitRight.appendChild(readingSection.render());

        // data cua section hien tai
        let currentData = data.may_2021[0][i];
        console.log(currentData.questions.length);

        // render hinh anh passage
        let sectionImage =
          readingSection.render().querySelector(".section-image").firstElementChild;
        sectionImage.src = currentData.passageImg;

        // Render Reading passage
        let passageContent = currentData.passageContent;
        passageContent.forEach((element) => {
          let passageContentContainer =
            document.querySelectorAll(".passage-content");
          if (element.length == 1) {
            passageContentContainer[
              i
            ].innerHTML += `<p class="text-align-justify"><strong>${element}</strong></p>`;
          } else {
            passageContentContainer[
              i
            ].innerHTML += `<p class="text-align-justify">${element}</p>`;
          }
        });

        // render question
        let splitLeft = document.querySelector(".split-left");
        let readingQuestion = new ReadingQuestions();
        splitLeft.appendChild(readingQuestion.render());

        //   Hien thong tin section
        let slCaption = readingQuestion.render().querySelector(".sl-caption");
        let firstQuestionNumber = currentData.questions[0].quizNumber;
        let lastQuestionNumber = currentData.questions[0].quizNumber + currentData.questions.length - 1;
        slCaption.firstElementChild.innerHTML = `SECTION ${i + 1}: QUESTIONS ${firstQuestionNumber}-${lastQuestionNumber}`;

        let passageNumberSpan = readingSection.render().querySelectorAll('.passage-number');
        let passageQuestionSpan = readingSection.render().querySelector('.passage-questions');
        passageQuestionSpan.innerText = `${firstQuestionNumber}-${lastQuestionNumber}`;
        passageNumberSpan.forEach(element => {
            element.innerText = i + 1;
        })

      

        let questionContainer = document.querySelectorAll(".question");

        // Loop so luong cau hoi
        currentData.questions.forEach((element, index) => {
          // Render so luong cau hoi cua passage
          let question = new QuestionRadio();
          questionContainer[i].appendChild(question.render());

          // Render cau hoi so bao nhieu
          question.render().querySelector(".number").innerText =
            element.quizNumber;

          // Hien text cau hoi
          //   questionTitle la element <p> render cau hoi
          let questionTitle = question
            .render()
            .querySelector(".question-title").firstElementChild;
          questionTitle.innerText = element.quiz;

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
        });
        if (i != 0) {
          //   Luon hien passage 1 dau` tien
          readingSection.render().hidden = true;
          readingQuestion.render().hidden = true;
        } 
      }


    })
    .then(() => {
      changePassage();
      calculateScore();
      countdownTimer();
    })
    .catch((error) => {
      console.log(error);
    });
}

renderTest();
console.log(document.querySelector(".next"));