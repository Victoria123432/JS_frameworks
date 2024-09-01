interface Course {
    name: string;
    duration: number;
    students: string[];
}

class OnlineCourse implements Course{
    name: string;
    duration: number;
    students: string[] = [];

    constructor(name: string, duration: number){
        this.name = name;
        this.duration = duration;
    }

    registerStudent(student: string): void{
        if(!this.isStudentRegistered(student)){
            this.students.push(student);
            console.log(`${student} зареєстрований на курс ${this.name}.`)
        } else{
            console.log(`${student} вже зареєстрований на курс ${this.name}.`);
        }
    }

    isStudentRegistered(student: string): boolean{
        return this.students.includes(student);
    }
}

class CourseManager{
    private courses : Course[] = [];

    addCourse(course: Course): void{
        this.courses.push(course);
        console.log(`Курс ${course.name}додано до менеджера курсів.`)
    }

    removeCourse(courseName: string): void{
        this.courses = this.courses.filter(course => course.name !== courseName)
        console.log(`Курс ${courseName} видалено з менеджера курсів.`);
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find(course => course.name === courseName);
    }

    listCourses(): void {
        this.courses.forEach(course => {
            console.log(`Курс: ${course.name}, Тривалість: ${course.duration} годин, Студенти: ${course.students.join(', ')}`);
        });
    }
}


const jsCourse = new OnlineCourse('JavaScript', 40);
const tsCourse = new OnlineCourse('TypeScript', 30);
const pythonCourse = new OnlineCourse('Python', 50);


const courseManager = new CourseManager();

courseManager.addCourse(jsCourse);
courseManager.addCourse(tsCourse);
courseManager.addCourse(pythonCourse);

jsCourse.registerStudent('John Doe');
tsCourse.registerStudent('Alice Johnson');
pythonCourse.registerStudent('Bob Brown');

console.log(jsCourse.isStudentRegistered('John Doe')); // true
console.log(tsCourse.isStudentRegistered('Jane Smith')); // false

courseManager.listCourses();

courseManager.removeCourse('TypeScript');

courseManager.listCourses();