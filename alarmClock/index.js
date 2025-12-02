console.log("Alarm clock module loaded");
const alarmTime = document.getElementById("alarmTime");
const setAlarmBtn = document.getElementById("setAlarmBtn");
const clearAlarmBtn = document.getElementById("clearAlarmBtn");
const status = document.getElementById("status");

let date = new Date();
console.log(date.toString().split(" ").slice(0, 5).join(" "));
let setCurrTime = date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
alarmTime.value = setCurrTime;
let alarms = [];
let alarmIdx = 0;
setAlarmBtn.addEventListener("click", () => {
    console.log("Setting alarm for ", alarmTime.value);
    const alarmValue = alarmTime.value;

    if (!alarmValue) {
        alert("Please select a time for the alarm.");
        return;
    }

    const [hours, minutes] = alarmValue.split(":");
    const alarmDate = new Date();
    alarmDate.setHours(parseInt(hours), parseInt(minutes), 0);
    // console.log("Alarm date set to: ", alarmDate);
    alarms.push(alarmDate);
    // console.log("All alarms: ", alarms);
    // alarms.sort((a, b) => a - b);
    // console.log(`Alarm ${index + 1}: ${alarm.toLocaleString()}`);
    const alarm = alarms[alarmIdx++];
    if (alarm > new Date()) {
        const list = document.createElement("li");
        list.innerText = `Alarm set for ${alarm.toLocaleString()}`;
        status.appendChild(list);
        const timeToAlarm = alarm.getTime() - new Date().getTime();
        setTimeout(() => {
            alert("Alarm ringing!");
            status.innerText = "No alarm set.";
        }, timeToAlarm);
    } else {
        alert("Please select a future time for the alarm.");
    }
});
clearAlarmBtn.addEventListener("click", () => {
    console.log("Clearing all alarms");
    alarms = [];
    alarmIdx = 0;
    status.innerText = "All alarms cleared.";
}); 