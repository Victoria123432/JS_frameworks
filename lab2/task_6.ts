interface LibraryItem{
    title: string;
    author: string;
    isBorrowed: boolean;

    borrow(): void;
}

class Book implements LibraryItem{
    title: string;
    author: string;
    private pages: number;
    isBorrowed: boolean = false;

    constructor(title: string, author: string, pages: number){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    borrow(): void {
        if (this.isBorrowed){
            console.log(`The book "${this.title}" is already borrowed.`)
        }else{
            this.isBorrowed = true;
            console.log(`You have borrowed the book "${this.title}".`);
        }
    }

    getDetails(): void{
        console.log(`Book: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
    }
}

class Magazine implements LibraryItem{
    title: string;
    author: string;
    private issueNumber: number;
    isBorrowed: boolean = false;

    constructor(title: string, author: string, issueNumber: number){
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }

    borrow(): void {
        if (this.isBorrowed) {
            console.log(`The magazine "${this.title}" is already borrowed.`);
        } else {
            this.isBorrowed = true;
            console.log(`You have borrowed the magazine "${this.title}".`);
        }
    }

    getDetails(): void {
        console.log(`Magazine: ${this.title}, Author: ${this.author}, Issue Number: ${this.issueNumber}`);
    }
}

class DVD implements LibraryItem{
    title: string;
    author: string;
    private duration: number; 
    isBorrowed: boolean = false;

    constructor(title: string, author: string, duration: number) {
        this.title = title;
        this.author = author;
        this.duration = duration;
    }

    borrow(): void {
        if (this.isBorrowed) {
            console.log(`The DVD "${this.title}" is already borrowed.`);
        } else {
            this.isBorrowed = true;
            console.log(`You have borrowed the DVD "${this.title}".`);
        }
    }

    getDetails(): void {
        console.log(`DVD: ${this.title}, Author: ${this.author}, Duration: ${this.duration} minutes`);
    }
}

class Library{
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void{
        this.items.push(item);
        console.log(`${item.title} by ${item.author} has been added to the library.`);
    }

    findItemByName(name: string): LibraryItem | undefined{
        return this.items.find(item => item.title === name);
    }

    listAvailableItems(): void {
        const availableItems = this.items.filter(item => !item.isBorrowed);
        console.log("Available items in the library:");
        availableItems.forEach(item => {
            console.log(`- ${item.title} by ${item.author}`);
        });
    }
}

const library = new Library();

const book1 = new Book("Book title", "Author", 180);
const magazine1 = new Magazine("Magazine tite", "Various authors", 202);
const dvd1 = new DVD("DVD name", "DVD author", 102);

library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);

library.listAvailableItems();
const itemToBorrow = library.findItemByName("Book title");
if (itemToBorrow){  
    itemToBorrow.borrow();
}

library.listAvailableItems();