add = () => {
    // return 10 + 20;
    console.log(10 + 20);
}
add();

const add1 = function addition(num1, num2) {
    return num1 + num2;
}

const add2 = function (num1, num2) {
    return num1 + num2;
}

const add3 = addition = (num1, num2) => {
    return num1 + num2;
}
console.log(`add 3 = ${add3(1, 2)}`);
const add4 = (num1, num2) => {
    return num1 + num2;
}
console.log(`add 4 = ${add4(2, 2)}`);
const add5 = (num1, num2) => num1 + num2;
console.log(`add 5 = ${add4(3, 2)}`);