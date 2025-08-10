class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let students = [
    new Student(1, 20, "abc@example.com"),
    new Student(2, 21, "example@gmail.com")
];
for (let student of students) {
    console.log(`ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
}
