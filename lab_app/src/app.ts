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
        listItem.className = 'list-group-item d-flex justify-content-between';

        listItem.innerHTML = `
        <span>${book.title} - ${book.author} (${book.year})</span>
        <div class="gap-2 d-md-flex justify-content-md-end">
        <button type="button" class="btn btn-primary borrow-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-index="${index}">Позичити</button>
        <button class="delete-book-btn btn btn-danger" data-index="${index}">Видалити</button>
        </div>
        `;
        

        bookList.appendChild(listItem);   

    });

    document.querySelectorAll('.borrow-btn').forEach(button =>{
        button.addEventListener('click', (event)=>{
            const target = event.target as HTMLButtonElement;
            const index = target.getAttribute('data-index');

            const bookIndex = parseInt(index!);
            const book = bookLibrary.getItems()[bookIndex];

            const saveButton = document.getElementById('saveButton') as HTMLButtonElement;
            saveButton.setAttribute('data-index', index!);
            saveButton.setAttribute('data-book-title', book.title);

            const borrowButton = target;
            saveButton.setAttribute('data-borrow-button-id', borrowButton.id);
        });
    });

    document.querySelectorAll('.delete-book-btn').forEach(button =>{
        button.addEventListener('click', (event)=>{
            const target = event.target as HTMLButtonElement;
            const index = target.getAttribute('data-index');
            bookLibrary.removeItem(parseInt(index!));
            storage.setItem('books', bookLibrary.getItems());
            renderBookList();
        });
    });
}

function renderUserList(){
    const userList = document.getElementById('user-list-items') as HTMLElement;
    userList.innerHTML = '';

    userLibrary.getItems().forEach((user, index)=>{
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between';

        listItem.innerHTML = `
        <span>${user.name} - ${user.email}</span>
        <div class="d-md-flex justify-content-md-end">
        <button class="delate-user-btn btn btn-primary btn-danger" data-index="${index}">Видалити</button>
        </div>`;

        userList.appendChild(listItem);   

    });

    document.querySelectorAll('.delate-user-btn').forEach(button =>{
        button.addEventListener('click', (event)=>{
            const target = event.target as HTMLButtonElement;
            const index = target.getAttribute('data-index');
            userLibrary.removeItem(parseInt(index!));
            storage.setItem('users', userLibrary.getItems());
            renderUserList();
        });
    });
}
document.getElementById('saveButton')?.addEventListener('click', () =>{  
    const saveButton = document.getElementById('saveButton') as HTMLButtonElement;
    // const bookIndex = saveButton.getAttribute('data-index');
    const bookTitle = saveButton.getAttribute('data-book-title');
    const userId = (document.getElementById('user-id') as HTMLTextAreaElement).value;

    const borrowButtonId = saveButton.getAttribute('data-borrow-button-id');
    const borrowButton = document.getElementById(borrowButtonId!) as HTMLButtonElement;

    // Зміна кольору та тексту кнопки
    borrowButton.classList.remove('btn-primary');
    borrowButton.classList.add('btn-warning');
    borrowButton.textContent = 'Повернути';

    // Оновлення інформації у другому модальному вікні
    const modalBodyContent = document.getElementById('modalBodyContent') as HTMLElement;
    modalBodyContent.textContent = `${bookTitle} has been borrowed by ${userId}`;
})

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