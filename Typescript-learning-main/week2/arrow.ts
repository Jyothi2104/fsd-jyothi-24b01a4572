//function with return type
function sum(a: number, b: number, c: number): number {
    return a + b + c;
}
console.log(sum(10, 20, 30));

//arrow function
const addArrow = (a: number, b: number, c: number): number => {
    return a + b + c;
};
console.log(addArrow(10, 20, 30));

//arrow function with implicit return
const addShort = (a: number, b: number, c: number): number =>
    a + b + c;
console.log(addShort(10, 20, 30));