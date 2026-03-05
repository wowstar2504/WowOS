let welcomeshow = localStorage.getItem("welcomeshow?");

if (welcomeshow === "false") {
    document.getElementById("welcome").style.display = "none";
};

function welcomenot() {
    localStorage.setItem("welcomeshow?", "false");
    document.getElementById("welcome").style.display = "none";
};

/* Notes app storage */

const notepad = document.getElementById('note-pad');

notepad.value = localStorage.getItem('wowos_note') || "";

notepad.addEventListener('input', () => {
    localStorage.setItem('wowos_note', notepad.value);
});

/* System Monitor */

setInterval(() => {
    const load = Math.floor(Math.random() * 100);
    const cpuLoad = document.getElementById('cpu-load');
    const cpuBar = document.getElementById('cpu-bar');
    if(cpuLoad && cpuBar) {
        cpuLoad.innerText = load + "%";
        cpuBar.style.width = load + "%";
        cpuBar.style.background = load > 80 ? "#ff4444" : "#00ff00";
    }
}, 2000);