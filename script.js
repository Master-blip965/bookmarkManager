document.addEventListener("DOMContentLoaded", loadBookmarks);
document.getElementById('add-bookmark-btn').addEventListener('click', addBookmark);

function addBookmark() {
    const name = document.getElementById('bookmark-name').value;
    const url = document.getElementById('bookmark-url').value;

    if (!name || !url) {
        alert("Please enter both bookmark name and URL.");
        return;
    }

    const bookmarkList = document.getElementById('bookmark-list');

    // Create bookmark object
    const newBookmark = { name, url };

    // Get existing bookmarks from localStorage
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.push(newBookmark);

    // Save updated bookmarks to localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    // Add bookmark to the page
    addBookmarkToPage(newBookmark);

    // Clear input fields
    document.getElementById('bookmark-name').value = '';
    document.getElementById('bookmark-url').value = '';
}

function addBookmarkToPage(bookmark) {
    const bookmarkList = document.getElementById('bookmark-list');

    // Create bookmark item element
    const bookmarkItem = document.createElement('li');
    bookmarkItem.classList.add('bookmark-item');
    bookmarkItem.innerHTML = `
        <p><a href="${bookmark.url}" target="_blank">${bookmark.name}</a></p>
        <button class="delete-btn">Delete</button>
    `;

    // Append to bookmark list
    bookmarkList.appendChild(bookmarkItem);

    // Add delete event listener
    bookmarkItem.querySelector('.delete-btn').addEventListener('click', () => {
        deleteBookmark(bookmark, bookmarkItem);
    });
}

function loadBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.forEach(addBookmarkToPage);
}

function deleteBookmark(bookmark, bookmarkItem) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    
    // Filter out the bookmark to delete
    bookmarks = bookmarks.filter(b => b.name !== bookmark.name || b.url !== bookmark.url);

    // Update localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    // Remove from page
    bookmarkItem.remove();
}
