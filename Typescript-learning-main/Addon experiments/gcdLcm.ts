let a: number = 12;
let b: number = 18;
while (b != 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
let gcd = a;
let lcm = (a * b) / gcd;
console.log("GCD =", gcd);
console.log("LCM =", lcm);