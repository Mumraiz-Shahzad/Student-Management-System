var School = /** @class */ (function () {
    function School(name) {
        this.students = [];
        this.teachers = [];
        this.name = name;
    }
    School.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    School.prototype.addTeacher = function (teacher) {
        this.teachers.push(teacher);
    };
    return School;
}());
var Student = /** @class */ (function () {
    function Student(name, rollNumber, schoolName) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.schoolName = schoolName;
    }
    return Student;
}());
var Teacher = /** @class */ (function () {
    function Teacher(name, id, schoolName) {
        this.name = name;
        this.id = id;
        this.schoolName = schoolName;
    }
    return Teacher;
}());
// School names
var school1 = new School("Sir Syed Children's Academy");
var school2 = new School("Hasan Academy");
// Student names
var s1 = new Student("Arif", 123, school1.name);
var s2 = new Student("ALI", 124, school1.name);
var s3 = new Student("Yasir", 125, school2.name);
// Teacher names
var t1 = new Teacher("Hamza", 34, school1.name);
var t2 = new Teacher("Ahsan", 30, school2.name);
var t3 = new Teacher("Noman", 28, school2.name);
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
