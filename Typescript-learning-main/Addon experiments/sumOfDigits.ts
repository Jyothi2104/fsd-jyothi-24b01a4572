let value: number = 12345;
let copy: number = value;
let digitSum: number = 0;

while (copy > 0) {
    let remainder: number = copy % 10;
    digitSum = digitSum + remainder;
    copy = Math.floor(copy / 10);
}

console.log("Sum of Digits =", digitSum);