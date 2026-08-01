//Readonly & Static 
class Passport {
    readonly passportId: string;
    constructor(passportId: string) {
        this.passportId = passportId;
    }
    display(): void {
        console.log(this.passportId);
    }
}
//readonly and constructor for non static property
class Human{
public static readonly Mname: string = "Monkey";//cannot be accessed by constructo
public  readonly decade: number; 
constructor(num:number){
    this.decade= num;
}
}

//static property
class Circle {
    public static pi: number = 3.14159; 
}
console.log(Circle.pi); 
Circle.pi = 3.14; 
