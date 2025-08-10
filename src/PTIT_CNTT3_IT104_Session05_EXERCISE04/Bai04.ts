class Vehicles {
    public name: string;
    protected year: number;
    private company: string;
    public readonly id: number;

    constructor(id: number, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }

    public getInfo(): string {
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