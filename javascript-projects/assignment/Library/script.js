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
  }

];

function Book() {
  // the constructor...
  this.title = title;

}

function addBookToLibrary(book) {
  // take parameter, create a book then store it in the myLibrary array
  myLibrary.push(book);

}

function displayBooks() {
  // create a div for each book and place it in the page
  const libraryDiv = document.getElementById('library');
  libraryDiv.innerHTML = ''; // Clear existing content

  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
<h3>${book.title}</h3>`
      + `<p>Author: ${book.author}</p>
<p>Pages: ${book.pages}</p>
<p>Read: ${book.read ? 'Yes' : 'Not yet'}</p>`
    libraryDiv.appendChild(bookDiv);
  })
}


displayBooks();
