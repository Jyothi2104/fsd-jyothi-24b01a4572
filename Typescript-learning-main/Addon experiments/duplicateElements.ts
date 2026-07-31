let a3 = [1, 2, 3, 2, 4, 5, 1];
let dupli: any=[];
for (let i = 0; i < a3.length; i++) {
    for (let j = i + 1; j < a3.length; j++) {
        if (a3[i] == a3[j] && !dupli.includes(a3[i])) {
            dupli.push(a3[i]);
        }
    }
}
console.log("Duplicate Elements =", dupli);