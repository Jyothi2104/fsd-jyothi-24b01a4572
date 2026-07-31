// Check Prime Number

let num: number = 17;
let isPrime: boolean = true;
if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(" Prime Number");
} else {
    console.log("Not a Prime Number");
}