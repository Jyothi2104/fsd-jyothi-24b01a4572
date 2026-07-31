let n: number = 153;
let original: number = n;
let add: number = 0;

while (n > 0) {
    let digit = n % 10;
    add = add + (digit * digit * digit);
    n = Math.floor(n / 10);
}

if (add === original) {
    console.log(original + " is an Armstrong Number");
} else {
    console.log(original + " is Not an Armstrong Number");
}