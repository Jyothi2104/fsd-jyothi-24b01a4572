let ar = [1, 2, 3, 5];
let n1 = 5;
let expectedSum = (n1 * (n1 + 1)) / 2;
let actualSum = 0;
for (let num of ar) {
    actualSum += num;
}
let missingNumber = expectedSum - actualSum;
console.log("Missing Number =", missingNumber);