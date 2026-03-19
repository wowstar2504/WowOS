# WowOS
**A window-based WebOS.**

WowOS is a web-based desktop environment built for **[Hack Club Flavortown](https://flavortown.hackclub.com)**. It breaks away from the traditional "flat" web experience by introducing a functional window management system, dynamic layering, and some personalization through custom themes.

---

## Key Features

### Window Management
- **Dynamic Layering (Z-Index)**: Unlike many web-based operating systems, WowOS understands depth. When you click or open an app, it automatically jumps to the front of the stack, ensuring your active workspace is never hidden.
- **Custom Drag Engine**: A smooth, header-locked dragging system that allows you to organize your workspace exactly how you want it.

### Personalization & Themes
- **Intelligent Color Switching**: Using CSS Variables, WowOS automatically flips text and border colors when switching between Light and Dark modes.
- **Native OS Feel**: All UI elements, including links and buttons have been stripped of default browser styling (like blue underlines) and replaced with custom-designed OS components.

### System Components
- **Taskbar & App Launcher**: A glassmorphic bottom bar for quick access to system tools and apps.
- **Real-time System Tray**: A live clock and date tracker located in the top bar.
- **Settings Aoo**: A central hub to toggle system-wide themes and background images.

---

### Technical Stack
- **Frontend**: HTML5, CSS3 (Custom Variables & Glassmorphism)
- **Logic**: Vanilla JavaScript (ES6+)
- **Architecture**:
    - `drag.js`: Manages the physics of movement and the global `z-index` state.
    - `style.css`: A variable-driven design system for instant theme swaps.
    - `main.html`: The semantic core of the OS.

---

### Credits
- At first I followed [this guide](https://jams.hackclub.com/batch/webOS). Then I modified some things to make it my own webOS.

---

### Optimization
1. Caching Strategies (HTTP & Browser)
- Implementation: Integrated a Service Worker (``sw.js``) and utilized Web Storage API.
- Impact: * Service Worker: Intercepts network requests to serve HTML, CSS, and JS directly from the browser's local cache. This makes "booting" WowOS nearly instant on repeat visits and enables offline functionality.
  - Application Level: Uses ``localStorage`` to persist "Sticky Notes" and "Welcome" settings, ensuring user data is cached locally without needing a database.

2. Lazy Loading
- Implementation: Shifted from "Eager Execution" to On-Demand Logic Loading.
- Impact: * Logic Steering: The System Monitor's background processes no longer run on startup. Instead, the logic only initializes when the user specifically opens the "System Monitor" window.
   - Modular Architecture: Established a pattern for using `import()` to load app-specific scripts only when required, keeping the initial "OS Shell" footprint as small as possible.

3. Reduced Memory Usage
- Implementation: Established Global Scope Management and Process Termination.
- Impact: * Interval Clearing: By calling ``window.stopMonitor()`` when the window is closed, we manually kill the `setInterval` process.
   - Leak Prevention: This prevents "Ghost Processes" from stacking up in the browser's RAM, ensuring WowOS doesn't become laggy or crash the tab after extended use.

4. Efficient Algorithms
- Implementation: Optimized Lookups and State Management.
- Impact: * Z-Index Management: Uses a centralized ``highestZ`` variable to handle window depth. This allows a window to be brought to the front with $O(1)$ time complexity (a single operation), rather than looping through every DOM element to find the top layer.
   - Batch Initialization: Uses ``windowIds.forEach`` in ``drag.js`` to efficiently attach event listeners to all system components in a single pass during the boot sequence.

---

### License
- This is licensed under the MIT license which you may check [here](https://github.com/wowstar2504/WowOS/blob/main/LICENSE).
- If you have any questions or inquiries about this project, please reach me at [wowstar2504@proton.me](mailto:wowstar2504@proton.me).