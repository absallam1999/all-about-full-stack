/*
    Definig Object
    [1] Object Literal

*/

let user = {

    //Properties
    firstName: "Mohamed",
    lastName: "Badr",
    Age: 23,
    addresses: {
        eg: "Giza",
        usa: "California",
        ksa: "riyadh",
    },

    getMainAddress: function()
    {
        return ` Your Main Address is: ${user.addresses.eg}`;
    },
    

    //Methods
    getAgeInDays: function()
    {
        return `${user.firstName} Your Age in Days = ${user.Age * 365}`
    },
    getFullName: () =>`YourFullName: ${user.firstName} ${user.lastName}`,
    nameWithArrow: () => `YourFullName: ${user.firstName} ${user.lastName}`,

};

// Accesses Object Properties
console.log(user.firstName);             // Dot Notation
console.log(user["firstName"]);         // Bracket Notation

console.log(typeof user.firstName);    // String
console.log(typeof user.getFullName); // Function

// Accesses Object Mrthods
console.log(user.getAgeInDays());
console.log(user.getMainAddress());
console.log(user.getFullName());
console.log(user.nameWithArrow());



let Mohamed = 
{
    firstName: "Mohamed",
    lastName:"Badr",
    age:23,

    getFullNameinMohamed: () => `${Mohamed.firstName} Your Full Name is ${Mohamed.firstName} ${Mohamed.lastName} `,
};


console.log(Mohamed.getFullNameinMohamed());




                // =============== ** New Lesson ** =============== //


let myObj = 
{
    "One": 1,
    "Two!": 2,
};

console.log(myObj.One);

//console.log(myObj."one"); // Syntax Error
//console.log(myObj."Two!"); // Syntax Error

console.log(myObj["One"]);
console.log(myObj["Two!"]);


let myObj2 = 
{
    1: "One",
    2:"Two"
};

//console.log(myObj2.1); //Syntax Error
console.log(myObj2["1"]);
console.log(myObj2["2"]);


let myVariable = "name";

let myLastObj =
{
    name:"Mohamed"
};

console.log(myLastObj.name);

console.log(myLastObj.myVariable); // undefined

console.log(myLastObj[myVariable]); // **Important**
console.log(myLastObj["name"]);




                // =============== ** New Lesson ** =============== //

/*

    Definig Object
    [2] With New Keyword

*/

let Ahmed = new Object();

Ahmed.firstName = "Ahmed";
Ahmed.lastName = "Badr";
Ahmed["age"] = 23;
Ahmed.getFullName = () => `${Ahmed.firstName} Your Full Name: ${Ahmed.firstName} ${Ahmed.lastName}`;

Ahmed.getFullName2 = function()
{
    return `${Ahmed.firstName} Your Full Name: ${Ahmed.firstName} ${Ahmed.lastName} \n Your Age: ${Ahmed.age}`
};

console.log(Ahmed);
console.log(Ahmed.firstName);
console.log(Ahmed["lastName"]);
console.log(Ahmed.age);
console.log(Ahmed.getFullName());
console.log(Ahmed.getFullName2());




                // =============== ** New Lesson ** =============== //

/*

    Definig Object
    [3] With Object.Create()

*/

 // Main Object
let mainObj = {

    hasDiscount: true,
    showMsg: function()
    {
        return`You${this.hasDiscount  ? "" : " Don't"} Have Discount`;
    }
};

console.log(mainObj.hasDiscount);
console.log(mainObj.showMsg());


// Second Object
let otherObj = Object.create(mainObj);

otherObj.hasDiscount = false;
console.log(otherObj.hasDiscount);
console.log(otherObj.showMsg());
console.log(mainObj);


//last Object
let lastObject = Object.create(mainObj);

console.log(lastObject.hasDiscount);
console.log(lastObject.showMsg());





                // =============== ** New Lesson ** =============== //

/*

    Definig Object
    [4] With Object.assign()

*/

const src1 = {
    prop1: "Value1",
    prop2: "Value2",
    method1: function()
    {
        return`Method 1 `;
    },
};

const src2 = {
    prop3: "Value3",
    prop4: "Value4",
    method2: function()
    {
        return`Method 2`;
    },
};

const target = {
    prop5: "Value5",
};


Object.assign(target, src1 ,src2,{prop6: "Value6"});

console.log(target);

const myObject = Object.assign({}, target , {prop7: "Value7"});

console.log(myObject);
console.log(myObject.prop1);
console.log(myObject.prop2);
console.log(myObject.prop6);
console.log(myObject.method1());
console.log(myObject.method2());





                // =============== ** New Lesson ** =============== //

/*

    Delete Operator

*/


 const user1 = { name:"Mohamed" };

 console.log(user1);
 console.log(user1.name);

 delete user1;  // Delete Property Not Object
 delete user1.name;     // or user1["name"]

 console.log(user1);
 console.log(user1.name);




 const userName1 = "Mohamed";

console.log(userName1);
console.log(delete userName1);
console.log(userName1);



const freezedObj = Object.freeze({ age: 23 });

console.log(freezedObj);
console.log(freezedObj.age);

console.log(delete freezedObj.age);

console.log(freezedObj);
console.log(freezedObj.age);


const eObj = {};

Object.defineProperty(eObj , "a" , { value : 1, configurable: false});      // try configurable : true to delete Property
console.log(eObj);
console.log(eObj.a);

console.log(delete eObj.a);

console.log(eObj);
console.log(eObj.a);





                // =============== ** New Lesson ** =============== //

/*

    For .. In Loop
    Loop Through the Properties of the Object

*/

const mmm = {
    name: "Mohamed",
    country: "Egypt",
    age: 23,
};

let finalDate = "";

for (let info in mmm)
{
    //console.log(`The ${info} is => ${mmm[info]}`);
   // finalDate += `<div> The ${info} is => ${mmm[info]} </div>`;
   console.log(mmm[info]);
};

//console.log(mmm.country);
//console.log(mmm["country"]);

console.log(finalDate);

document.getElementById("info").innerHTML = finalDate;






                // =============== ** New Lesson ** =============== //

/*

 Constructor Function

*/

function Phone(serial, color, price)
{
    this.serial = serial;
    this.color = color;
    this.price = price - 100;
}

let phone1 = new Phone(123, "Red", 500);

console.log(phone1.serial);
console.log(phone1.color);
console.log(phone1.price);


let phone2 = new Phone(156, "Black", 500);

console.log(phone2.serial);
console.log(phone2.color);
console.log(phone2.price);



let phone3 = new Phone(167, "Silver", 500);

console.log(phone3.serial);
console.log(phone3.color);
console.log(phone3.price);

/*

const phone1 = {
    serial:123,
    color: "Red",
    price:500,
};

const phone2 = {
    serial:156,
    color: "Black",
    price:500,
};

const phone3 = {
    serial:167,
    color: "Silver",
    price:500,
};

*/


/*

    Constructor Function Advanced && (new) KeyWord

*/


function sayHelloTo(someone)
{
    return `Hello ${someone}`;
}

console.log(sayHelloTo("Mohamed"));     // Mohamed => Argument


function Machine(serial)
{
    console.log(this);  // (this) is the Created Object From The Constructor Function
    this.serial = `#${serial}`;
}

let newPhone1 = new Machine(123456);
let newPhone2 = new Machine(456789);
let newPhone3 = Machine(852147);

console.log(newPhone1.serial);
console.log(newPhone2.serial);
console.log(window.serial);

console.log(newPhone1 instanceof Machine);
console.log(newPhone2 instanceof Machine);
console.log(newPhone3 instanceof Machine);


console.log(newPhone1.constructor == Machine);
console.log(newPhone2.constructor == Machine);
//console.log(newPhone3.constructor == Machine);    // Error



/*

    Constructor Function (Dealing With Properties)

*/

function User(fName, lName, age, country)
{
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.country = country;
    this.fullName = function()
    {
        return `Full Name: ${this.fName} ${this.lName}`;
    }
}

let newuser1 = new User("Mohamed", "Badr", 23, "Egypt");
let newuser2 = new User("Ahmed", "Ali", 25, "KSA");

console.log(newuser1);
console.log(newuser2);
console.log(newuser2.country);
console.log(newuser2.fullName());
console.log(`Full Name: ${newuser2.fName} ${newuser2.lName}`);

/*

    Constructor Function Training

*/

function Data (name, email, age, showEmail)
{
    this.name = name;
    this.email = email;
    this.age = age;
    this.updateName = function(newName)
    {
        if( age >= 18 )
        {
            this.name = newName;
        }
        else
        {
            console.log(`You Can't Update Your Name because of your age Restriction`);
        }
    };
    this.showEmail = function()
    {
        if( showEmail == true )
        {
            return `Email is: ${this.email}`;
        }
        else
        {
            return `Data is Private`;
        }
    };
}

let user50 = new Data("Mohamed", "mm@mm.com", 15, true);

console.log(user50);

console.log(user50.name);

user50.updateName("Ahmed");

console.log(user50.name);

console.log(user50.showEmail());



/*

    Built in Constructors

*/


function Name(name)
{
    this.name = name;
    this.welcome = function ()
    {
        return `Welcome ${this.name}`;
    };
}

let user60 = new Name("Mohamed");
let user70 = new Name("Ahmed");

let obj1 = new Object({ a : 1 });
let obj2 = new Object({ b : 2 });
let obj3 = { c : 3 };

let num1 = new Number(1);
let num2 = new Number(2);
let num3 = 3;

let str1 = new String("Mohamed");
let str2 = new String("Ahmed");
let str3 = "Mahmoud";






                // =============== ** New Lesson ** =============== //

/*

    Prototype (Intro)

*/

function User20(name)
{
    this.name = name;
    this.welcome = function()
    {
        return `Welcome: ${this.name}`;
    };
}

let user40 = new User20("Mohamed");
let user45 = new User20("Ahmed");

console.log(User20.prototype);

function sayHello()
{
    return 1;
}
console.log(sayHello.prototype);

const arr = [1, 2, 3, 4, 5];

console.log(Array.prototype);

console.log(arr.reverse());


/*

    Prototype (Add to Prototype Chain)

*/

console.log(User20.prototype);
console.log(user40);

User20.prototype.addTitle = function()
{
    return `Mr: ${this.name}`;
};

console.log(Object.prototype);

Object.prototype.elzero = "ELZero Web School";

const myNewObject = { a: 1, b: 2 };


/*

    Prototype (Extend Constructor Features)

*/

let myString = "Mohamed";

console.log(String.prototype);

String.prototype.zFill = function (width)
{
    theResult = this;

    while(theResult.length < width)
    {
        theResult = `0${theResult}`;
    }

    return theResult.toString();
};

console.log("12".zFill(6));
console.log("123".zFill(6));
console.log("1234".zFill(6));
console.log("12345".zFill(6));
console.log("123456".zFill(6));

String.prototype.sayYouLoveMe = function()
{
    return `I Love You ${this}`;
};

console.log("Mohamed".sayYouLoveMe());


/*

    Prototype Chain
    [1] Every Object Has A Prototype
    [2] Prototype Chain Ends With Object.prototype
    [3] In JavaScript Function Is Object

*/

function User80(name)
{
    /*
        [1] Create Empty Object
        [2] Assign The New Object To (this) Context
        [3] New Object Created Prototype = Function Prototype
        this = {};
        this.__proto__ = user.__proto__
    */
    this.name = name;
    /*
        [4] Return the New Object
        return this
    */

   if(!(this instanceof User80))
   {
   // throw new Error("Must Be Called With New Keyword");
   // console.log("Error");
   }

   // ES6
   if(!(new.target))
   {
    //throw new Error("Must Be Called With New KeyWord");
    console.log("Error");
   }
}

let user5 = new User80("Mohamed");
let user6 = new User80("Ahmed");

console.log(User80.prototype);
console.log(user5);

let myArray = [1, 2, 3, 4];






                // =============== ** New Lesson ** =============== //

/*

    Class (Syntax & Introduction)

*/

class User60 {
    constructor(name,email)
    {
        this.name = name;
        this.email = email;
    }
    sayHello()
    {
        return `Hello ${this.name}`; 
    }
    showEmail()
    {
        return `Your Email is: ${this.email}`;
    }
}

let user61 = new User60("Mohamed", "mm@AA.com");
let user62 = new User60("Ahmed", "aa@mm.com");

console.log(user61);


/*

    Class Static Properties & Methods

*/

class User22 {

    // Static Properties
    static counter = 0;

    constructor(name, email, counter)
    {
        this.name= name;
        this.email = email;
        this.counter = counter;
        User22.counter++;
    }
    sayHello()
    {
        return `Hello ${this.name}`;
    }
    showEmail()
    {
        return `Your Email Is ${this.email}`;
    }

    // Static Method
    static countObject = function()
    {
        return `${this.counter} Object Created`;
    }
}

// let user23 =  User22("Mohamed", "mm@AA.com");   // TypeError: Class constructor User22 cannot be invoked without 'new'
let user24 = new User22("Mohamed", "mm@AA.com", 2);
let user25 = new User22("Ahmed", "mm@AA.com", 2);
let user26 = new User22("Mohamed", "mm@AA.com", 2);
let user27 = new User22("Mohamed", "mm@AA.com", 2);

console.log(typeof User22); // Function
console.log(User22 === User22.prototype.constructor);   // True

//console.log(user24.countObject());






                // =============== ** New Lesson ** =============== //

/*

    JavaScript Accessors (Get & Set)

*/

class User55 {
    constructor(name, email)
    {
        this.name = name;
        this.email = email;
    }
    sayHello()
    {
        return `Hello ${this.name}`;
    }
    get showInfo()
    {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
    changeName(newName)
    {
        this.name = newName;
    }
    set changeEmail(newEmail)
    {
        this.email = newEmail;
    }
}

let user28 = new User55("Mohamed", "mm@AAA.com");


console.log(user28.name);
console.log(user28.email);
console.log(user28.showInfo);


user28.changeName("Mahmoud");
console.log(user28.name);
console.log(user28.showInfo);


user28.changeEmail = "oooo@gmail.com";
console.log(user28.name);
console.log(user28.email);
console.log(user28.showInfo);






                // =============== ** New Lesson ** =============== //
/*

    Object Meta Data
    Writable
    enumberable
    configurable
    ============
    Object.defineProperty(Object, property, descriptor)

*/

const myObject1 = {
    a: 1,
    b: 2
};

Object.defineProperty(myObject1, "c", {
    writable: true,
    enumberable: true,
    configurable: true,
    value: 3,
});

console.log(myObject1);
console.log(myObject1.c);