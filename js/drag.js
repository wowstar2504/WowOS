let highestZ = 10;

function startDraggingSystem(winid) {
    const element = document.getElementById(winid);
    const header = document.getElementById(winid + "header");
    const openBtn = document.getElementById(winid + "open");
    const closeBtn = document.getElementById(winid + "close");

    if (!element) return;

    function bringToFront() {
        highestZ++;
        element.style.zIndex = highestZ;
    };

    var initialX = 0;
    var initialY = 0;
    var currentX = 0;
    var currentY = 0;

    function startDragging(e) {
        bringToFront();
        e = e || window.event;
        e.preventDefault();
        initialX = e.clientX;
        initialY = e.clientY;
        document.onmouseup = stopDragging;
        document.onmousemove = dragElement;
    };

    function dragElement(e) {
        e = e || window.event;
        e.preventDefault();
        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;
        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    };

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    };

    if (header) {
        header.onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    };

    if (closeBtn) closeBtn.addEventListener("click", () => element.style.display = "none");
    if (openBtn) openBtn.addEventListener("click", () => {element.style.display = "block"; bringToFront();});
};

const windowIds = [
    "login", 
    "warning", 
    "warning404", 
    "welcome", 
    "links", 
    "settings", 
    "aboutme",
    "notes",
    "monitor",
];

windowIds.forEach(id => startDraggingSystem(id));