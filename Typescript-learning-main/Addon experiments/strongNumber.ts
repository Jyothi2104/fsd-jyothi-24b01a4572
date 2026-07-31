let d: number = 145;
let temp: number = d;
let total: number = 0;

while (temp > 0) {
    let digit: number = temp % 10;
    let factorial: number = 1;

    for (let i = 1; i <= digit; i++) {
        factorial = factorial * i;
    }

    total = total + factorial;
    temp = Math.floor(temp / 10);
}

if (total === n) {
    console.log(n + " is a Strong Number");
} else {
    console.log(n + " is Not a Strong Number");
}