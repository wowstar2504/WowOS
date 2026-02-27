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

### License
- This is licensed under the MIT license which you may check [here](https://github.com/wowstar2504/WowOS/blob/main/LICENSE).
- If you have any questions or inquiries about this project, please reach me [at hi@22291111.xyz](mailto:hi@22291111.xyz).