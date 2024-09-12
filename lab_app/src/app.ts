import {Book, User} from './models';
import { Library} from './library';
import {LocalStorageService} from './services';

const bookLibrary = new Library<Book>();
const userLibrary = new Library<User>();

const storage = new LocalStorageService();

const savedBooks = storage.getItem('books');
if (savedBooks){
    savedBooks.forEach((bookData:{title: string; author: string; year: number})=>{
        const book = new Book(bookData.title, bookData.author, bookData.year);
        bookLibrary.addItem(book);
    });
    renderBookList();
}

const savedUsers = storage.getItem('users');
if (savedUsers) {
    savedUsers.forEach((userData: { name: string; email: string }) => {
        const user = new User(userData.name, userData.email);
        userLibrary.addItem(user);
    });
    renderUserList();
}

function renderBookList(){
    const bookList = document.getElementById('book-list-items') as HTMLElement;
    bookList.innerHTML = '';

    bookLibrary.getItems().forEach((book, index)=>{
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';

        listItem.innerHTML = `
        <span>${book.title} - ${book.author} (${book.year})</span>
        <button class="borrow-btn btn btn-primary" data-index="${index}">Позичити</button>`;

        bookList.appendChild(listItem);   

    });

    document.querySelectorAll('.borrow-btn').forEach(button =>{
        button.addEventListener('click', (event)=>{
            const target = event.target as HTMLButtonElement;
            const index = target.getAttribute('data-index');
            borrowBook(parseInt(index!));
        });
    });
}

function renderUserList(){
    const userList = document.getElementById('user-list-items') as HTMLElement;
    userList.innerHTML = '';

    userLibrary.getItems().forEach((user, index)=>{
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';

        listItem.innerHTML = `
        <span>${user.name} - ${user.email}</span>
        <button class="delate-btn btn btn-primary" data-index="${index}">Видалити</button>`;

        userList.appendChild(listItem);   

    });

    document.querySelectorAll('.delate-btn').forEach(button =>{
        button.addEventListener('click', (event)=>{
            const target = event.target as HTMLButtonElement;
            const index = target.getAttribute('data-index');
            userLibrary.removeItem(parseInt(index!));
            storage.setItem('users', userLibrary.getItems());
            renderUserList();
        });
    });
}

function borrowBook(index: number){
    const book = bookLibrary.getItems()[index];
    alert(`Ви позичили книгу: ${book.title}`);
}


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

    storage.setItem('books', bookLibrary.getItems());

    titleInput.value= '';
    authorInput.value = '';
    yearInput.value = '';

    renderBookList();

    console.log('Оновлений список книг:', bookLibrary.getItems());

});

document.querySelector('form.user-form')?.addEventListener('submit', (event) =>{
    event.preventDefault();

    const nameInput = document.querySelector('input[placeholder = "Ім\'я"]') as HTMLInputElement;
    const emailInput = document.querySelector('input[placeholder = "Email"]') as HTMLInputElement;

    const name = nameInput.value;
    const email = emailInput.value;

    const user = new User(name, email);
    userLibrary.addItem(user);

    storage.setItem('users', userLibrary.getItems());

    nameInput.value ='';
    emailInput.value ='';

    renderUserList();

    console.log(userLibrary.getItems());
});