class Employee{
    public name: string;
    protected company: string;
    private phone:string;
    constructor(name: string, company: string, phone: string){
        this.name=name;
        this.company=company;
        this.phone=phone;
    }

    printInfo(): void{
        console.log(`Tên ${this.name}, làm việc tại ${this.company}, liên lạc số ${this.phone} `);
    }
}

let newEmployee = new Employee("Nguyen Van A","RIKKEI EDUCATION", "0394876215");
newEmployee.printInfo();