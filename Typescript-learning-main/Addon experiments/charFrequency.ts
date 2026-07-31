let s = "programming";
let f: any = {};
for (let c of s) {
    if (f[c]) {
        f[c]++;
    } else {
        f[c] = 1;
    }
}
console.log(f);