let startEle=document.getElementById("start")
let stopEle=document.getElementById("stop")
let resetEle=document.getElementById("reset")

let timerEle=document.getElementById("timer")
let interval;
let timeLeft=1500;

function updateTimer()
{
    let min=Math.floor(timeLeft/60)
    let sec=timeLeft%60
    let formattedTime=`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`
    timerEle.innerHTML=formattedTime

}

function startFn()
{
    interval=setInterval(()=>
    {
        timeLeft--;
        updateTimer();
        if(timeLeft===0)
        {
            clearInterval(interval)
            alert('time\'s up!')
            timeLeft=1500
            updateTimer()
        }

    },1000)

}
function stopFn()
{
 clearInterval(interval)
}
function resetFn()
{
clearInterval(interval)
timeLeft=1500
updateTimer()
}

startEle.addEventListener("click",startFn)
stopEle.addEventListener("click",stopFn)
resetEle.addEventListener("click",resetFn)