let start: number = 13;
let end: number = 47;
console.log("Prime numbers are:");
for (let i = start; i <= end; i++) {
    let isPrime: boolean = true;

    if (i <= 1) {
        isPrime = false;
    } else {
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(i);
    }
}