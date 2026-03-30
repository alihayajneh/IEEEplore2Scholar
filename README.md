# IEEE to Scholar Extension 🎓 -> 🔍

A sleek and lightweight Chrome extension that injects a handy "Search on Google Scholar" button immediately below the article title on IEEE Xplore document pages. 

## 🎥 Demo

![Extension Demo](record.gif)

## ✨ Features
* **Seamless Integration:** Adds a beautiful emerald green action button directly into the IEEE Xplore UI.
* **Instant Search:** Automatically extracts the exact title of the formal publication and opens a new tab searching for it on Google Scholar.
* **Smart Observer:** Handles dynamic page loading properly, ensuring the button always appears exactly when the document title renders.
* **Support for Abstracts:** Works natively on both `/document/` and `/abstract/document/` pages.

## 🚀 Installation & Usage
1. Clone this repository or download it to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the folder of this extension.
5. Visit any IEEE Xplore document.
6. Click the brilliant green "Search on Google Scholar" button under the title!

## 🛠️ Components
* `manifest.json`: Configuration logic (Manifest V3 fully compatible).
* `content.js`: Main Javascript injection script that utilizes `MutationObserver` to gracefully hook into the site.
* `content.css`: Premium aesthetic styling for the injected button with state-based hover shadows.
* `icon48.png` / `icon128.png`: Generated extension icons.
