class container<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log("Value: " + this.value);
    }
}

let b1 = new container<number>(100);
b1.display();

let b2 = new container<string>("Hello");
b2.display();