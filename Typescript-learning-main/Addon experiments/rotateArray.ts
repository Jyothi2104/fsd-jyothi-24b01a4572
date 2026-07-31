let a1 = [1, 2, 3, 4, 5];
let n2 = 2;
let tem = [];
for (let i = n2; i < a1.length; i++) {
    tem.push(a1[i]);
}
for (let i = 0; i < n2; i++) {
    tem.push(a1[i]);
}
console.log(tem);