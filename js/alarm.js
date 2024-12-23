const currentTime = document.querySelector(".time");
contentAll = document.querySelector(".hour");
selectAll = document.querySelectorAll("select");
deleteBtn = document.querySelector(".saqlash");
let audio = document.querySelector("audio");

let alarmTime;

for (let i = 24; i > 0; i--) {
  let formattedI = i < 10 ? "0" + i : i;
  let option = `<option value="${formattedI}">${formattedI}</option>`;
  selectAll[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
  let formattedI = i < 10 ? "0" + i : i;
  let option = `<option value="${formattedI}">${formattedI}</option>`;
  selectAll[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "AM" : "PM";
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectAll[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
  let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";

  if (h >= 12) {
    ampm = "PM";
    if (h > 12) h -= 12;
  } else {
    ampm = "AM";
  }

  h = h === 0 ? 12 : h;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

  if (alarmTime == `${h}:${m} ${ampm}`) {
    if (audio.paused) {
      audio.play();
      audio.loop = true;
    }
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}, 1000);

function setAlarm() {
  let time = `${selectAll[0].value}:${selectAll[1].value} ${selectAll[2].value}`;

  if (
    time.includes("Hour") ||
    time.includes("Minute") ||
    time.includes("AM/PM")
  ) {
    return alert("Iltimos budunlik vaqtini kiriting.");
  }

  alarmTime = time;
  contentAll.classList.add("disable");
  deleteBtn.innerText = "Budunlikni o'chirish";
}

deleteBtn.addEventListener("click", () => {
  if (alarmTime) {
    alarmTime = null;
    contentAll.classList.remove("disable");
    deleteBtn.innerText = "Budunlikni o'rnatish";
  } else {
    setAlarm();
  }
});
