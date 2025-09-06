const myLibrary = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    pages: 309,
    read: true,
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    pages: 341,
    read: false,
  },
];

function Book(title, author, pages, read) {
  // the constructor...
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Add book to library
function addBookToLibrary(book) {
  // take parameter, create a book then store it in the myLibrary array
  myLibrary.push(book);
  displayBooks();
}

// Remove book from library
function removeBook(id) {
  const index = myLibrary.findIndex((book) => book.id === id);

  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBooks();
  }
}

// Display all books
function displayBooks() {
  // create a div for each book and place it in the page
  const container = document.getElementById("books-container");
  container.innerHTML = ""; // Clear existing content

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book");
    card.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Status: ${book.read ? "Read" : "Not Read"}</p>
    `;

    // Toggle read button
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Read";
    toggleBtn.addEventListener("click", () => {
      book.read = !book.read;
      displayBooks();
    });

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      removeBook(book.id);
    });

    card.appendChild(toggleBtn);
    card.appendChild(removeBtn);
    container.appendChild(card);
  });
}

// Handle form submit
const form = document.getElementById("add-book-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value, 10);
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  form.reset(); // clear form fields
});

displayBooks();
