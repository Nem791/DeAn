import { confirmSubmit } from "../components/submitSwal.js";

function goToScorePage() {
    let slItem = document.querySelectorAll(".sl-item");
    let score = 0;
    let userOptionArray = [];
    let sysAnswerArray = [];

    // Tinh diem
    slItem.forEach((element) => {
        let userOption = element.dataset.result;
        console.log(userOption);
        userOptionArray.push(userOption);
        let rightAnswer = element.dataset.rightAnswer;
        sysAnswerArray.push(rightAnswer);
        if (userOption == rightAnswer) {
            score++;
        }
    });

    // Luu tam ket qua va thoi gian vao localStorage
    localStorage.setItem("tempUserOption", JSON.stringify(userOptionArray));
    localStorage.setItem("tempUserScore", JSON.stringify(score));
    localStorage.setItem("tempSysAnswer", JSON.stringify(sysAnswerArray));
    localStorage.setItem(
        "tempUserTime",
        JSON.stringify(document.querySelector("#time").innerText)
    );

    // Luu ket qua len Firebase
    var url_string = location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    let test = url.searchParams.get("test");
    let tempUserInfo = localStorage.getItem("temp-user-info");
    let email = JSON.parse(tempUserInfo).email;
    let name = JSON.parse(tempUserInfo).displayName;
    let photo = JSON.parse(tempUserInfo).photoURL;

    var docRef = db.collection(id).doc(email);

    // Update collection test nguoi dung da lam`

    var washingtonRef = db.collection("userQuizInfo").doc(email);

    // document.title.toLowerCase() la` title cua page, cung~ la` the loai test 
    washingtonRef.update({
        [`test.${id}`]: firebase.firestore.FieldValue.arrayUnion(document.title.toLowerCase())
    });

    docRef
        .get()
        .then((doc) => {
            // Neu co doc tren Firebase => Update ket qua 
            if (doc.exists) {
                console.log("Document data:", doc.data());
                docRef.update({
                    scoreInfo: firebase.firestore.FieldValue.arrayUnion({
                        option: userOptionArray,
                        testScore: score,
                        sysAnswer: sysAnswerArray,
                        time: document.querySelector("#time").innerText,
                        practiceTest: parseInt(test),
                        testType: document.title.toLowerCase(),
                        displayName: name,
                        photoURL: photo
                    }),
                })
                .then(() => {
                    console.log("Document successfully updated!");
                    location.href = `./score.html?id=${id}&type=${document.title.toLowerCase()}&test=${test}`;
                })
            } else {
                // doc.data() will be undefined in this case
                // Neu chua co doc => Tao 1 doc luu ket qua cua test 
                db.collection(id)
                    .doc(email)
                    .set({
                        scoreInfo: [
                            {
                                option: userOptionArray,
                                testScore: score,
                                sysAnswer: sysAnswerArray,
                                time: document.querySelector("#time").innerText,
                                practiceTest: parseInt(test),
                                testType: document.title.toLowerCase(),
                                displayName: name,
                                photoURL: photo
                            },
                        ],
                    })
                    .then(() => {
                        console.log("Document successfully written!");
                        location.href = `./score.html?id=${id}&type=${document.title.toLowerCase()}&test=${test}`;
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            }
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });

}

function compareResult(evt) {
    evt.preventDefault();
    confirmSubmit(
        "Submit?",
        "Are you sure you want to submit?",
        "warning",
        "Submit",
        goToScorePage
    );
}

function calculateScore() {
    let btnSubmit = document.querySelector(".submit-btn-test");
    btnSubmit.addEventListener("click", compareResult);
}
export { calculateScore, goToScorePage };
