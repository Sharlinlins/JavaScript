function calculate(a, b) {
    const add = a+b;
    const sub = a-b;
    const mul = a*b;
    const div = a/b;

    return [add, sub, mul, div];
}

const [add, sub, mul, div] = calculate(5,8);

console.log("ADD = ", add);
console.log("SUB = ", sub);
console.log("MUL = ", mul);
console.log("DIV = ", div);