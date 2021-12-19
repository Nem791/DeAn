// Tham chieu cac element 
let partQuestionContent = document.querySelector('.part-question-content');
partQuestionContent.hidden = true;

let micBoxIndicator = document.querySelector('.mic-box__indicator');
micBoxIndicator.hidden = true;

let micBoxTestContent = document.querySelectorAll('.mic-box__test-content');

// Record Btn 
document.querySelector('#turn-on-mic').hidden = true;
// Stop Record Btn 
document.querySelector("#test-btn").hidden = true;

function speechInitialization() {
    if ("webkitSpeechRecognition" in window) {
        // Initialize webkitSpeechRecognition
        let speechRecognition = new webkitSpeechRecognition();

        // String for the Final Transcript
        let final_transcript = "";

        // Set the properties for the Speech Recognition object
        speechRecognition.continuous = true;
        speechRecognition.interimResults = true;
        speechRecognition.lang = 'en-US';

        // Callback Function for the onStart Event
        speechRecognition.onstart = () => {
            // Show the Status Element
            document.querySelector("#recording-indicator").hidden = false;
        };
        speechRecognition.onerror = () => {
            // Hide the Status Element
            document.querySelector("#recording-indicator").hidden = false;
            document.querySelector("#recording-indicator").innerHTML = 'Error. Please refresh the page!';
        };
        speechRecognition.onend = () => {
            // Hide the Status Element
            document.querySelector("#recording-indicator").hidden = true;
            let confidenceLevel = document.querySelector('#confidence-number').innerText;

            // Neu >= 80 la` dich dung => Khong hien record again con < 80 se cho record lai
            if (parseInt(confidenceLevel) < 80 || document.querySelector("#final").innerText == "") {
                document.querySelector('#turn-on-mic').hidden = false;
                document.querySelector('#turn-on-mic').innerText = 'Record again';
                document.querySelector("#final").innerHTML = "";
            } else {
                document.querySelector('#turn-on-mic').innerText = 'Record';
                document.querySelector('#turn-on-mic').hidden = true;
                document.getElementById('next-sentence').hidden = false;
            }
        };

        speechRecognition.onresult = (event) => {
            // Create the interim transcript string locally because we don't want it to persist like final transcript
            let interim_transcript = "";

            // Loop through the results from the speech recognition object.
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                // If the result item is Final, add it to Final Transcript, Else add it to Interim transcript
                if (event.results[i].isFinal) {
                    final_transcript += event.results[i][0].transcript;
                } else {
                    interim_transcript += event.results[i][0].transcript;
                }
                document.querySelector("#confidence-number").innerHTML = Number(event.results[i][0].confidence * 100) + ' %';
            }

            // Set the Final transcript and Interim transcript.
            document.querySelector("#final").innerHTML = final_transcript;
            document.querySelector("#interim").innerHTML = interim_transcript;

        };

        // Set the onClick property of the start button
        document.querySelector("#turn-on-mic").onclick = () => {
            // Start the Speech Recognition
            speechRecognition.start();
            document.querySelector('#turn-on-mic').hidden = true;
        };
        // Set the onClick property of the stop button
        document.querySelector("#test-btn").onclick = () => {
            // Stop the Speech Recognition
            speechRecognition.stop();
            // Reset 
            final_transcript = "";
        };
    } else {
        console.log("Speech Recognition Not Available");
    }
}

// Nut start now 
let startSpeakingBtn = document.querySelector('#js-start-part');
startSpeakingBtn.addEventListener('click', () => {
    startSpeakingBtn.innerText = 'Next Question';
    micBoxTestContent[1].hidden = true;
    console.log(micBoxTestContent);
    // micBoxIndicator.hidden = false;
    partQuestionContent.hidden = false;
    // init();

    // May se doc truoc , su dung thu vien Javascript
    speechRs.speechinit('Google US English Male', function (e) {
        speechRs.speak(document.querySelector('.paragraph'), function () {
            //speaking completed.
        }, false);
    });

    speechInitialization();
    startSpeakingBtn.hidden = true;
    document.querySelector('#turn-on-mic').hidden = false;
    document.querySelector("#test-btn").hidden = false;

    // Tao timer dem xuoi 
    var sec = 0;
    function pad(val) { return val > 9 ? val : "0" + val; }

    // Timer 
    document.querySelector('.mic-box__part-name').innerHTML += `<span id="minutes"></span> : <span id="seconds"></span>`;
    let timer = setInterval(function () {
        // % 60 = het 60 reset 
        document.getElementById("seconds").innerHTML = pad(++sec % 60);
        // parseInt( string, radix) radix = 10 => lam` tron` he thap phan 
        document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
    }, 1000);
})

// Setup voice 
function init() {
    speechRs.speechinit('Google US English Male', function (e) {
        speakSomeThing();
    });
}

function speakSomeThing() {
    speechRs.speak(document.querySelector('.paragraph'), function () {
        speakText()
    }, false);
}



// Nut Record 
let turnOnMic = document.getElementById('turn-on-mic');
turnOnMic.addEventListener('click', () => {

})














