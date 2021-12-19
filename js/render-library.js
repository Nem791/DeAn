import { TestItem } from "../components/testItem.js";

let tabContent = document.querySelector('.tab-content');

// Lay search params tu` url 
var url_string = location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");

// Lay thong tin user 
let tempUserInfo = localStorage.getItem("temp-user-info");
let email = JSON.parse(tempUserInfo).email;

fetch("https://ielts-reading.herokuapp.com/api/ielts_reading")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // data = data.ielts_reading;

        console.log(data)

        // Render cac test ra man` hinh` 
        function renderLibrary(arrayKeys) {
            let testArray = Object.keys(arrayKeys);
            testArray.forEach((element) => {
                console.log(element)
                let item = new TestItem();
                tabContent.appendChild(item.render());

                item.render().querySelectorAll('.volume-name').forEach((liTag, index) => {
                    // console.log(liTag.innerText.toLowerCase());
                    arrayKeys[element].forEach(type => {
                        if (type == liTag.innerText.toLowerCase()) {
                            liTag.innerHTML += `  <i class="fas fa-check"></i>`;
                        }
                    })
                });

                // Render hinh anh 
                let imageItem = item.render().querySelector('.book-page').firstElementChild;
                imageItem.src = data[element][0][0].image;

                // Render ten test 
                let titleItem = item.render().querySelector('.test-title').firstElementChild;
                titleItem.innerText = data[element][0][0].test_name;

                // Chuyen huong den trang test 
                item.render().style.cursor = 'pointer';
                item.render().addEventListener('click', () => {
                    location.href = `./info-test.html?id=${element}`;
                })

                item.render().querySelectorAll('.stop-event').forEach(aTag => {
                    aTag.href = `./info-test.html?id=${element}`;
                })
            })
        }

        function renderUserTest() {
            var docRef = db.collection("userQuizInfo").doc(email);

            docRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data().test);
                    let test = doc.data().test;
                    console.log(test)

                    // Object.keys(test) la Array chua cac key cua cac test user da lam 
                    renderLibrary(test);
                } else {
                    // doc.data() will be undefined in this case
                    tabContent.innerHTML = 'No such document!';
                }
            }).catch((error) => {
                tabContent.innerHTML = "Bạn chưa làm test nào";
            });
        }

        renderLibrary(data);

        // Chuyen giua all test va user test 
        let typeBtn = document.querySelectorAll('.all-test-li');
        typeBtn[0].classList.add('active');
        typeBtn.forEach((element, index) => {
            element.addEventListener('click', (event) => {
                event.preventDefault();

                // Gach chan 
                let current = document.querySelector(".active");
                current.classList.remove('active');
                element.classList.add('active');

                switch (index) {
                    case 0:
                        tabContent.innerHTML = '';
                        renderLibrary(data);
                        break;
                    case 1:
                        tabContent.innerHTML = '';
                        renderUserTest();
                        break;

                    default:
                        break;
                }

            })
        })

        if (id == 'user') {
            typeBtn[1].click();
        }
    })
    .then(() => {

    })
    .catch((error) => {
        console.log(error);
    });












