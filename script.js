const secondsEl = document.getElementById("seconds")
const minsEl = document.getElementById("mins")
const hoursEl = document.getElementById("hours")
const daysEl = document.getElementById("days")

const newYears = '1 Jan 2024';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds =  (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);

    const hours = Math.floor(totalSeconds /3600) % 24;
    
    const minutes = Math.floor(totalSeconds / 60) % 60;

    const seconds = Math.floor(totalSeconds) % 60;
    
    daysEl.innerHTML = formatTime(days)
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerText = formatTime(minutes)
    secondsEl.innerText = formatTime(seconds)
}

function formatTime(time)
{
    return time < 10 ? `0${time}` : time;

}
    
//initial call
countdown();

setInterval(countdown, 1000); //calls countdown every 1000 ms = 1s