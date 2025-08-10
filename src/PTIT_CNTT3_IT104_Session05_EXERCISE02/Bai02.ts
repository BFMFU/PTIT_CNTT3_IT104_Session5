class Student {
    id: number;
    age: number;
    email: string;

    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}

let students: Student[] = [
    new Student(1, 20, "abc@example.com"),
    new Student(2, 21, "example@gmail.com")
];

for (let student of students) {
    console.log(`ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`)
}