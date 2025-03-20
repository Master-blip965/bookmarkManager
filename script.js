document.getElementById('add-bookmark-btn').addEventListener('click', addBookmark);

function addBookmark() {
    const name = document.getElementById('bookmark-name').value;
    const url = document.getElementById('bookmark-url').value;

    if (name && url) {
        const bookmarkList = document.getElementById('bookmark-list');

        // Create bookmark item element
        const bookmarkItem = document.createElement('li');
        bookmarkItem.classList.add('bookmark-item');

        // Add bookmark details and delete button
        bookmarkItem.innerHTML = `
            <p><a href="${url}" target="_blank">${name}</a></p>
            <button class="delete-btn">Delete</button>
        `;

        // Append to bookmark list
        bookmarkList.appendChild(bookmarkItem);

        // Clear input fields
        document.getElementById('bookmark-name').value = '';
        document.getElementById('bookmark-url').value = '';

        // Add delete event listener to the button
        bookmarkItem.querySelector('.delete-btn').addEventListener('click', () => {
            bookmarkList.removeChild(bookmarkItem);
        });
    } else {
        alert("Please enter both bookmark name and URL.");
    }
}
