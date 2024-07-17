class School {
    name: string;
    students: Student[] = [];
    teachers: Teacher[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addStudent(student: Student) {
        this.students.push(student);
    }

    addTeacher(teacher: Teacher) {
        this.teachers.push(teacher);
    }
}

class Student {
    name: string;
    rollNumber: number;
    schoolName: string;

    constructor(name: string, rollNumber: number, schoolName: string) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.schoolName = schoolName;
    }
}

class Teacher {
    name: string;
    id: number;
    schoolName: string;

    constructor(name: string, id: number, schoolName: string) {
        this.name = name;
        this.id = id;
        this.schoolName = schoolName;
    }
}

// School names
let school1 = new School("Sir Syed Children's Academy");
let school2 = new School("Hasan Academy");

// Student names
let s1 = new Student("Arif", 123, school1.name);
let s2 = new Student("ALI", 124, school1.name);
let s3 = new Student("Yasir", 125, school2.name);

// Teacher names
let t1 = new Teacher("Hamza", 34, school1.name);
let t2 = new Teacher("Ahsan", 30, school2.name);
let t3 = new Teacher("Noman", 28, school2.name);

// Adding students to schools
school1.addStudent(s1);
school1.addStudent(s2);
school2.addStudent(s3);

// Adding teachers to schools
school1.addTeacher(t1);
school2.addTeacher(t2);
school2.addTeacher(t3);

console.log(t1);
console.log(t2);
console.log(t3);

console.log(school1);
console.log(school2);

console.log(s1);
console.log(s2);
console.log(s3);


 
  