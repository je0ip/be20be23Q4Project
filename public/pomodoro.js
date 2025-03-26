const start = document.getElementById("start").addEventListener("click", startTimer);
const stop = document.getElementById("stop").addEventListener("click", stopTimer);
const reset = document.getElementById("reset").addEventListener("click", resetTimer);
const timer = document.getElementById("timer");
const pTimer = document.getElementById("pomodoro").addEventListener("click", pomodoro);
const sBreak = document.getElementById("shortBreak").addEventListener("click", shortBreak);
const lBreak = document.getElementById("longBreak").addEventListener("click", longBreak);

let timeInterval; 
let countdown = 25 * 60; //default time (in seconds) of the Pomodoro
let timeType; //helps reset button identify the time it must show after resetting

function adjustPomodoro() {
  let qMin = prompt("Hello there! How many minutes do you want your Pomodoro to have?", "25");
  let qSec = prompt("How many additional seconds would you want your Pomodoro to have?", "0");
  
  qMin = parseInt(qMin);
  qSec = parseInt(qSec);
  
  if(qMin && qSec % 1 !== 0) {
    alert("Please enter an integer for the minutes and seconds");
  } else  {
    countdown = (qMin * 60) + qSec; //timelimit in seconds
    updateTimer();
  }
}

function updateTimer() {
  let minutes = Math.floor(countdown / 60);
  let seconds = countdown % 60;
  let timeShown = `${minutes}:${seconds.toString().padStart(2,"0")}`; //padStart adds 0 until it reaches the 2nd digit of the seconds
  
  timer.innerHTML = timeShown; //gets the html id "timer" and uses it to show the time formatting from js
}

function startTimer() {
  timeInterval = setInterval(()=>{
    countdown--; // -1 to the seconds of the countdown
    updateTimer(); //updates the time for every second
    
    if(countdown === 0) {
      clearInterval(timeInterval);
      countdown; //resets the time shown
    }
  }, 1000);
 }

function stopTimer() {
  clearInterval(timeInterval);
  updateTimer(); 
}

function resetTimer() {
  clearInterval(timeInterval);
  countdown; 
  updateTimer();
}

function pomodoro() {
  clearInterval(timeInterval);
  countdown = 25 * 60;
  updateTimer();
}

function shortBreak() {
  clearInterval(timeInterval);
  countdown = 5 * 60;
  updateTimer();
} 

function longBreak() {
  clearInterval(timeInterval);
  countdown = 15 * 60;
  updateTimer();
} 

const setButton = document.getElementById("settings").addEventListener("click", adjustPomodoro); 


//collapse/display the buttons for references
function references() {
  let ref = document.getElementById("references");
  ref.classList.toggle("collapse");
  
}




