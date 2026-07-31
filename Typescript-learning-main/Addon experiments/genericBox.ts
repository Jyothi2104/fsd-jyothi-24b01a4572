class Box<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
    display() {
        console.log(this.value);
    }
}
let numBox = new Box<number>(100);
let strBox = new Box<string>("Jyothi");
let boolBox = new Box<boolean>(true);
numBox.display();
strBox.display();
boolBox.display();