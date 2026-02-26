function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#topbar-time");
    timeText.textContent = currentTime;
};

updateTime();
setInterval(updateTime, 1000)