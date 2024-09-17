import { User} from './models';
import { Library} from './library';

export interface ValidationError {
    field: string;
    message: string;
}

export function validateBookForm(title: string, author: string, year: string): ValidationError[] {
    const errors: ValidationError[] = [];

    if (title.trim() === '') {
        errors.push({ field: 'title', message: 'Назва книги є обов*язковою' });
    }

    if (author.trim() === '') {
        errors.push({ field: 'author', message: 'Автор є обов*язковим' });
    }

    if (year.trim() === '') {
        errors.push({ field: 'year', message: 'Рік видання є обов*язковим' });
    } else if (!/^\d{4}$/.test(year)) {
        errors.push({ field: 'year', message: 'Введіть коректний рік (4 цифри)' });
    }

    return errors;
}

export function validateUserForm(name:string, email: string): ValidationError[] {
    const errors: ValidationError[] = [];

    if (name.trim() ===''){
        errors.push({field: 'name', message:'Ім*я є бов*язковим'});
    }
    if(email.trim() ===''){
        errors.push({field: 'email', message: 'Emaile є бов*язковим'})
    }

    return errors;

}


export function validateUserId(user_id: string, userLibrary: Library<User>): void {
    const modalBodyContent = document.getElementById('modalBodyContent') as HTMLElement;
    if (!/^\d+$/.test(user_id)) {
        modalBodyContent.textContent = `ID має бути числом`;
        return;
    }

    const userId = parseInt(user_id, 10);
    const user = userLibrary.getItems()[userId];

    if (!user) {
        modalBodyContent.textContent = `Такого користувача не існує`;
        return;
    }

}