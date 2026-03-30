function tryAddButton() {
  // Prevent adding multiple buttons
  if (document.getElementById('ieee-scholar-btn')) {
    return;
  }

  // IEEE Xplore document titles are usually within an h1 with class "document-title"
  // Try finding the exact class first, fallback to any h1
  const titleElement = document.querySelector('h1.document-title') || document.querySelector('.document-title') || document.querySelector('h1');
  
  if (titleElement && titleElement.textContent) {
    const titleText = titleElement.textContent.trim();
    if (!titleText) return;

    // Create the button
    const container = document.createElement('div');
    container.className = 'ieee-scholar-btn-container';

    const btn = document.createElement('a');
    btn.id = 'ieee-scholar-btn';
    btn.innerHTML = `
      <svg focusable="false" viewBox="0 0 24 24" width="16" height="16" style="fill: currentColor; margin-right: 6px;">
        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#ffffff"/>
        <path d="M12 3a9 9 0 0 0-9 9c0 4.29 3 7.87 7.07 8.84.45.08.61-.19.61-.43 0-.21-.01-.78-.01-1.53-2.5.54-3.03-1.21-3.03-1.21-.41-1.04-.99-1.32-.99-1.32-.81-.56.06-.55.06-.55.9.06 1.37.92 1.37.92.8 1.37 2.1.98 2.61.75.08-.58.31-.98.57-1.21-2-.23-4.1-.99-4.1-4.44 0-.98.35-1.78.92-2.41-.09-.23-.4-1.14.09-2.38 0 0 .75-.24 2.46.92a8.5 8.5 0 0 1 2.24-.3c.76.01 1.53.1 2.24.3 1.7-1.16 2.45-.92 2.45-.92.49 1.24.18 2.15.09 2.38.57.63.92 1.43.92 2.41 0 3.46-2.1 4.2-4.11 4.43.32.28.6.83.6 1.67 0 1.2-.01 2.17-.01 2.47 0 .24.16.52.62.43A9.002 9.002 0 0 0 21 12a9 9 0 0 0-9-9z" fill="#10B981"/>
      </svg>
      Search on Google Scholar
    `;
    btn.href = `https://scholar.google.com/scholar?q=${encodeURIComponent(titleText)}`;
    btn.target = '_blank';
    btn.title = "Search this article on Google Scholar";

    container.appendChild(btn);

    // Insert the button just after the title element
    titleElement.parentNode.insertBefore(container, titleElement.nextSibling);

    return true; // Successfully added
  }
  return false;
}

// IEEE Xplore loads content dynamically (SPA behavior)
// We use a MutationObserver to detect when the title is added to the DOM
const observer = new MutationObserver((mutations, obs) => {
  if (tryAddButton()) {
    // Observer can stay active if user navigates between documents
  }
});

// Start observing the body for DOM changes
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Also try it immediately in case it's already loaded
tryAddButton();
