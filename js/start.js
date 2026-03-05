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