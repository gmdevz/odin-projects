const myLibrary = [
  new Book("The Hobbit", "J.R.R. Tolkien", 295, false),
  new Book("Dune", "Frank Herbert", 412, true),
  new Book("1984", "George Orwell", 328, false),
  new Book("Pride and Prejudice", "Jane Austen", 432, true),
];

function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  return newBook;
}

console.log(myLibrary);

function displayBooks(books) {
  //   for (let i = 0; i < books.length; i++) {
  //     const book = books[i];
  //     console.log(
  //       `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.isRead}`
  //     );
  //   }

  books.forEach((book) => {
    console.log(
      `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.isRead}`
    );
  });
}

displayBooks(myLibrary);
