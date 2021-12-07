import { calculateScore } from "./calculate-speaking-score.js";

// Phan biet de load dung test
var url_string = location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
let test = url.searchParams.get("test") - 1;


function renderTest() {
    fetch("https://ielts-2.herokuapp.com/api/ielts_speaking")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // data = data.ielts_speaking;
            let currentData = data[id][test];
            console.log(currentData);

            // render info 
            document.querySelector('.volume__title').innerText = currentData.test_name;
            document.querySelector('.volume__practice-title').innerText = `${document.title} Practice Test ${test + 1}`;

            let paragraph = document.querySelector('.paragraph');
            paragraph.innerText = currentData.sentences[0];

            let nextSentenceBtn = document.getElementById('next-sentence');
            nextSentenceBtn.hidden = true;

            let temp = 0;
            let sentenceArrayLength = currentData.sentences.length;
            let score = 0;

            let submitBtn = document.getElementById('submit-score');
            submitBtn.hidden = true;
            submitBtn.addEventListener('click', () => {
                console.log('submit');
                console.log(score);
            })

            nextSentenceBtn.addEventListener('click', () => {
                temp++;
                // Tinh diem 
                var regex = /[.,]/g;

                // Doan van de` bai` 
                var result = paragraph.innerText.replace(regex, '');
                result = result.toLowerCase();

                // Doan van ban nguoi dung noi ra 
                let final = document.getElementById('final').innerText;
                final = final.replace(regex, '').toLowerCase();


                // Cong diem 
                var similarity = stringSimilarity.compareTwoStrings(result, final);
                score += similarity;

                document.getElementById('user-match').innerText = Math.round(similarity * 100) + '%';
                document.getElementById('user-score').innerHTML = `<span id='result'>${parseFloat(score).toFixed(2)}</span> / ${sentenceArrayLength}`;

                paragraph.innerText = currentData.sentences[temp];
                document.getElementById('sentence-id').innerText = temp + 1;
                nextSentenceBtn.hidden = true;
                document.querySelector("#turn-on-mic").hidden = false;

                // Reset text 
                document.getElementById('final').innerText = '';

                if (temp >= sentenceArrayLength) {
                    paragraph.innerText = `Press submit to save your score`;
                    document.getElementById('question-number').innerText = '';
                    nextSentenceBtn.hidden = true;
                    submitBtn.hidden = false;
                    document.querySelector("#test-btn").hidden = true;
                    document.querySelector("#turn-on-mic").hidden = true;
                    localStorage.setItem("tempUserScore", JSON.stringify(score));
                }
            });
        })
        .then(() => {
            calculateScore();
        })
        .catch((error) => {
            console.log(error);
        });
}

renderTest();










































