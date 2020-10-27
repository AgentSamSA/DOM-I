const msTensLabel = document.getElementById("msTens");
const msHundredsLabel = document.getElementById("msHundreds");
const secondOnesLabel = document.getElementById("secondOnes");
const secondTensLabel = document.getElementById("secondTens");
let totalMSTens = 0;
let timer = null;

function doIncrementor() {
    clearInterval(timer);
    timer = setInterval(timerIncrementer, 10);
}

function timerIncrementer() {
    ++totalMSTens;
    msTensLabel.innerHTML = totalMSTens % 10;
    msHundredsLabel.innerHTML = parseInt((totalMSTens / 10)) % 10;
    secondOnesLabel.innerHTML = parseInt((totalMSTens / 100)) % 10;
    secondTensLabel.innerHTML = parseInt((totalMSTens / 1000)) % 10;
    if (secondTensLabel.innerHTML == 1) {
        clearInterval(timer);
        msTensLabel.style.color = "red";
        msHundredsLabel.style.color = "red";
        secondOnesLabel.style.color = "red";
        secondTensLabel.style.color = "red";
    }
}

function resetTimer() {
    clearInterval(timer);
    totalMSTens = 0;
    msTensLabel.innerHTML = totalMSTens % 10;
    msHundredsLabel.innerHTML = parseInt((totalMSTens / 10)) % 10;
    secondOnesLabel.innerHTML = parseInt((totalMSTens / 100)) % 10;
    secondTensLabel.innerHTML = parseInt((totalMSTens / 1000)) % 10;
    msTensLabel.style.color = "black";
    msHundredsLabel.style.color = "black";
    secondOnesLabel.style.color = "black";
    secondTensLabel.style.color = "black";

}

const startStopDiv = document.createElement("div");

const start = document.createElement("button");
const startText = document.createTextNode("Start");
start.appendChild(startText);

const reset = document.createElement("button");
const resetText = document.createTextNode("Reset");
reset.appendChild(resetText);

startStopDiv.appendChild(start);
startStopDiv.appendChild(reset);
document.querySelector(".digits").appendChild(startStopDiv);

startStopDiv.style.display = "flex";
startStopDiv.style.justifyContent = "space-around";

start.addEventListener("click", doIncrementor);
if (start.clicked == true) {
    start.removeEventListener("click", doIncrementor);
}
reset.addEventListener("click", resetTimer);