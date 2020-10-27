const msTensLabel = document.getElementById("msTens");
const msHundredsLabel = document.getElementById("msHundreds");
const secondOnesLabel = document.getElementById("secondOnes");
const secondTensLabel = document.getElementById("secondTens");
let totalMSTens = 0;
let timer = setInterval(timerIncrementer, 10);

function timerIncrementer() {
    ++totalMSTens;
    msTensLabel.innerHTML = totalMSTens % 10;
    msHundredsLabel.innerHTML = parseInt((totalMSTens / 10)) % 10;
    secondOnesLabel.innerHTML = parseInt((totalMSTens / 100)) % 10;
    secondTensLabel.innerHTML = parseInt((totalMSTens / 1000)) % 10;
    if (totalMSTens == 1000) {
        clearInterval(timer);
        msTensLabel.style.color = "red";
        msHundredsLabel.style.color = "red";
        secondOnesLabel.style.color = "red";
        secondTensLabel.style.color = "red";
    }
}

const startStopDiv = document.createElement("div");

const start = document.createElement("button");
const startText = document.createTextNode("Start");
start.appendChild(startText);

const stop = document.createElement("button");
const stopText = document.createTextNode("Stop");
stop.appendChild(stopText);

startStopDiv.appendChild(start);
startStopDiv.appendChild(stop);
document.querySelector(".digits").appendChild(startStopDiv);

startStopDiv.style.display = "flex";
startStopDiv.style.justifyContent = "space-evenly";