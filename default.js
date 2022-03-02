// If i dont use call parameter that time default value will work auto
function addNum (num1, num2 = 20) {
    // num2 = num2 || 20;
    return num1 + num2;
}
const total = addNum(10)
console.log(total)