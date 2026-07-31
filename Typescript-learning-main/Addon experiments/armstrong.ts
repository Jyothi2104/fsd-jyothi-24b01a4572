let numb: number = 153;
let originalNum: number = numb;
let sum: number = 0;

while (numb > 0) {
    let r = numb % 10;
    sum = sum + (r * r * r);
    numb = Math.floor(numb / 10);
}

if (sum === originalNum) {
    console.log(originalNum + " is an Armstrong Number");
} else {
    console.log(originalNum + " is Not an Armstrong Number");
}