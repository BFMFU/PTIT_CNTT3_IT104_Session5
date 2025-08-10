class Vehicle {
    name: string;
    year: number;
    company: string;

    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}

let car = new Vehicle("Ferrari F8 Spider", 2020, "Ferrari");
let motobike = new Vehicle("Wave Alpha", 2007, "Honda");

function printVehicle(x: Vehicle) {
    console.log(x.name);
    console.log(x.year);
    console.log(x.company);
}

printVehicle(car);
printVehicle(motobike);