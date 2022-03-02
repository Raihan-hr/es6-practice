
class fatherName {
    constructor(){
        this.father = "Rahim"
    }
}

class child extends fatherName {
    constructor(name){
        super();
        this.name = name;
    }

    // i can use a function as well like this way
    getFullName (){
        return this.name + " " + this.father;
    }
}

const baby = new child("Kuka");
const baby2 = new child("Tom");
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());