let a2 = [1, 2, 1, 3, 2, 1, 4];
let count: any = {};
for (let num of a2) {
    if (count[num]) {
        count[num]++;
    } else {
        count[num] = 1;
    }
}
console.log(count);