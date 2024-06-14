// let user: string = "Arsalan Ahmed"
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Ternary Operator - ternary operators perform If & Else condition.
// user == "Arsalan Ahmed"? console.log("Hello Arsalan Ahmed") : console.log("Invalid User")
// && ==> Short Circuit - If condition is true code will execute after &&.
// user == "Arsalan Ahmed" && console.log("Hello Arsalan Ahmed")
// let user1: string[] = ["Arsalan Ahmed", "Musab Ahmed"]
// user && console.log(user)
// ! ==> exclamatory sign shows as condition (Not).
// !user1 && console.log(user1)
// Spread operator
// let arr: string[] = ["a","b","c"]
// let arr1: string[] = ["e","f","g"]
// let newArr: string[] = [...arr, ...arr1] // Spread operator merge two arrays and object in to one or you can add and remove elements or key value in it.
// console.log(newArr)
// let obj: object = {
//     name: "Arsalan",
//     age: 25
// }
// let obj2: object = {
//     ...obj,
//     city: "Karachi"
// }
// console.log(obj)
// console.log(obj2)
// Rest Operator - rest operator convert data into an array and its always written on last position.
// function abc(a:number,b:number,c:number,...rest:number[]): number{
//     console.log(rest)
//     // return a + b + c
//     return a+b+c+rest[0]
// }
// console.log(abc(1,2,3,4,5,6,7,8,9))
// Private property only allows within its class it will not work outside its class.
// its a convention private property start with _ example: (_name) but its upto you.
// class Person {
//     private _name:string = "Arsalan Ahmed"
//     getName(){
//         return this._name
//         // return this._name = "Musab Ahmed"
//     }
// }
// let p1:Person = new Person()
// console.log(p1.getName())
// console.log(p1 instanceof Person)
// Encapsulation
// Protected allow private property in extended class but still its private because its not allow their property outside its own and extended class.
// class Person {
//     protected _name:string = "Arsalan Ahmed"
//     age = 20
// }
// class Human extends Person{
//     getName(){
//         return this._name
//     }
// }
// let h1 = new Human()
// console.log(h1.getName())
// Polymorphism or Overwrite
var Person = /** @class */ (function () {
    function Person() {
        this.name = "Arsalan Ahmed";
        this.age = 25;
    }
    return Person;
}());
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Musab Ahmed";
        return _this;
    }
    return Human;
}(Person));
var h1 = new Human();
console.log(h1.name);
