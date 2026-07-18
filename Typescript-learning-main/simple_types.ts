let val: any = 100;

console.log("Value:", val);

val = "Hii cutie";

console.log("Value:", val);

let tech: unknown = "TypeScript";
if (typeof tech === "string") {
    console.log("Length:", tech.length);
}


let numb: unknown = 25;

if (typeof numb === "number") {
    console.log("Add:", numb + numb);
}


function senten(name: string): void {
    console.log(name, "is a good girl");
}

senten("Jyothi");

function met(name1: string,name2: string):void{
    console.log(name1,"meets",name2, "on the", name2, "birthday.");
}
met("doremon","nobita");