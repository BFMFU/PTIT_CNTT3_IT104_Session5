class Vehicles {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    getInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`;
    }
}
const vehicle = new Vehicles(1, "Civic", 2020, "Honda");
console.log(vehicle.getInfo());
// Truy cập các thuộc tính
console.log(vehicle.name); // OK (public)
// console.log(vehicle.year); // Error (protected)
// console.log(vehicle.company); // Error (private)
// vehicle.id = 2; // Error (readonly)
