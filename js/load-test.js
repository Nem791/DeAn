import { TestCard } from "../components/test-card.js";

fetch("http://localhost:3000/ielts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let rowFix = document.querySelector(".row-fix");
    Object.keys(data).forEach(element => {
      let keys = new TestCard();
      rowFix.appendChild(keys.render());
      
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
