function changePassage() {
  let temp = 0;
  let previousBtn = document.querySelectorAll(".previous");
  previousBtn[0].hidden = true;
  let nextBtn = document.querySelectorAll(".next");

  let tabSectionReading = document.querySelectorAll(".tab-section-reading");
  let tabSectionQuestionReading = document.querySelectorAll(
    ".tab-section-question-reading"
  );

  let displayNone = () => {
    tabSectionReading.forEach((element, index) => {
      element.hidden = true;
      tabSectionQuestionReading[index].hidden = true;
    });
  };

  // Chuyen qua passage tiep theo
  nextBtn.forEach((element) => {
    element.addEventListener("click", () => {
      console.log("work Next");
      displayNone();
      temp++;
      console.log(temp);
      tabSectionReading[temp].hidden = false;
      tabSectionQuestionReading[temp].hidden = false;
      if (temp == 2) {
        nextBtn[temp].hidden = true;
      } else {
        nextBtn[temp].hidden = false;
      }
    });
  });

  // Quay lai passage cu~
  previousBtn.forEach((element) => {
    element.addEventListener("click", () => {
      console.log("work Pre");
      displayNone();
      temp--;
      console.log(temp);
      tabSectionReading[temp].hidden = false;
      tabSectionQuestionReading[temp].hidden = false;
      if (temp == 0) {
        previousBtn[temp].hidden = true;
      } else {
        previousBtn[temp].hidden = false;
      }
    });
  });
}
export { changePassage };
