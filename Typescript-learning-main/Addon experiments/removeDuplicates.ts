let str = "programming";
let r = "";
for (let c of str) {
    if (!r.includes(c)) {
        r = r + c;
    }
}

console.log("Result =", r);