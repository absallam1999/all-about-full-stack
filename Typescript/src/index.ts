let showMsg = true;

function showDetails(name: string, age: number, salary: number): string
{
    let test = 10.;
    
    if(showMsg)
    {
        return `Hello ${name} Your Age is ${age} Your Salary Is ${salary} , Variable Test is ${test}`;
    }

    return `No Data To Show`;
}

console.log(showDetails("Mohamed", 23, 50000));


// ====== Function with Default Parameters ====== //


function showData(name: string = "Unkown", age: number, country?: string)
{
    return `${name} - ${age} - ${country}`;
}

console.log(showData("Mohamed", 23));



// ====== Function with rest Parameters ====== //

function addAll(...nums: number[]): number
{
    let result = 0;

   //for(let i = 0; i < nums.length;  i++)
   // {
   //     result += nums[i];
   // }
    
    nums.forEach((num) => result += num );

    return result;
}

console.log(addAll(10, 20, 30, 100, 10.5, +true));



// ====== Anonymous Function & Arrow Function ====== //


const add = function(num1: number, num2: number): number
{
    return num1 + num2;
}
console.log(add(10, 20));


const addWithArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addWithArrow(10, 20));


// ====== Type Alias Advanced ====== //

type Buttons = {
    up: string,
    right: string,
    down: string,
    left: string
}

type Last = Buttons & {
    x: boolean
}

function getActions(btns: Last)
{
    console.log(`Action for button up is ${btns.up}`);
    console.log(`Action for button right is ${btns.right}`);
    console.log(`Action for button down is ${btns.down}`);
    console.log(`Action for button up left ${btns.left}`);
}
getActions({up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true});


// ======  Literal Type ====== //


type nums =  0| 1| -1;      // Type Alias

function compareNums(num1: number, num2: number): nums
{
    if(num1 === num2)
    {
        return 0;
    }
    else if(num1 > num2)
    {
        return 1;
    }
    else
    {
        return -1;
    }
}

console.log(compareNums(10, 10));   // 0
console.log(compareNums(10, 5));    // 1
console.log(compareNums(10, 20));   // -1

let theNumber: nums = 0; // will accept only (0 | 1| -1) form type (nums)



// ====== Type Annotations With Object ====== //

let myObject: {
    readonly username: string,
    id: number,
    hire: boolean,
    skills: {
        one: string,
        two: string
    }

} = {
    username: "Mohamed",
    id: 100,
    hire: true,
    skills: {
        one: "HTML",
        two: "CSS"
    }
};

// myObject.username = "Ahmed";
myObject.skills.one = "Python";

console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);



// ====== Interface Declaration ====== //

/*

    Some Nots with Interface

    - written with out (=) by interface kayword before => interface User {}
    - (?) mean that is an optianl property
    - with with (,) or (;) or without any thing ()
    - readonly before the property mean that you can't change it later

*/
interface User {
    id?: number,

    readonly username: string,

    country: string,

    // Normal Method 👇
    sayHello(): string,

    // Arrow Function Method 👇
    sayWelcome: () => string,

    // Normal Method with Parameter 👇
    getDouble(num: number): number
}

let userOne: User = {
    id: 100,
    username: "Mohamed",
    country: "Egypt",
    sayHello()
    {
        return`Hello ${this.username}`;
    },
    sayWelcome: () => 
    {     
        return `Welcome ${userOne.username}`;
    },
    getDouble(n)
    {
        return n * 2;
    }
}

console.log(userOne.id);
console.log(userOne.sayHello());
console.log(userOne.sayWelcome());
console.log(userOne.getDouble(2));
/*
console.log(userOne.id);
console.log(userOne.username);
console.log(userOne.country);


function getData(data: User)
{
    console.log(`Your Id is: ${data.id}`);
    console.log(`Your User Name is: ${data.username}`);
    console.log(`Your Country is: ${data.country}`);
}

getData({id: 200, username: "Ahmed", country: "KSA"});

*/


// ====== Class Type Annotations ====== //

class newUser {
    u: string;
    s: number;
    msg: () => string;
    constructor(username: string, salary: number) {
        this.u = username;
        this.s = salary;
        this.msg = function()
        {
            return `Hello ${this.u} Your Salary is ${this.s}`;
        }
    }
    sayMsg()
    {
        return `Hello ${this.u} Your Salary is ${this.s}`;
    }
}

let firstUser = new newUser("Mohamed", 60000);

console.log(firstUser.u);
console.log(firstUser.s);
console.log(firstUser.msg());
console.log(firstUser.sayMsg());


// ====== Generics Types ====== //

/* 

    Generics
    - Help Write A Reusable Code
    - Allow to Pass Type As A Parameter to Another Type
    - You Will Be Able to Deal with Multiple Types without Using ": Any Type"
    - We Can Create
    -- Generic Classes
    -- Generic Function
    -- Generic Methods
    -- Generic Interface

*/

function returnNumber(val: number): number
{
    return val;
}

function returnString(val: string): string
{
    return val;
}
function returnBoolean(val: boolean): boolean
{
    return val;
}

console.log(returnNumber(100));
console.log(returnString("Mohamed"));
console.log(returnBoolean(true));

// OR We Can Use 👇👇 instead

function returnAnyType(val: number | string | boolean): number | string | boolean
{
    return val;
}

console.log(returnAnyType(100));
console.log(returnAnyType("Mohamed"));
console.log(returnAnyType(true));

// OR We Can Use Generic Instead 👇

function returnAnyDataType<GenericType>(val: GenericType): GenericType      // We Can Use <T> instead of <GenericType>
{
    return val;
}

console.log(returnAnyDataType(100));        // OR We Can Declare DataType in input by Typing <dataType> 👇👇
console.log(returnAnyDataType<string>("Mohamed"));
console.log(returnAnyDataType<boolean>(true));
console.log(returnAnyDataType<number[]>([1, 2, 3]));

// Generic Type With Arrow Function

const genericTypeWithArrowSyntax = <T> ( val: T ): T => val;

console.log(genericTypeWithArrowSyntax(100));
console.log(genericTypeWithArrowSyntax<number>(100));
console.log(genericTypeWithArrowSyntax<string>("Mohamed"));


function testType<T>(val: T): string
{
    return `The Value is ${val} and the DataType is ${typeof val}`;
}
console.log(testType<number>(100));
console.log(testType<string>("Mohamed"));


// Generic Type With Multiply Types

function multiplyTypes<T , S>(valOne: T, valTwo: S): String
{
    return `The Fist Value is ${valOne} and Second Value is ${valTwo}`;
}
console.log(multiplyTypes<string, number>("Mohamed", 100));
console.log(multiplyTypes<string, boolean>("Ahmed", true));


// Generic With Classes

class User2020<T = string> {
    constructor(public newVal: T) {}
    show(msg: T): void
    {
        console.log(`${msg} - ${this.newVal}`);
    }
}
let newUserOne = new User2020<string>("Mohamed");
console.log(newUserOne.newVal);
newUserOne.show("Message");

let newUserTwo = new User2020<string | number>(100);
console.log(newUserTwo.newVal);
newUserTwo.show("Message");


// Generic With Interfaces

interface Book {
    itemType: string;
    title: string;
    isbn: number;
}

interface Game {
    itemType: string;
    title: string;
    style: string;
    price: number;
}

class Collection<T> {
    public data: T[] = [];
    add(item: T): void
    {
        this.data.push(item)
    }
}

let itemOne = new Collection<Book>();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 1550});
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 5541});
console.log(itemOne);

let itemTwo = new Collection<Game>();
itemTwo.add({ itemType: "Game", title: "GameOne", style: "Action" , price: 440});
console.log(itemTwo);