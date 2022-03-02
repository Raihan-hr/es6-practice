
//  function can write in these all ways

// function doubleIt (num){
//     return num * 2;
// }


// const doubleIt = function(num){
//     return  num * 2;
// }

// es6
const doubleIt = num => num * 2;

const add = (x, y) => x + y;

const give5 = () => 5;

const bigger = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const total = sum * diff;
    return total
}


// const result = doubleIt(5);
// console.log(result);

// const result2 = add (50, 50);
// console.log(result2);

const result3 = give5();
console.log(result3)

const result4 = bigger(7, 5);
console.log(result4)