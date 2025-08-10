class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Tên ${this.name}, làm việc tại ${this.company}, liên lạc số ${this.phone} `);
    }
}
let newEmployee = new Employee("Nguyen Van A", "RIKKEI EDUCATION", "0394876215");
newEmployee.printInfo();
