// for objects
const person = {name: 'Raihan Bhai', age: 20, Job: "Coder", class: "Honor's", Number: "0145452544"};

// const job = person.Job;
// const Number = person.Number;
const {Job, Number, name,age} = person;
// const {Number} = person;

console.log (age, Job, Number);
console.log(Job, Number, age);


const comPlexObject = {
    name: 'Raihan Bhai',
    info: {
        address: "kola Bagan",
        leader: "Tiger Leader"
    }
}

const {leader} = comPlexObject.info

// 

// array

const friends = ['Raihan Khan', 'Ridoan Khan', 'yeaseen khan', 'Arman Khan'];
const [chuthoFrind, nextFriend, ...restFrinds] = friends;

console.log(chuthoFrind, nextFriend);
console.log(restFrinds);

