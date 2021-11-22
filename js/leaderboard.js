// Lay search params tu` url 
var url_string = location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
let test = url.searchParams.get("test");
let type = url.searchParams.get("type");
let email = localStorage.getItem("temp-user-info");
email = JSON.parse(email).email;

let tBody = document.querySelector('.tbody');
console.log(tBody);

for (let i = 0; i < 10; i++) {
    tBody.innerHTML += `<tr>
                            <td> ${i + 1}</td>
                            <td></td>
                            <td> <img src="/themes/iot/images/flags/IN.svg" alt="X"></td>
                            <td></td>
                            <td></td>
                        </tr>`
}

let scoreInfoArray = [];

db.collection(id)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let tempInfo = doc.data().scoreInfo;
            tempInfo.forEach(element => {
                // Neu cung` loai ki nang va cung bai` test => Them vao array
                if (element.testType == type && element.practiceTest == parseInt(test)) {
                    element.email = doc.id;
                    scoreInfoArray.push(element);
                }
            })
        });
    })
    .then(() => {
        // Sap xep theo diem so xong sap xep theo thoi gian 
        scoreInfoArray.sort((a, b) => parseFloat(b.testScore) - parseFloat(a.testScore) || a.time.localeCompare(b.time));
        console.log(scoreInfoArray);
        let tBody = document.querySelector('.tbody');
        console.log(tBody);
        // Render ra leaderboard 
        scoreInfoArray.forEach((element, index) => {
            let row = tBody.childNodes[index + 1];
            console.log(row.childNodes[6])
            row.childNodes[3].innerText = element.displayName;
            row.childNodes[5].firstElementChild.src = element.photoURL;
            row.childNodes[7].innerText = element.testScore;
            row.childNodes[9].innerText = element.time;
        })
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });





















