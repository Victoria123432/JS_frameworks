import {Book, User} from './models';
import { Library} from './library';

const bookLibrary = new Library<Book>();
const userLibrary = new Library<User>();

document.querySelector('form.book-form')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const titleInput = document.querySelector('input[placeholder="Назва книги"]') as HTMLInputElement;
    const authorInput = document.querySelector('input[placeholder="Автор"]') as HTMLInputElement;
    const yearInput = document.querySelector('input[placeholder="Рік видання"]') as HTMLInputElement;

    const title = titleInput.value;
    const author = authorInput.value;
    const year = parseInt(yearInput.value, 10);

    const book = new Book(title, author, year);
    bookLibrary.addItem(book);

    titleInput.value= '';
    authorInput.value = '';
    yearInput.value = '';

    console.log(bookLibrary.getItems());

});

document.querySelector('form.user-form')?.addEventListener('submit', (event) =>{
    event.preventDefault();

    const nameInput = document.querySelector('input[placeholder = "Ім\'я"]') as HTMLInputElement;
    const emailInput = document.querySelector('input[placeholder = "Email"]') as HTMLInputElement;

    const name = nameInput.value;
    const email = emailInput.value;

    const user = new User(name, email);
    userLibrary.addItem(user);

    nameInput.value ='';
    emailInput.value ='';

    console.log(userLibrary.getItems());
});