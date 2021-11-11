import { inputText } from "../components/inputText.js";
import { loading } from "../components/loading.js";

const reportBtn = document.querySelector('.use-ajax');

// Luu ket qua len Firebase
var url_string = location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
let test = url.searchParams.get("test");
let tempUserInfo = localStorage.getItem("temp-user-info");
let email = JSON.parse(tempUserInfo).email;
let name = JSON.parse(tempUserInfo).displayName;
let photo = JSON.parse(tempUserInfo).photoURL;
let type = url.searchParams.get("type");

function afterText(submitForm) {
    loading('Thông báo', 'Đang lưu lại report của bạn');
    console.log(submitForm);

    db.collection("reportQuiz").add({
        userEmail: email,
        userTest: test,
        reportContent: submitForm,
        userName: name,
        testId: id,
        testType: type
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

reportBtn.addEventListener('click', async (evt) => {
    evt.preventDefault();
    inputText('textarea', 'Report', 'Lỗi ở câu này, lỗi đáp án....', afterText);

})

