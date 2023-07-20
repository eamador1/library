document.addEventListener('DOMContentLoaded', () => {
  const $hamburger = document.querySelector('.hamburger');
  const $menu = document.querySelector('.nav-bar');
  const $list = document.querySelector('ul');
  
  
    $hamburger.addEventListener('click', () => {
      $hamburger.classList.toggle('active');
      $menu.classList.toggle('active');
      $list.classList.toggle('active');
    });
  });
  
document.addEventListener('DOMContentLoaded',() => {
  const $addBook = document.querySelector('.add-title');
  const $newBook = document.querySelector('.newBook');
  const $menu = document.querySelector('.nav-bar');
  const $list = document.querySelector('ul');
  

$newBook.addEventListener('click',() => {
  $addBook.classList.toggle('active');
  $menu.classList.toggle('active');
  $list.classList.toggle('active');
});
});

document.addEventListener('DOMContentLoaded',() => {
    const $close = document.querySelector('.x-image');
    const $addBook = document.querySelector('.add-title');
    const $hamburger = document.querySelector('.hamburger');

$close.addEventListener('click',() => {
$addBook.classList.toggle('active');
$hamburger.classList.toggle('active');

});
});
  let library = [
{
  title: 'One Hundred Years of Solitude',
  author: 'Gabriel Garcia Marquez',
  year: '1970',
  status: 'read',
},

{
  title: 'Around the World in Eighty Days',
  author:'Jules Verne',
  year: '1872',
  status: 'not read',
},

];

const $books = document.querySelector('.list-books');
library.forEach((book, index) => {
const $contBook = document.createElement('div')
const $title = document.createElement('p');
const $author = document.createElement('p');
const $year = document.createElement('p');
const $status = document.createElement('p');

$contBook.classList.add('cont-book')
$title.classList.add('title');
$author.classList.add('author');
$year.classList.add('year');
$status.classList.add('status');

$title.textContent = book.title;
$author.textContent = book.author;
$year.textContent = book.year;
$status.textContent = book.status;

$contBook.appendChild($title);
$contBook.appendChild($author);
$contBook.appendChild($year);
$contBook.appendChild($status);
$books.appendChild($contBook);

});

const $form = document.querySelector('.add-form');
$form.addEventListener("submit", (e) => {

    e.preventDefault();
    addBookToLibrary();
    emptyForm();
});

  
  
class Book {
  constructor(title, author, year, status) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.status = status;
}

}
let cualquiera = Book;
console.log(cualquiera);

function addBookToLibrary() {
  const $captureTitle = document.querySelector('.title');
  const $captureAuthor = document.querySelector('.author');
  const $captureYear = document.querySelector('.published');
  const $captureStatus = document.querySelector('.status');
  const newBook = new Book($captureTitle.value, $captureAuthor.value, $captureYear.value, $captureStatus.value);
    library.push(newBook);
    updateLocalStorage();
}

function updateLocalStorage() {
    localStorage.setItem("library", JSON.stringify(library));
    //library = JSON.parse(localStorage.getItem("library"));
  }

function emptyForm() {
    const $captureTitle = document.querySelector('.title');
}
