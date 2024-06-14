// let user: string = "Arsalan Ahmed"

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

// class Person {
//     name: string = "Arsalan Ahmed"
//     age = 25
// }

// class Human extends Person{
//     name: string = "Musab Ahmed"
// }

// let h1 = new Human()
// console.log(h1.name)

// Abstract - abstract restrict and do not allow to create an object but abstract class can extend into another class.

// abstract class Person {
//     name: string = "Arsalan Ahmed"
//     age: number = 25
// }

// class Human extends Person{
//     email:string = "abc@xyz.com"
// }

// let p1 = new Human()
// console.log(p1)

// Get of Gater Function - gater function can not be call its already callable (p1.name) and its always return a value.

// class Person {
//     private _name: string = "Arsalan Ahmed"
//     get name(){
//         return this._name
//     }
// }

// let p1 = new Person()
// console.log(p1.name)


// Set Function - setter function must require 1 parameter and its not return back any value, how to call set function (p1.name = "Arsalan Ahmed").

class Person {
    private _name: string = "Arsalan Ahmed"
    get name(){
        return this._name
    }
    set name(vlaue:string){
        this._name = vlaue
    }
}

let p1 = new Person()
console.log("Get Function: ", p1.name)
p1.name = "Musab Ahmed"
console.log("Set Function: ", p1.name)

// Signature Or Function overloaded --> but its function name are same so it will work.

function abc(a:number, b:number):void
function abc(a:string, b:string):void
function abc(a:boolean, b:boolean):void

function abc(a:any, b:any):any{} // returns nothing

// function abc(a:any, b:any):any{
//     return a + b
// }

abc(2,4)
abc("a","b")
abc(true, false)
