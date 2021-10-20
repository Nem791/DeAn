import { DivTableRow } from "../components/divTableRow.js";

let id = JSON.parse(localStorage.getItem("id"));

fetch("http://localhost:3000/ielts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let practiceTable = document.querySelector(".practice-table");
    data[id].forEach(element => {
        let divTableRow = new DivTableRow();
        practiceTable.appendChild(divTableRow.render());
    });;
    // Render ten test 
    let testCaption = document.querySelector(".test-caption");
    testCaption.innerText = data[id][0][0].test_name;
    // Render img 
    let mainImg = document.querySelector(".main-img");
    mainImg.src = `${data[id][0][0].image}`;
    // Render so practice test 
    let firstCol = document.querySelectorAll(".first-col");
    firstCol.forEach((element, index) => {
        element.innerText = `Practice Test ${index + 1}`;
    }) 
    
  })
  .then(() => {
  })
  .catch((error) => {
    console.log(error);
  });







































