let currentTimeContainer = document.getElementById("current-time-container");
let notificaitonBar = document.getElementsByClassName("error-notification")[0];
let pauseBtn = document.getElementById("pause-btn");
let alarmAudioContainer = document.getElementById("alarm-audio-container");
let intervalId;
let updateCurrentTime = () => {
  let date = new Date();
  let currentHour = date.getHours();
  let currentMin = date.getMinutes();
  let currentSeconds = date.getSeconds();
  let amPm = "";
  if (currentHour < 12) {
    amPm = "AM";
  } else {
    amPm = "PM";
  }
  currentTimeContainer.textContent = `${
    currentHour % 12
  } : ${currentMin}: ${currentSeconds} ${amPm}`;
};

setInterval(updateCurrentTime, 1000);

let setAlarm = () => {
  let alarmHours = document.getElementById("alarm-hours").value;
  if (alarmHours > 12 || alarmHours < 0) {
    showNotifictaion(0, alarmHours);
    return;
  }
  let alarmMinutes = document.getElementById("alarm-minutes").value;
  if (alarmMinutes < 0 || alarmMinutes > 60) {
    showNotifictaion(1, alarmMinutes);
    return;
  }
  let alarmMeridian = document.getElementById("alarm-meridian").value;

  showNotifictaion(3);
  intervalId = setInterval(
    alarmOn,
    1000,
    alarmHours,
    alarmMinutes,
    alarmMeridian
  );
};

let alarmOn = (alarmHours, alarmMinutes, alarmMeridian) => {
  let date = new Date();
  let currentHour = date.getHours();
  let currentMin = date.getMinutes();
  let hoursLeft = 0;
  let minutesLeft = 0;
  if (alarmMeridian === "am") {
    hoursLeft = Math.abs(currentHour - alarmHours);
  } else if (alarmMeridian === "pm") {
    hoursLeft = Math.abs(currentHour - alarmHours) % 12;
  }
  minutesLeft = Math.abs(currentMin - alarmMinutes);

  if (hoursLeft === 0 && minutesLeft === 0) {
    if (alarmAudioContainer.innerHTML === ``) {
      alarmAudioContainer.innerHTML = `
    <audio id="alarm-audio" controls autoplay loop>
    <source
         src="./Rickroll-Meme-Never-Gonna-Give-You-Up.mp3"
          type="audio/mp3"
        />
    </audio>
    `;
      pauseBtn.style.display = "inline";
    }
    setTimeout(alarmOff, 300000);
  }
};

let alarmOff = () => {
  document.getElementById("alarm-audio").pause();
  pauseBtn.style.display = "none";
  alarmAudioContainer.innerHTML = ``;
  clearInterval(intervalId);
};

let showNotifictaion = (errorCode, num) => {
  // 0 -> Alarm Hour Error
  // 1 -> Alarm Minutes Error
  // 2 -> successfully set Alarm
  notificaitonBar.style.background = "red";
  if (errorCode === 0) {
    if (num < 0) {
      notificaitonBar.textContent = "Error! Hours cannot be less than 0";
    } else {
      notificaitonBar.textContent = "Error! Hours cannot be greater than 12";
    }
  } else if (errorCode === 1) {
    if (num < 0) {
      notificaitonBar.textContent = "Error! Minutes cannot be less than 0";
    } else {
      notificaitonBar.textContent = "Error! Minutes cannot be greater than 60";
    }
  } else if (errorCode === 3) {
    notificaitonBar.style.background = "green";
    notificaitonBar.textContent = "Alarm set successfully";
  }
  notificaitonBar.style.top = "0%";
  hideNotification();
};

let hideNotification = () => {
  setTimeout(() => {
    notificaitonBar.style.top = "-100%";
  }, 3000);
};
