// Lay search params tu` url 
var url_string = location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
let email = localStorage.getItem("temp-user-info");
email = JSON.parse(email).email;

// Lay info kiem tra xem ng dung` da lam` test chua 
var docRef = db.collection(id).doc(email);

docRef
    .get()
    .then((doc) => {
        // Neu lam` test roi` => render ket qua 
        if (doc.exists) {
            console.log("Document data:", doc.data().scoreInfo);
            let scoreinfo = doc.data().scoreInfo;

            let divTableRow = document.querySelectorAll('.divTableRow');

            scoreinfo.forEach(element => {
                if (element.testType == "reading") {
                    // divTableRow[parseInt(element.practiceTest)] la` de lay hang` practice test so bao nhieu 
                    // querySelectorAll('.practice-item__btn')[1] la` nut' lam` bai cua reading 
                    let readingBtn = divTableRow[parseInt(element.practiceTest)].querySelectorAll('.practice-item__btn')[1];
                    readingBtn.innerText = 'Xem kết quả';
                    // Clone element de xoa event 
                    let cloneReadingBtn = readingBtn.cloneNode(true);
                    readingBtn.parentNode.replaceChild(cloneReadingBtn, readingBtn);
                    cloneReadingBtn.style.cursor = 'pointer';
                    cloneReadingBtn.addEventListener('click', () => {
                        location.href = `./score.html?id=${id}&type=${element.testType}&test=${parseInt(element.practiceTest)}`;
                    })
                }
                if (element.testType == "listening") {
                    // divTableRow[parseInt(element.practiceTest)] la` de lay hang` practice test so bao nhieu 
                    // querySelectorAll('.practice-item__btn')[1] la` nut' lam` bai cua listening 
                    let listeningBtn = divTableRow[parseInt(element.practiceTest)].querySelectorAll('.practice-item__btn')[0];
                    listeningBtn.innerText = 'Xem kết quả';
                    // Clone element de xoa event 
                    let cloneListeningBtn = listeningBtn.cloneNode(true);
                    listeningBtn.parentNode.replaceChild(cloneListeningBtn, listeningBtn);
                    cloneListeningBtn.style.cursor = 'pointer';
                    cloneListeningBtn.addEventListener('click', () => {
                        location.href = `./score.html?id=${id}&type=${element.testType}&test=${parseInt(element.practiceTest)}`;
                    })
                }
                if (element.testType == "speaking") {
                    // divTableRow[parseInt(element.practiceTest)] la` de lay hang` practice test so bao nhieu 
                    // querySelectorAll('.practice-item__btn')[2] la` nut' lam` bai cua speaking
                    let speakingBtn = divTableRow[parseInt(element.practiceTest)].querySelectorAll('.practice-item__btn')[2];
                    speakingBtn.innerText = 'Xem kết quả';
                    // Clone element de xoa event 
                    let cloneSpeakingBtn = speakingBtn.cloneNode(true);
                    speakingBtn.parentNode.replaceChild(cloneSpeakingBtn, speakingBtn);
                    cloneSpeakingBtn.style.cursor = 'pointer';
                    cloneSpeakingBtn.addEventListener('click', () => {
                        location.href = `./score.html?id=${id}&type=${element.testType}&test=${parseInt(element.practiceTest)}`;
                    })
                }
            });
        } else {
            // Khong co document => Vua lam` test xong 
            // Lay info tu` localStorage 
            console.log("No such document!");
        }
    })
    .catch((error) => {
        console.log("Error getting document:", error);
    });




























