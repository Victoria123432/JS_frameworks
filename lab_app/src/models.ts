export interface IBook {
    title: string;
    author: string;
    year: number;

    getDetails(): string;
}

export interface IUser{
    name: string;
    email: string;

    getInfo(): string;
}

export class Book implements IBook{
    title: string;
    author: string;
    year: number;
    constructor(title: string, author: string, year: number){
     this.title = title;
     this.author = author;
     this.year = year;
    }

    getDetails(): string {
        return `${this.title} написана ${this.author} у ${this.year} році`
    }
}

export class User implements IUser{
    name: string;
    email: string;

    constructor(name: string, email: string){
        this.name =name;
        this.email = email;
    }   

    getInfo(): string{
        return `Користувач: ${this.name}, Email: ${this.email}`;
    }

}