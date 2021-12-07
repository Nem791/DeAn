import { TestCard } from "../components/test-card.js";

fetch("https://ielts-reading.herokuapp.com/api/ielts_reading")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // data = data.ielts_reading;
    let rowFix = document.querySelector(".row-fix");
    // Them item card va thong tin cua moi~ Test 
    Object.keys(data).forEach(element => {
      let keys = new TestCard();
      // Them card item chua thong tin test 
      rowFix.appendChild(keys.render());
      // dataset de truy cap ?=id 
      keys.render().dataset.test = element;
      keys.render().addEventListener('click', () => {
        localStorage.setItem("id", JSON.stringify(element));
        // location.href = './quizPage.html';
        location.href = `./info-test.html?id=${element}`;
      })
      // render anh 
      keys.render().querySelector(".keys-img").src = data[element][0][0].image;
      // render ten test 
      keys.render().querySelector(".keys-title").innerText = data[element][0][0].test_name;
      console.log(element + ' ' + data[element][0][0].image);
    })
  })
  .then(() => {
    $(".row-fix").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
    });
  })
  .catch((error) => {
    console.log(error);
  });
