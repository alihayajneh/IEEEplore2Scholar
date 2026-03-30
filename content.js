function tryAddButton() {
  // Safety: only run on IEEE Xplore
  if (!window.location.hostname.includes('ieeexplore.ieee.org')) return false;

  if (document.getElementById('ieee-scholar-btn')) {
    return;
  }
  // Only target IEEE-specific title selectors, no generic fallbacks
  const titleElement = document.querySelector('h1.document-title') || document.querySelector('.document-title');
  if (titleElement && titleElement.textContent) {
    const titleText = titleElement.textContent.trim();
    if (!titleText) return;
    
    const container = document.createElement('div');
    container.className = 'ieee-scholar-btn-container';
    
    const btn = document.createElement('a');
    btn.id = 'ieee-scholar-btn';
    btn.innerHTML = `
      <svg focusable="false" viewBox="0 0 24 24" width="18" height="18" style="fill: currentColor; margin-right: 6px;">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z" />
      </svg>
      Search on Google Scholar
    `;
    btn.href = `https://scholar.google.com/scholar?q=${encodeURIComponent(titleText)}`;
    btn.target = '_blank';
    btn.title = "Search this article on Google Scholar";
    
    container.appendChild(btn);
    titleElement.parentNode.insertBefore(container, titleElement.nextSibling);
    return true;
  }
  return false;
}

function tryAddAuthorLinks() {
  const authors = document.querySelectorAll('xpl-author-banner .authors-info a, xpl-document-details-authors .authors-info a');
  authors.forEach(authorLink => {
    // Skip if already added
    if (authorLink.nextElementSibling && authorLink.nextElementSibling.classList.contains('ieee-author-scholar-icon')) {
      return;
    }
    
    // Ignore "Show More Authors" button etc.
    const authorName = authorLink.textContent.trim();
    if (!authorName || authorName.toLowerCase().includes('more authors')) return;

    // Create mini icon
    const scholarLink = document.createElement('a');
    scholarLink.className = 'ieee-author-scholar-icon';
    scholarLink.href = `https://scholar.google.com/scholar?q=${encodeURIComponent('author:"' + authorName + '"')}`;
    scholarLink.target = '_blank';
    scholarLink.title = `Search ${authorName} on Google Scholar`;
    scholarLink.innerHTML = `
      <svg focusable="false" viewBox="0 0 24 24" width="16" height="16" style="fill: #10B981; margin-left: 6px; vertical-align: middle; position: relative; top: -1px;">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z" />
      </svg>
    `;
    
    // Inject node gracefully
    authorLink.parentNode.insertBefore(scholarLink, authorLink.nextSibling);
  });
}

// We use a MutationObserver to detect when the title is added to the DOM
const observer = new MutationObserver((mutations, obs) => {
  tryAddButton();
  tryAddAuthorLinks();
});

// Start observing the body for DOM changes
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Also try it immediately in case it's already loaded
tryAddButton();
tryAddAuthorLinks();
