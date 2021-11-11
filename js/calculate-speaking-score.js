function goToScorePage() {
    let result = document.getElementById("result");
    result = parseFloat(result.innerText);

    let time = document.querySelector('.mic-box__part-name').innerText;
    let userTime = time.replace(/\s/g, '');

    // Luu tam ket qua va thoi gian vao localStorage
    localStorage.setItem(
        "tempUserTime",
        JSON.stringify(userTime)
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
    let score = localStorage.getItem('tempUserScore');
    score = JSON.parse(score);

    var docRef = db.collection(id).doc(email);

    docRef
        .get()
        .then((doc) => {
            // Neu co doc tren Firebase => Update ket qua 
            if (doc.exists) {
                console.log("Document data:", doc.data());
                docRef.update({
                    scoreInfo: firebase.firestore.FieldValue.arrayUnion({
                        testScore: score,
                        time: userTime,
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
                                testScore: score,
                                time: userTime,
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

function calculateScore() {
    let btnSubmit = document.getElementById("submit-score");
    btnSubmit.addEventListener("click", goToScorePage);
}
export { calculateScore, goToScorePage };
