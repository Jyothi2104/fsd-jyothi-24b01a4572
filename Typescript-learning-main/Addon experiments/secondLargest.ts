let arr = [12, 45, 8, 67, 34];
let largest = -Infinity;
let second = -Infinity;
for (let num of arr) {
    if (num > largest) {
        second = largest;
        largest = num;
    } else if (num > second && num != largest) {
        second = num;
    }
}
console.log("Second Largest =", second);