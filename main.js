const continueButton = document.getElementById("continue");
const textDiv = document.getElementById("text");
const textnDiv = document.getElementById("textn");
const conbtnDiv = document.getElementById("conbtn");

const countdownContainern = document.querySelector(".countdown-containern");


const dayDisplay = document.querySelector(".days .number");
const hourDisplay = document.querySelector(".hours .number");
const minuteDisplay = document.querySelector(".minutes .number");
const secondDisplay = document.querySelector(".seconds .number");

const countdownContainer = document.querySelector(".countdown-container");

const endDate = new Date("April 08 2025 16:00:00");
let saleEnded = false;

const updateTimer = () => {
  let currentDate = new Date();
  let difference = endDate.getTime() - currentDate.getTime();

  if (difference <= 1000) {
    saleEnded = true;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let newDay = Math.floor(difference / day);
  let newHour = Math.floor((difference % day) / hour);
  let newMiute = Math.floor((difference % hour) / minute);
  let newSecond = Math.floor((difference % minute) / second);

  dayDisplay.innerText = newDay < 10 ? "0" + newDay : newDay;
  hourDisplay.innerText = newHour < 10 ? "0" + newHour : newHour;
  minuteDisplay.innerText = newMiute < 10 ? "0" + newMiute : newMiute;
  secondDisplay.innerText = newSecond < 10 ? "0" + newSecond : newSecond;
};

setInterval(() => {
  if (!saleEnded) {
    updateTimer();
    conbtnDiv.style.display = "none";
    textDiv.style.display = "block";
    textnDiv.style.display = "none";
    countdownContainern.style.display = "none";
  } else {
    countdownContainer.style.display = "none";
    conbtnDiv.style.display = "block";
    textDiv.style.display = "none";
    textnDiv.style.display = "block";
    countdownContainern.style.display = "block";
  }
}, 1000);
