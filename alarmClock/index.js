console.log("Alarm clock module loaded");
const alarmTime = document.getElementById("alarmTime");
const setAlarmBtn = document.getElementById("setAlarmBtn");
const clearAlarmBtn = document.getElementById("clearAlarmBtn");
const status = document.getElementById("status");

// alarmTime. = new Date;
console.log(alarmTime);
setAlarmBtn.addEventListener("click",()=>{
    let time = alarmTime.value;
    console.log(time);
})