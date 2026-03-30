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

## 📝 To-Do List & Suggested Features
We have many great ideas to make this extension even more powerful for academic research:
- [ ] **Open Access Integration:** Leverage the paper's DOI to query Unpaywall for legal open-access PDF links.
- [ ] **Quick Citation Copier:** Add a button to instantly format and copy the paper's citation (BibTeX, APA, IEEE) to the clipboard.
- [x] **Author Search:** Inject Google Scholar icons next to authors to quickly search for their other works.
- [ ] **Reading List / Bookmarks:** Implement a popup dashboard to save interesting papers locally or sync to Notion/Obsidian.
- [ ] **Fetch Citation Metrics:** Automatically retrieve and display how many times the paper has been cited.
- [ ] **Related Papers Sidebar:** Show a compact floating panel with the top 5 related papers from Google Scholar or Semantic Scholar API.
- [ ] **Abstract Highlighter:** Auto-highlight key terms (methods, datasets, metrics) in the abstract using NLP keyword extraction.
- [ ] **Export to Reference Manager:** One-click export to Zotero, Mendeley, or EndNote via their browser integration APIs.
- [ ] **Conference/Journal Impact Badge:** Display the venue's impact factor or h-index as a small badge on the page.
- [ ] **PDF Annotation Sync:** Allow users to annotate the PDF viewer and sync highlights/notes to a local storage or cloud service.
- [ ] **Multi-Search Engine Support:** Add options to search on Semantic Scholar, DBLP, or ResearchGate in addition to Google Scholar.
- [ ] **Dark Mode Toggle:** Provide a toggle to apply a comfortable dark theme over IEEE Xplore pages for late-night reading.

## 🤝 Contributing
Contributions, issues, and feature requests are very welcome! If you have any ideas to improve the extension or want to tackle one of the To-Dos above, feel free to dive in.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
