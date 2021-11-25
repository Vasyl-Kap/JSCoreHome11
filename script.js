const getS = selector => document.querySelector(selector);

// start function dare

setTimeout(() => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    if (year < 10) year = '0' + year;
    getS('.date').innerHTML = `${day}.${month}.${year}`
}, 0)

// start function time

setInterval(() => {
    let dd = new Date();
    let hh = dd.getHours();
    let mm = dd.getMinutes();
    let ss = dd.getSeconds();
    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;
    getS('.clock').innerHTML = `${hh}:${mm}:${ss}`
})

// start function stopwatch.

let time = 0;
let running =0;

function increment() {
    if (running == 1) {
      setTimeout(function () {
        time++;
        let hrs = Math.floor(time / 10 / 60 / 60);
        let min = Math.floor(time / 10 / 60);
        let sec = Math.floor((time / 10) % 60);
        let msec = time % 10;
        if (hrs < 10) {
            hrs = "0" + hrs;
          }
        if (min < 10) {
          min = "0" + min;
        }
        if (sec < 10) {
          sec = "0" + sec;
        }
        getS('.seconds').innerHTML = `${hrs}:${min}:${sec}:${msec}0`
        increment();
      }, 100);
    }
}

function startStopwatch() {
    running = 1;
    increment();
}

// pause function stopwatch.

function stopStopwatch() {
    running = 0;
}

// start function reset stopwatch.

function resetStopwatch() {
    running = 0;
    time = 0;
    getS('.seconds').innerHTML = '00:00:00:00';
    getS('.save-seconds').innerHTML = '';
}

// start function loop stopwatch.

function loopStopwatch() {
    let secLoop = getS('.seconds').innerHTML;
    let loopSec = document.querySelectorAll('.loopSec');
    if (loopSec.length>=5) {
        getS('.save-seconds').innerHTML = ``;
        getS('.save-seconds').innerHTML += `<p class="loopSec">${secLoop}</p>`;
    }
    else {
        getS('.save-seconds').innerHTML += `<p class="loopSec">${secLoop}</p>`;
    }
}

let timerInput = getS('.minTimer');
let timerShow = getS('.set-timer');
let timeMinut;
let start = 0;
let intervalID;

// start function timer

function runTimer() {
    intervalID = setInterval(function () {
        let seconds = timeMinut%60
        let minutes = timeMinut/60%60
        if (timeMinut <= 0) {
            clearInterval(timer);
            alert("Час вийшов");
        } 
        else {
            if (minutes < 10) {
                minutes = "0" + minutes;
              }
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
            timerShow.innerHTML = `${Math.trunc(minutes)}:${seconds}`;
        }
        --timeMinut;
    }, 1000)
}

function startTimer() {
    runTimer();
    getS('.btn-startT').disabled = true;
    getS('.btn-stopT').disabled = false;
}

// pause function timer

function stopTimer() {
    clearInterval(intervalID);
    getS('.btn-startT').disabled = false;
    getS('.btn-stopT').disabled = true;
}

// start function reset timer

function resetTimer() {
    clearInterval(intervalID);
    timerShow.innerHTML = '00:00';
    getS('.btn-startT').disabled = false;
}

// start function set minutes for timer

function plusTime() {
    timerInput.innerHTML = parseInt(timerInput.innerHTML)+1;
    timeMinut = parseInt(timerInput.innerHTML) * 60
    return timeMinut;
}

function minusTime() {
    timerInput.innerHTML = parseInt(timerInput.innerHTML)-1;
    timeMinut = parseInt(timerInput.innerHTML) * 60
    return timeMinut;
}