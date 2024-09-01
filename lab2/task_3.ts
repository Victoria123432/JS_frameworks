abstract class Car{
    protected brand: string;
    protected model: string;
    protected year: number;


    constructor(brand: string, model: string, year: number){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    abstract getDetails(): void;

}

class BMW extends Car {
    private engineType: string;

    constructor(model: string, year: number, engineType: string){
        super("BMW", model, year);
        this.engineType = engineType;

    }

    public getDetails(): void {
        console.log(`Brand: ${this.brand} Model: ${this.model}, Year: ${this.year}, Engine: ${this.engineType}`);
    }
}

class Audi extends Car {
    private isQuattro: boolean;

    constructor(model: string, year: number, isQuattro: boolean) {
        super("Audi", model, year);
        this.isQuattro = isQuattro;
    }

    public getDetails(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Quattro: ${this.isQuattro}`);
    }
}

class Tesla extends Car {
    private batteryCapacity: number;

    constructor(model: string, year: number, batteryCapacity: number) {
        super("Tesla", model, year);
        this.batteryCapacity = batteryCapacity;
    }

    public getDetails(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Battery Capacity: ${this.batteryCapacity} kWh`);
    }
}

const bmwX5 = new BMW("X5", 2021, "V6");
const bmwM3 = new BMW("M3", 2020, "V8");

const audiA4 = new Audi("A4", 2019, true);
const audiQ7 = new Audi("Q7", 2021, false);

const teslaModel3 = new Tesla("Model 3", 2021, 75);
const teslaModelS = new Tesla("Model S", 2022, 100);

const cars: Car[] = [bmwX5, bmwM3, audiA4, audiQ7, teslaModelS, teslaModel3];

cars.forEach(car => car.getDetails());




