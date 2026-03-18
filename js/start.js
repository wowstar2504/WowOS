if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}

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
if (notepad) {
    notepad.value = localStorage.getItem('wowos_note') || "";
    notepad.addEventListener('input', () => {
        localStorage.setItem('wowos_note', notepad.value);
    });
}

/* System Monitor */
let currentCPU = 15;
let currentRAM = 1.2;
window.monitorInterval = null;

window.startMonitor = function() {
    // Look for the interval on the window object
    if (window.monitorInterval) return; 
    
    console.log("OS: System Monitor Started");
    window.monitorInterval = setInterval(() => {
        currentCPU = Math.min(Math.max(currentCPU + (Math.random() * 10 - 5), 2), 98);
        currentRAM = Math.min(Math.max(currentRAM + (Math.random() * 0.5 - 0.25), 1.1), 7.8);

        const cpuLoad = document.getElementById('cpu-load');
        const ramText = document.getElementById('ram-usage');

        if(cpuLoad) cpuLoad.innerText = Math.floor(currentCPU) + '%';
        if(ramText) ramText.innerText = `RAM Usage: ${currentRAM.toFixed(2)}GB / 8GB`;
    }, 1000);
};

window.stopMonitor = function() {
    if (window.monitorInterval) {
        console.log("OS: System Monitor Stopped");
        clearInterval(window.monitorInterval);
        window.monitorInterval = null;
    }
};

/* Terminal */
const terminalInput = document.getElementById('terminal-input');
const terminalBody = document.getElementById('terminal-body');

if(terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') {
            const cmd = terminalInput.value.toLowerCase().trim();
            const log = document.createElement('p');
            log.style.margin = '2px 0';
            log.innerText = "$> " + cmd;
            terminalInput.parentElement.before(log);

            if(cmd === 'help') {
                const res = document.createElement('p');
                res.style.color = '#888';
                res.innerText = 'Available commands: help, clear, whoami, exit';
                terminalInput.parentElement.before(res);
            } else if(cmd === 'clear') {
                terminalBody.querySelectorAll('p').forEach(p => p.remove());
            } else if(cmd === 'exit') {
                document.getElementById('terminal').style.display = 'none';
            } else if(cmd === 'whoami') {
                const res = document.createElement('p');
                res.innerText = "User: Wowstar";
                terminalInput.parentElement.before(res);
            }

            terminalInput.value = '';
            terminalBody.scrollTop = terminalBody.scrollHeight;
        };
    });
};