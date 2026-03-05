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

let currentCPU = 15;
let currentRAM = 1.2;

setInterval(() => {
    let cpuChange = (Math.random() * 10) - 5;
    currentCPU = Math.min(Math.max(currentCPU + cpuChange, 2), 98);

    let ramChange = (Math.random() * 0.5) - 0.25;
    currentRAM = Math.min(Math.max(currentRAM + ramChange, 1.1), 7.8);

    const cpuLoad = document.getElementById('cpu-load');
    const ramText = document.getElementById('ram-usage');

    if(cpuLoad) {
        cpuLoad.innerText = Math.floor(currentCPU) + '%';
    }

    if(ramText) {
        ramText.innerText = `RAM Usage: ${currentRAM.toFixed(2)}GB / 8GB`;
    }

}, 1000);

/* Terminal */

function resetTerminal() {
    const terminalBody = document.getElementById('terminal-body');
    const oldInputLine = terminalBody.querySelector('.terminal-line');
    
    // 1. Create a "Clone" of the input line so we don't lose it
    const newInputLine = oldInputLine.cloneNode(true);
    
    // 2. Wipe the body
    terminalBody.innerHTML = '';
    
    // 3. Put the clone back
    terminalBody.appendChild(newInputLine);
    
    // 4. IMPORTANT: Re-focus the new input
    const newInp = newInputLine.querySelector('input');
    newInp.value = '';
    newInp.focus();
    
    // 5. Since we cloned it, we need to re-attach the 'Enter' listener 
    // (Or just call your existing setup function here)
    attachTerminalListener(newInp); 
}

let currentUser = 'Wowstar' || "Unknown User";

const terminalInput = document.getElementById('terminal-input');
const terminalBody = document.getElementById('terminal-body');

if(terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') {
            const cmd = terminalInput.value.toLowerCase().trim();

            // Create a log of entries
            const log = document.createElement('p');
            log.style.margin = '2px 0';
            log.innerText = "$> " + cmd;
            terminalInput.parentElement.before(log);

            // Handle commands
            if(cmd === 'help') {
                const res = document.createElement('p');
                res.style.color = '#888';
                res.innerText = 'Available commands: help, clear, theme, exit';
                terminalInput.parentElement.before(res);
            }
            /*else if (cmd === 'clear') {
                const inputLine = terminalBody.querySelector('.terminal-input-line');
                terminalBody.innerHTML = ''; 
                terminalBody.appendChild(inputLine);
            }*/
            else if(cmd === 'whoami') {
                const res = document.createElement('p');
                res.innerText = `Current User: ${currentUser}`;
                terminalInput.parentElement.before(res);
            }
            else if (cmd === 'clear' || cmd === 'exit') {
                const terminalBody = document.getElementById('terminal-body');
                const terminalWindow = document.getElementById('terminal');
                const logs = terminalBody.querySelectorAll('p');
                
                logs.forEach(log => log.remove());

                if (cmd === 'exit') {
                    terminalWindow.style.display = 'none';
                }

            document.getElementById('terminal-input').focus();
            }
            else {
                const error = document.createElement('p');
                error.style.color = "#ff4444";
                error.innerText = `Command '${cmd}' not found. Type 'help' for a list of commands.`;
                terminalInput.parentElement.before(error);
            }
           
            terminalInput.value = '';
            terminalBody.scrollTop = terminalBody.scrollHeight;
        };
    });
};