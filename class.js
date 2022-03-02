class Student{
    constructor(sID, sName){

        this.id = sID;
        this.name = sName
        this.college = "Chittagong College"

    }
}

const student1 = new student(12, "Mahiya");
const student2 = new student(11, "Subo")

console.log(student1, student2);