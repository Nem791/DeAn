import { DivTableRow } from "../components/divTableRow.js";

var url_string = location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");

fetch("https://ielts-reading.herokuapp.com/api/ielts_reading")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // data = data.ielts_reading;
        let practiceTable = document.querySelector(".practice-table");
        data[id].forEach((element, index) => {
            let divTableRow = new DivTableRow();
            practiceTable.appendChild(divTableRow.render());
            // readingBtn la nut Lam` bai` reading 
            // id de phan biet test 
            let id = window.location.search.split("=").pop();

            let listeningBtn = divTableRow.render().childNodes[1].querySelector('.practice-item__btn-action');
            listeningBtn.addEventListener("click", () => {
                location.href = `./listening.html?id=${id}&test=${index + 1}`;
            });

            let readingBtn = divTableRow.render().childNodes[2].querySelector('.practice-item__btn-action');
            readingBtn.addEventListener('click', () => {
                location.href = `./reading.html?id=${id}&test=${index + 1}`;
            })

            let speakingBtn = divTableRow.render().childNodes[3].querySelector('.practice-item__btn-action');
            speakingBtn.addEventListener('click', () => {
                location.href = `./speaking.html?id=${id}&test=${index + 1}`;
            })
        });;
        // Render ten test 
        let testCaption = document.querySelector(".test-caption");
        testCaption.innerText = data[id][0][0].test_name;
        localStorage.setItem("test-name", JSON.stringify(data[id][0][0].test_name));
        // Render img 
        let mainImg = document.querySelector(".main-img");
        mainImg.src = `${data[id][0][0].image}`;
        // Render so practice test 
        let firstCol = document.querySelectorAll(".first-col");
        firstCol.forEach((element, index) => {
            element.innerText = `Practice Test ${index + 1}`;
        })

    })
    .catch((error) => {
        console.log(error);
    });







































