// Select Elements
let countSpan = document.querySelector(".count span");
let bulletSpanContainer = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let submitBtn = document.querySelector(".submit-btn");
let bulletsElements = document.querySelector(".bullets");
let resultsContainer = document.querySelector(".results");
let countDownElement = document.querySelector(".countdown");

// set Options
let currentIndex = 0;
let rightAnswers = 0;
let countdownInterval;

function getQuestions() {
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questionsObj = JSON.parse(this.responseText);
            let questionsCount = questionsObj.length;
            // Create Bullets + Set Questions Count
            createBullets(questionsCount);
            // Add Questions Data
            addQuestionsData(questionsObj[currentIndex], questionsCount);
            // Start Countdown
            countdown(150, questionsCount);
            // Click Submit
            submitBtn.onclick = () => {
                // Get Right Answer
                let rAnswer = questionsObj[currentIndex].right_answer;
                // Increase Current Index
                currentIndex++;
                // Check Right Answer
                checkAnswer(rAnswer);
                // Remove Current Question
                quizArea.innerHTML = "";
                answersArea.innerHTML = "";
                // Add New Question
                addQuestionsData(questionsObj[currentIndex], questionsCount);
                // Handle Bullets Classes
                handleBullets();
                // Start Countdown
                clearInterval(countdownInterval);
                countdown(150, questionsCount);
                // Show Results
                currentIndex === questionsCount ? showResults(questionsCount) : null;
            };
        }
    };
    myRequest.open("GET", "Data/HTML_Questions.json", true);
    myRequest.send();
}
getQuestions();

function createBullets(num) {
    countSpan.innerHTML = num;

    // Create Spans
    for (let i = 0; i < num; i++) {
        // Create Bullet
        let bullet = document.createElement("span");
        // Check if its First Span
        if (i === 0) {
            bullet.className = "on";
        }
        // Append Bullets to Main Container
        bulletSpanContainer.appendChild(bullet);
    }
}

function addQuestionsData(obj, count) {
    if (currentIndex < count) {
        // Create H2 Question Title
        let qTitle = document.createElement("h2");
        // Create Question Text
        let qText = document.createTextNode(obj.title); // or obj['title']
        // Append Text to H2
        qTitle.appendChild(qText);
        // Append H2 To The Quiz Area
        quizArea.appendChild(qTitle);

        // Create Answers
        for (let i = 0; i < 4; i++) {
            // Create Main Answer DIV Element
            let mainDiv = document.createElement("div");
            // Add Class to Main Div
            mainDiv.className = "answer";
            // Create Radio Input
            let radoiInput = document.createElement("input");
            // Add Type + Name + Id + Data Attribute
            radoiInput.name = "question";
            radoiInput.type = "radio";
            radoiInput.id = `answer_${i}`;
            radoiInput.dataset.answer = obj[`answer_${i}`];
            // Make 1st Option Selected
            if (i === 0) {
                radoiInput.checked = true;
            }
            // Create Label
            let label = document.createElement("label");
            // Add For Attribute
            label.htmlFor = `answer_${i}`;
            // Create Label Text
            let lableText = document.createTextNode(obj[`answer_${i}`]);
            // Add Text to Label
            label.appendChild(lableText);
            // Add Input + Lable to Main Div
            mainDiv.appendChild(radoiInput);
            mainDiv.appendChild(label);
            // Append Add Elements to Answers Area
            answersArea.appendChild(mainDiv);
        }
    }
}

function checkAnswer(rightAnswer) {
    let answers = document.getElementsByName("question");
    let selectedAnswer;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            selectedAnswer = answers[i].dataset.answer;
        }
    }
    if (rightAnswer === selectedAnswer) {
        rightAnswers++;
    }
}

function handleBullets() {
    let bulletsSpans = document.querySelectorAll(".bullets .spans span");
    let arrayOfSpans = Array.from(bulletsSpans);
    arrayOfSpans.forEach((span, index) => {
        if (currentIndex === index) {
            span.className = "on";
        }
    });
}

function showResults(count) {
    let results;
    if(currentIndex === count) {
        quizArea.remove();
        answersArea.remove();
        submitBtn.remove();
        bulletsElements.remove();
        if(rightAnswers > (count / 2) && rightAnswers < count) {
            results = `<span class="good">Good</span><p> ${rightAnswers} From ${count} is Good.</p>`;
        } else if(rightAnswers === count) {
            results = `<span class="perfect">Perfect</span><p> ${rightAnswers} From ${count} is Perfect.</p>`;
        } else {
            results = `<span class="bad">Bad</span><p> ${rightAnswers} From ${count} is Bad.</p>`;
        }
    }
    resultsContainer.innerHTML = results;
    resultsContainer.style.padding = "10px";
    resultsContainer.style.backgroundColor = "white";
    resultsContainer.style.marginTop = "10px";
}

function countdown(duration, count) {
    if(currentIndex < count) {
        let minutes, seconds;
        countdownInterval = setInterval(() => {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);
            minutes = minutes < 10 ? `0${minutes}`: minutes;
            seconds = seconds < 10 ? `0${seconds}`: seconds;
            countDownElement.innerHTML = `${minutes} : ${seconds}`;
            if(--duration < 0){
                clearInterval(countdownInterval);
                submitBtn.click();
            }
        }, 1000)
    }
}
