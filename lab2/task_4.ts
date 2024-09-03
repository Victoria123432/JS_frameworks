let totalAnnualBonus = 0;

abstract class Employee {
    protected name: string;
    protected age: number;
    protected salary: number;

    constructor(name: string, age: number, salary: number){
        this.name = name;
        this.age = age;
        this.salary = salary
    }

    abstract getAnnualBonus(): number;
  
}

interface Payable{
    pay(): void;
}

class Developer extends Employee implements Payable{
    getAnnualBonus(): number {
        return this.salary * 0.1;
    }

    pay(): void{
        console.log(`${this.name} has been paid.`);
    }
}

class Manager extends Employee implements Payable{
    getAnnualBonus(): number {
        return this.salary * 0.2;
    }

    pay(): void{
        console.log(`${this.name} has been paid.`);
    }
}

const employees:  (Employee & Payable)[] =[
    new Developer("John Doe", 30, 60000),
    new Developer("Jane Smith", 28, 65000),
    new Manager("Alice Johnson", 35, 80000),
    new Manager("Bob Brown", 40, 85000)
]

employees.forEach(employee => {
    totalAnnualBonus += employee.getAnnualBonus();
    employee.pay();
});

console.log(`Total annual bonus sum ${totalAnnualBonus}`)