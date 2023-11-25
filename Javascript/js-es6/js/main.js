/*

 --- VARIABLES المتغيرات ---

var     متغير    // JS   // var m = 10;
const   ثابت    // ES6  // const m = 10;
let     فليكن  // ES6  // let m = 10;


var
- Function Scope
- Can Be ReDeclare
- Undifined When Accessing a Variable Before It's Declared
- Creat Properties in the Window Object

let
- Block Scope
- Cnnot be ReDeclared
- ReferenceError When Accessing a Variable Before it's Declared
- Does Not Create Properties in the Window Object

const
- Block Scope
- Cannot be ReDeclared
- ReferenceError When Accessing a Variable Before it's Declared
- Does Not Create Properties in the Window Object


*/



                         // =============== New Lesson =============== //

/*

   --- Arrow Function ---
   Identifer => Expression

*/

// Regular Function With no Parameters
let regularTestOne = function()
{
    return 2;
}


// Arrow Function With no Parameters
let arrowTestOne = () => 2;
let arrowTestTwo = _ => 2;


// Regular Function With One Parameter
let regularTestTwo = function(param)
{
    return param * 2;
}


// Arrow Function With One Parameter
let arrowTestThree = (param) => param * 2;
let arrowTestFour = param => param * 2;
console.log(arrowTestFour(22));


// Regular Function With Multiple Parameters
let regularTestThree = function (param1, param2)
{
    return param1 * param2;
}
console.log(regularTestThree(10, 30));


// Arrow Function With Multiple Parameters
let arrowTestFive = (param1, param2) => param1 * param2;
console.log(arrowTestFive(10, 10));





                         // =============== New Lesson =============== //

/*

    This Value

*/

let test = function ()
{
    document.getElementById("show").innerHTML = this;
}

// Window Object Called The Function
window.onload = test;

// Button Called The Function
document.getElementById("button").addEventListener("click", test);


function Person()
{
    this.age = 0;

    setInterval(() => {

        this.age++;

        console.log(this.age);

    }, 1000);
}

//Person();



                         // =============== New Lesson =============== //

/*

    Template Literals [Template String]

*/ 

const otherLang = "PHP" ;

let oldWay = "Hi I'm Mohamed \n" + (otherLang === "Python" ? "I'm learning " + otherLang + "\n" : ".. \n") +
            "I'm learning JavaScript \n" +
            "I Have Dog and Cat";

let newWay = `Hi I'm Mohamed
${otherLang === "PHP" ? "I'm Learning " + otherLang : ".."}
I'm learning JavaScript 
I Have Dog and Cat`;

console.log(oldWay);
console.log(newWay);

// Example =>
let userName = "Mohamed",
    age = 23;


const myHtmlMarkup = `
    <div class="card"> 

    <h2 class="user"> ${userName} </h2>

    <span class="age"> ${age}</span>

    </div>
`;

//document.body.innerHTML = myHtmlMarkup;




                         // =============== New Lesson =============== //

/*

    Spread Operator ...

*/


let arrayOne = [1, 2, 3, 100, -20, -10, 500];

console.log(Math.min(...arrayOne));

let objectOne = 
{
    user: "Mohamed",
    age: "23",

};


console.log(objectOne);
// console.log(...objectOne);




                         // =============== New Lesson =============== //

/*

    Default Parameters

*/


// [0] Old Example =>
function showMyInfo(username, role, theme)
{
    username = username || "Default username";
    role = role || "Default Role";
    theme = theme || "Default Theme";

    return `Hello ${username} Your Role Is: ${role} WebsiteTheme is: ${theme}`;
}

console.log(showMyInfo("Mohamed", "Admin"));



// [1] New Example =>
function showMyInfoo(username = "Default username", role = "Default Role", theme = "Default Theme")
{
    return `Hello ${username} Your Role is: ${role} Websilt Theme is: ${theme}`;
}

console.log(showMyInfoo());
console.log(showMyInfoo("Mohamed"));
console.log(showMyInfoo("Mohamed", "Admin"));
console.log(showMyInfoo("Mohamed", "Admin", "Black"));




/*

    Rest Parameters ...

*/


function showMyInfoOo(...myParams)
{
    let myNumber = 0;

    for (let myParam of myParams) myNumber += myParam

    return myNumber;
}

console.log(showMyInfoOo(1));
console.log(showMyInfoOo(1, 2, 3));
console.log(showMyInfoOo(1, 2, 3, 10, 50, 100));





                         // =============== New Lesson =============== //

/*

    New String Methods :-

    [0] startsWith => String.startsWith   (Search String , Position => 0 )

    [1] endsWith  => String.endsWith         ( Search String , End Position = String.length)

    [2] inculdes => String.includes             ( Search String , Position => 0 )

    [3] repeat => String.repeat                    ( Count [How Many Repeat] )

*/

// [0] starts.With() Example =>
let x = "Video - Learn How To Learn";

console.log(x.startsWith("Learn" , 8));


// [1] ends.With() Example =>
console.log(x.endsWith("To" , x.length - 6)) // or 👇👇

console.log("Video - Learn How To" .length);

console.log(x.endsWith("To" , 20));


// [2] String.includes() Example =>
console.log(x.includes("Learn" , 8))


// [3] String.repeat() Example =>
console.log(x.repeat(4));


function repeatString ()
{
    let stringOne = "Video - Learn How To Learn";
    return stringOne.repeat(4);

}
console.log(repeatString());




                         // =============== New Lesson =============== //


/*

    Destructuring
    [0] Object
    [1] Array
    [2] Parameters

*/

// [0] Object Destructuring


let user ={

    first: "Mohamed",
    gender: "Male",
    Age: 23,
    city: "Cairo",
    Website: "Celopatra",
    theme: "red",
    langs: {
        html: "70%",
        css: "80%",
        js: "90%",
    }
};


/* ===== Old Way =====

     var u = user.first,
         g = user.gender,
         a = user.age;


         console.log(`my Name is: ${u} I'm ${g} My Age is: ${a}`);
*/

/*
let first = "Default",
    gender = "Default",
    Age = "Default";

({first, gender, Age} = user);
*/

let { first: theName, gender:  theGender, Age: theAge, theme: theTheme = "Default" } = user ;

console.log(`My Name is: ${theName} I'm ${theGender} My Age is: ${theAge} Your Theme is: ${theTheme}`);



let {html: firstLanguage, css: secondLanguage, js } = user.langs;

console.log(`${firstLanguage} ${secondLanguage} ${js}`);




// [1] Array Destructuring

const food = ["Burger", "Pizza", "Chicken", "Meat", "Rice"];

//const [one, , three, four] = food;

//console.log(`The Food I Love is: ${one}, ${three}, ${four}`);


let fruits = ["Burger", "Pizza", "Meat", ["Apple", "Banana", "Mango", ["Orange1", "Orange2"]]];

let [ one, two, three, [f1, f2, , [o1, o2]]] = fruits; // Skipped Mango

console.log(`I love is: ${one} , ${two}, ${three}. The Fruits I Love is: ${f1} , ${f2} , Orange I Love ${o1} , ${o2}`);


let myVariables = ["Apple", "Banana" , "Mango", "Orange" , "Kiwi" , "Rice"];

let [A1, A2, A3 , ...otherFruits] = myVariables;

console.log(`I Love the Fruits : ${A1} , ${A2} , ${A3} , ${otherFruits}`);


// ========== Swap Variables in Array ========== //

var book = "Video",

    video = "Book";

/* ===== Old Way =====

    // Copy First Variable Into Stash (stash => Variable Name)
    var stash = book;

    // Swapping Variables
    book = video;

    // Get Book Value From Stash
    video = stash;
*/

    // New Way to Swap :-
    [book, video] = [video, book];

    console.log(`the Book is: ${book} and The Video is: ${video}`);



// ========== Destructuring Mixed Content  ========== //

const newUser = {

    username: "Mohamed",
    city: "Cairo",
    skills: {
        html: "80%",
        css:"85%",
        js:{
            frameOne:"VueJs",
            frameTwo:"ReactJs",
            frameThree: "AngularJs"
        }
    }
};

/*
const{ username, city, skills:{ html, css, js:{frameOne:newOne, frameTwo:newTwo, frameThree:newThree} }}= newUser;

console.log(`My Name is ${username}, and I Live in: ${city}`);
console.log(`My Html Progress Is ${html}, and CSS Is ${css}`);
console.log(`I Have Khowledge in JS FrameWorks ${newOne}, ${newTwo}, ${newThree}`);
*/


// [2] Parameters Destructuring

const newUser2 = {

    username: "Mohamed",
    city: "Cairo",
    skills: {
        html: "80%",
        css:"85%",
        js:["VueJs", "ReactJs", "AngularJs"]
    }
};


/* ===== Old Way =====

function showMyDescrib(newUser2)
{
console.log(`My Name is: ${newUser2.username}, and I Live in: ${newUser2.city}`);
console.log(`My Html Progress Is: ${newUser2.skills.html}, and CSS Is: ${newUser2.skills.css}`);
console.log(`I Have Khowledge in JS FramWorks ${newUser2.skills.js[0]}, ${newUser2.skills.js[1]}, ${newUser2.skills.js[2]}`);
}

showMyDescrib(newUser2);
*/

function showMyDescrib({ username, city, skills:{ html, css, js: [newOne, newTwo, newThree] } })
{
    console.log(`My Name is: ${username}, and I Live in: ${city}`);
    console.log(`My Html Progress Is ${html}, and CSS Is ${css}`);
    console.log(`I Have Khowledge in JS FrameWorks ${newOne}, ${newTwo}, ${newThree}`);
}

showMyDescrib(newUser2);







                         // =============== New Lesson =============== //

/*

    Enhanced Object Literals
    [1] Property Value Shorthand
    [2] Method Shorthand
    [3] Computed Object Property Name

*/

// [1] Property Shorthand Example =>
const username = "Mohamed",
        website = "ElZero";

/* ==== Old Way ====
const newUserName = {username: username, website: website} 
// if value === var name you can use the new way 👇👇
*/
const newUserName = {
    username ,
    website
}
console.log(newUserName.username);





// [2] Method Shorthand Example =>
const newUserForMethod = {
    /* 
    ==== Old Way ====
    myMethod: function (param1)
    {
        return param1;
    }
    */

    myMethod (param1) 
    {
        return param1;
    }
}

console.log(newUserForMethod.myMethod('Hello From Parameter'));


// [3] Computed Objct Property Example =>

// Creat Normat Variable
const myVariable = "Key";

// Creat New Object
const myObject = {
    myProperty: "myValue",
    [myVariable]: "myValue"
};

/* ===== Old Way ===== */
// Add Dynamic Property and Assign A Value
//myObject ["Mohamed"] = "key";

console.log(myObject);







                         // =============== New Lesson =============== 


/*

    Set : new Set(Iterable)

*/

let myBooks = new Set();

let myArray = [1, 2, 3, 4];

console.log(myBooks);
console.log(typeof myBooks);
console.log(myArray);


let myarray = [1, 2, 3, 3, 4, 4,2];
let mybook = new Set(myarray);

console.log(mybook);
console.log(...mybook);
console.log([...mybook]);


/*

    Set Methods :-

    Variable.add('')
    Variable.delete('')
    Variable.clear()

*/

let ourBooks = new Set('Mohamed'); 

// new Set ().add('Mohamed').add('Ahmed').add('Ali')    or 👇👇

ourBooks.add("Mohamed");
ourBooks.delete("M");
ourBooks.clear();

console.log(ourBooks);
console.log(ourBooks.has("Mohamed".toLowerCase()));







                         // =============== New Lesson =============== 

/*

    Map : new Map()
    new Map ([ [], [], [], [] ])

*/

// Before ES6
var userVar = {};   //Empaty Object
userVar.username = "Mohamed";
userVar['website'] = "ElZero.org";
userVar["100"] = "String";
userVar[100] = "Number";
userVar["100"] = "StringLast";

console.log(userVar);
console.log(userVar['username']);
console.log(userVar.website);


// After ES6
let myMap = new Map();

// myMap.ser("10", "String").set(10, "Number").set(false, "Boolen");    or 👇👇

myMap.set("10" , "String");
myMap.set(10 , "Number");
myMap.set(false, "Boolen");
myMap.set({a:1, b:2}, "Object");
myMap.set(function doSomeThing() {}, "Function");

console.log(myMap);


let myNewMap = new Map([

    ["10", "String"],
    [10, "Number"],
    [false, "Boolen"],
    [{a:1, b:2}, "Object"],
    [function doSomeThing(){}, "Function"]
]);

console.log(myNewMap);
console.log(typeof myNewMap);


/*

    Map Methods :-
    [1] myMap.size      // to get Map length
    [2] myMap.get       // to Acsess Map Elements
    [3] myMap.has       // to check if Map has
    [4] myMap.delete    // to delete Map element
    [5]myMap.clear      // to clear Map Elements

*/

// [1] Map.size
console.log(`My Map Elements Count is: ${myNewMap.size}`);

// [2] MaP.get
console.log(`Using Get Method: ${myNewMap.get("10")}`);
console.log(`Using Get Method: ${myNewMap.get(10)}`);

// [3] Map.has
console.log(`Using Has Method: ${myNewMap.has(false)}`);

// [4] Map.delete
console.log(`Using Delete Method: ${myNewMap.delete(false)}`);

// Check Map Count
console.log(` My Mao Elements Count is: ${myNewMap.size}`);

// [5] Map.clear
myNewMap.clear();

// check Map Count
console.log(`My Map Count is: ${myNewMap.size}`);







                         // =============== New Lesson =============== 

/*

    Symbol()

*/

const mySymbol = Symbol();
console.log(typeof mySymbol); // Symbol Data Type


const mySymbolOne = Symbol("Testing");
const mySymbolTwo = Symbol("Testing");

console.log(mySymbolOne === mySymbolTwo); // False Cause Symbol() is a unique value

const myNewSymbol = Symbol();

const myNewObject = {
    username:"Mohamed Badr",
    website:"Elzero",
    [myNewSymbol]: "This is Hidden Iteration"
}

console.log(myNewObject);

for( let val of Object.entries(myNewObject))
{
    console.log(val);
}

console.log(Object.getOwnPropertyNames(myNewObject));

console.log(Object.keys(myNewObject));

console.log(Object.getOwnPropertySymbols(myNewObject));

console.log(JSON.stringify(myNewObject));




// Symbol.for()

const mySymbolOnee = Symbol.for("Testing");         // Symbol Not Exist, Creat it

const mySymbolTwoo = Symbol.for("Testing");        // Symbol is Exist, Return it

console.log( mySymbolOnee == mySymbolTwoo );


// Symbol.keyfor()          ==> To Get Symbol Content with for()

const mySymboloneee = Symbol.for("One");

const mySymbolTwoOo = Symbol.for("TwoOo");

console.log(Symbol.keyFor(mySymbolTwoOo));


// .description       ==> To Get Symbol Content

const myTestSymbol = Symbol("One");

console.log(myTestSymbol.description);







                         // =============== New Lesson =============== 

/*

    ForEach()

*/

const arr = ["A", "B", "C", "D", ,"F"];

    for (let x = 0; x < arr.length; x++)
    {
        console.log(`${x} ==> ${arr[x]}`);
    };


        console.log(`${"#".repeat(20)}`);


arr.forEach((el, i) => {

    console.log(`${i} ==> ${el}`);

});


        console.log(`${"#".repeat(20)}`);


let callbacks = 0;

arr.forEach((ele,i)=> {

    console.log(`${i} ==> ${ele}`);

    callbacks++;
});

console.log(callbacks);



        console.log(`${"#".repeat(20)}`);



 function makeTheLoop(element, index)
 {
    console.log(`${index} => ${element}`);
 }
arr.forEach(makeTheLoop);







                         // =============== New Lesson =============== 

/*

    Set vs WeakSet
    =========================
    
    - Set
    -- Contain Any Type Of Values
    -- Get Elements Count with .size
    -- ForEach Avialable To Iterate
    -- You Can Get It's Keys

    - WeakSet
    -- Contain Only Objects
    -- You Can't Use Size To Get Elements Count
    -- ForEach Not Available To Iterate
    -- You Can't Get Keys

*/


let mainObject = {A:1};

let mySet = new Set([ mainObject ]);

let objectOneeee = {B:2};
let objectTwoOo = {C:3};

mySet.add(objectOneeee);
mySet.add(objectTwoOo);
console.log(mySet);


console.log(mySet.has(objectOneeee));
console.log(mySet.has(objectTwoOo));


console.log(mySet.size);
console.log(mySet.keys());


mySet.delete(objectOneeee);
console.log(mySet.has(objectOneeee));


objectTwoOo = null;
console.log(mySet.has(objectTwoOo));


mySet.add("String");
mySet.add(23);
console.log(mySet);


mySet.forEach(ele => {
    console.log(ele);
});



    // ============ WeakSet ============  //

let mainTestObj = {A:1};

let myWeakSet = new WeakSet([mainTestObj]);

let testObj1 = {B:2};
let testObj2 = {C:3};

myWeakSet.add(testObj1);
myWeakSet.add(testObj2);

console.log(myWeakSet);
console.log(typeof myWeakSet);

console.log(myWeakSet.size);            // Undifined
// console.log(myWeakSet.keys());       Didn't Work

myWeakSet.delete(testObj1);
console.log(myWeakSet.has(testObj1));

testObj2 = null;
console.log(myWeakSet.has(testObj2));

console.log(myWeakSet);







                         // =============== New Lesson =============== 

/*

    Map vs WeakMap
    =========================
    
    - Map
    -- Contain Any Type Of Values
    -- Get Elements Count with .size
    -- ForEach Avialable To Iterate
    -- You Can Get It's Keys

    - WeakMap
    -- Contain Only Objects
    -- You Can't Use Size To Get Elements Count
    -- ForEach Not Available To Iterate
    -- You Can't Get Keys

*/

let testMap = new Map();

let testObject = {a:1};

testMap.set(testObject, "Test");
testMap.set("b", 2);
testMap.set("c", 3);
testMap.set(1, 15);

console.log(testMap);
console.log(testMap.get("c"));
console.log(testMap.get(testObject));

console.log(testMap.has("b"));
testMap.delete("b");
console.log(testMap.has("b"));

testObject = null;
console.log(testMap.get(testObject));

console.log(testMap.size);



    // ============ WeakMap ============  //

let myWeakMap = new WeakMap();

let testObjj = {a:1};
let testObjjj = {b:2};
myWeakMap.set(testObjj, "Test");
myWeakMap.set(testObjjj, "Test2");


console.log(myWeakMap);
console.log(myWeakMap.get(testObjj));
console.log(myWeakMap.get(testObjjj));

console.log(myWeakMap.has(testObjjj));
myWeakMap.delete(testObjjj);
console.log(myWeakMap.has(testObjjj));

testObjj = null;
console.log(myWeakMap.get(testObjj));

console.log(myWeakMap);

//console.log(myWeakMap.size);      => undefined







                         // =============== New Lesson =============== 

/*

    Symbol Iterator & For Loop

    Iterable => Object Has Symbol .iterator
    Iterator
    -- Object With Interface Designed For Iteration
    -- All Iterators Has Next() Method that RETURN Result Object
    -- The Result Object Has Two Props
        --- [1] Value => The NEXT Value
        --- [2] Done => Boolean Value To Tell if NEXT Value Exist or No 

    For ... Of Loop

    [1] Call Symbol.Iterator With NEXT Method
    [2] Save Inside Variable
    [3] Check For Done If It's True => Exit The Loop

*/


    let myArray1 = [1, 2, 3];
    let myName1 = "Mohamed";
    let myNumber1 = 1000;
    let myObject1 = {};

console.log(typeof (myArray1[Symbol.iterator]));
console.log(typeof(myName1[Symbol.iterator]));
console.log(typeof (myNumber1[Symbol.iterator]));
console.log(typeof (myObject1[Symbol.iterator]));

let theIterator = myName1[Symbol.iterator]();

console.log(theIterator);
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());

for (let char of myName1)
{
    console.log(char);
}
/*
for (let num of myNumber1)
{
    console.log(num);   // not Iterable
}

for (let a of myObject1)
{
    console.log(a);    // not Iterable
}
*/
for(let x of myArray1)
{
    console.log(x);
}



    // ============ Custom Iterable Object ============ //

const testoOobject = {
    name: "Mohamed",
    age: 23,
    country: "Egypt",
    favSkill: "JavaScript",
    [Symbol.iterator] ()
    {
        let step = 0;
        let properties = Object.keys(this);
        //console.log(properties);
        return {
            next() {
                return {
                    value:properties[step],     // for Object Key : testoOobject[properties[step]]
                    done: step++ === properties.length
                }
            }
        }
    }
}

for (let props of testoOobject)
{
    console.log(props);     //not Iterable
}







                         // =============== New Lesson =============== 

/*

    Generators 
                [:[:[: Part One :]:]:]

*/ 

function * generateTickets()
{
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let iterator = generateTickets();

console.log(typeof iterator);
console.log(iterator.next().value);

console.log(`${'#'.repeat(20)}`);
console.log(`We Will Do Something Before Yielding The Next Ticket`);

console.log(iterator.next().value);

console.log(`${'#'.repeat(20)}`);
console.log(`Function Stop Execution After Each Yield`);

console.log(iterator.next().value);

console.log(`${'#'.repeat(20)}`);
console.log(`Function Give You The Control to Yield `);

console.log(iterator.next().value);

console.log(`${'#'.repeat(20)}`);


console.log(iterator.next().done);

console.log(`${'#'.repeat(20)}`);

let myNumbers = [10, 20, 30, 40, 50];

function * generateNumbers(nums)
{
    for(let i = 0; i < nums.length; i++ )
    {
        yield nums[i];
    }
}

let generator = generateNumbers(myNumbers);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().done);

console.log(`${'#'.repeat(20)}`);

function* generateNums()
{
    yield * [10, 20, 30, 40, 50];
    yield 60;
}

let theGenerator = generateNums();

console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().done);



/*

    Generators 
                [:[:[: Part TwoOo :]:]:]

*/ 


/* 
=== Regular Function ===
function orderBook()
{
     window.alert("You Clicked On The Button To Order A Book");
     console.log("You Clicked On The Button To Order A Book");
    
     window.alert("You Added The Book To Cart");
     console.log("You Added The Book To Cart");
    
     window.alert("Payment Is Done");
     console.log("Payment Is Done");

}

let ordering = orderBook();

*/
/*
    function * orderBook()
    {
        window.alert("You Clicked On The Button To Order A Book");
        console.log("You Clicked On The Button To Order A Book");

        window.alert("You Added The Book To Cart");
        console.log("You Added The Book To Cart");

        window.alert("Payment Is Done");
        console.log("Payment Is Done");
    }

    let ordering = orderBook();
*/

function* mySkills()
{
    yield "Html";
    yield "Css";
    yield "JavaScript";
    yield "PHP";
    yield "Python";
}

let theSkills = mySkills();

for (let skill of theSkills)    // Loop on Iterator 
{
    console.log(skill);
}

for (let s of mySkills())      // Loop on Generator
{
    console.log(s);
}


        // ===== Test Return ===== //

function * sayNames()
{
    yield "Mohamed";
    yield "Ahmed";
    return "Ali";
    yield "Eman";

}

const theNames = sayNames();

console.log(theNames.next());
console.log(theNames.next());
console.log(theNames.next());
console.log(theNames.next());



/*

    Generators 
                [:[:[: Part Three :]:]:]

*/ 


function* createInfinite()
{
    let i = 0;
    
    while(true)
    {
        yield i++;
    }
}

let infiniteIterable = createInfinite();

console.log(infiniteIterable.next());
console.log(infiniteIterable.next());
console.log(infiniteIterable.next());
console.log(infiniteIterable.next());
console.log(infiniteIterable.next());


    for(let num of infiniteIterable)
    {
        if( num > 100 )
        {
            break;
        }

     console.log(num);

    }


/*

    Generators 
                [:[:[: Part Four :]:]:]

*/ 

 function * generateNumbers()
 {
    yield 1;
    yield 2;
    yield 3;
 }

 function * generateNames()
 {
    yield "Mohamed";
    yield "Ahmed";
    yield "Ali";
 }

 function * generateAll()
 {
    yield * generateNumbers();
    yield * generateNames();
 }

 let func = generateAll();

 console.log(func.next());
 console.log(func.next());
 console.log(func.next());
 console.log(func.next());
 console.log(func.next());
 console.log(func.next());
 console.log(func.next().done);

 





                         // =============== New Lesson =============== 

/*

    New Array Methods :-

    [0] Array.of()
    [1] Array.from()
    [2] Array.fill()

*/

 // [0] Array.of() Example =>
 let oldArray = Array(100);
 console.log(oldArray);
 console.log(oldArray.length);

 let newArray = Array.of(100);
 console.log(newArray);
 console.log(newArray.length);


 // [1] Array.from(Iterable, MapFunction, This) Example =>

 let myName = "Mohamed";
 let arrayOfLetters = Array.from(myName);

 console.log(myName);
 console.log(arrayOfLetters);

 let testNumbers = [10, 20, 30, 15, 18, 100, 60];

let NumbersMinusTen = Array.from(testNumbers, number => number - 10);

console.log(NumbersMinusTen);



// [2] Array.fill( Value to Fill, Start Default 0, End Default Array.length) Example =>
let theNumbers = [1, 10, 30, 70, 90];

theNumbers.fill(100);           // All Will Be 100
theNumbers.fill(100, 2);        // From index[2] to End
theNumbers.fill(100,0,3)        // From index[0] to index[3]

console.log(theNumbers);


/*

    New Array Methods :-

    [0] Array.find()
    [1] Array.findIndex()
    [2] Array.copyWithIn()

*/

// [0] Array.find() Example =>      Not Returning All Values

let myNums = [1, 10, 20, 30, 40];
let found = myNums.find(num => num > 10);
console.log(found);


// [1] Array.findIndex() Example =>

let myNums2 = [1, 20, 20, 30, 40];
let found2 = myNums2.findIndex(num => num > 10);
console.log(found2);


// [2] Array.copyWithIn(Target, Start Default 0, End Default Array.length) Example =>

let myLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
//myLetters.copyWithin(0);  // NoThing Will Happen
myLetters.copyWithin(0, 4, 6);
console.log(myLetters);
 





                         // =============== New Lesson =============== 

/*

    OOP => Classes
    [ Old & New Classes Syntax ]

*/

/* ========== Old Way ==========

function User(name,age)
{
    this.name = name;
    this.age = age;
}

console.log(User.prototype);

User.prototype.getInfo = function ()
{
    console.log(`Hello ${this.name} Your Age is ${this.age}`);
}

User.prototype.getDays = function()
{
    console.log(`You Lived Foe ${this.age * 365}`);
}

*/

// ========== New Way ========== //
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        console.log(`Hello ${this.name} Your Age is ${this.age}`);
    }
    getDays() {
        console.log(`You Lived For ${this.age * 365}`);
    }
}

console.log(User.prototype);

const firstUser = new User ("Mohamed", 23);

firstUser.getInfo();
firstUser.getDays();


class User2 {
    constructor(name,email)
    {
        this.name = name;
        this.email = email;
    }
    getInfoOo()
    {
        console.log(`Hello ${this.name} Your Email is ${this.email}`);
    }
}

class Admin extends User2 {
    constructor(name, email)
    {
        super(name, email);
    }
}

let firstAdmin = new Admin ("Mohamed", "mm@mm.com");
firstAdmin .getInfoOo();
 





                         // =============== New Lesson =============== 

/*

    Important Knowledge For Promises

    - Call Stack
    ** Mechanism To Make Interpreter Track Your Calls
    ** When You Call A Function Its Added To The Stack
    ** When Function Executed Its Removed From The Stack
    ** The Interpreter Continue Calling From The Last Point Reached

    - Web API
    ** Methods Available From Environment => Browser
    ** When Complete It Add Thjw Callback To The Cllbavk Queue

    - Event Loop
    ** Wait THe Callback To Finish
    ** Get Callback From Callback Queue
    ** Add Callback To Call Stack To Run 

    - CallBack Queue
*/

let i = 10;
let j = 20;
console.log(i + j);

function first()
{
    console.log("Hello First");
}

function second()
{
    first();
    console.log("Hello Second");
}

second();

console.log("One");
//window.setTimeout(() => console.log("Two"), 0);
console.log("Three");
 





                         // =============== New Lesson =============== 

/*

    Promise Intro :-

    -- Promise Is One Of The Best Features In ES6

    -- Promise Make It Easy To Support Asynchronous Programming

    -- Promise In JavaScript Is Like Promise in Real Life

    -- Promise Is Something That Will Happen in The Future

    -- Promise Is a Placeholder For a Future Value

    -- You Book a Cinema Ticket , You Have a Promise From Cinema Owner To Have a Seat
    
    -- You Got Task To Do , You Promised Your Boss To Do The Task
    
    -- You Ordered Food From Resturant
        [ Promise ] Is The Order Record
        [ The Futur Value ] Is The Food You Will Receive

    -- You Ordered iPhone From Souq Shop
        [ Promise ] Is The Order Record
        [ The Futue Value ] Is The iPhone You Will Receive

    -- Promise Is An Object 
    
    -- Promise Is The Event Compeletion Or Failure of Async Operation & Its Resulting Value
   
    -- JavaScript Use Callback For Asynchronous Programming
    ** [1] Function Called And Do The Task
    ** [2] Action Complete
    ** [3] Another Function Called
    ** [4] Action Complete
    ** [5] Anothor Function Called
   
    -- In Complex Cases => Every Call And Nesting Level [ http://callbackhell.com ]
   
    -- Promise Avoiding Callback Hell Or Pyramid Of Doom
   
    -- Promise Is One Of This States
    [1] Pending => Not FulFilled Or Rejected
    [2]  Fulfilled => Operation Succeeded
    [3]    Rejected => Operation Failed

*/

const myPromise = new Promise((resolve, reject) => 
{
   // console.log(`Welcome to my First Promise`);
   
   /*
    Asynchronous Operation
    FulFilled => resolve
    Reject => reject
   */

    let connect = true;
    if(connect)
    {
        resolve("Connection Established");
    }
    else
    {
        reject(Error("Connection Failed"));
    }
}).then(                // Way to call the Promise or 👇👇 (1629)
    (resolved) => console.log(resolved) ,
    (rejected) => console.log(rejected)
);


/*
 myPromise.then(        // Way to call the Promise or 👇👇 (1635)
    (resolved) => console.log(resolved),
    (rejected) => console.log(rejected)
);
*/


/*
const theResolved = resolved => console.log(resolved);
const theRejected = rejected => console.log(rejected);

myPromise.then(theResolved, theRejected);
*/

/*

    .Catch()

*/

const promise1 = new Promise((resolve, reject) => 
    {
        // Only One State Allowed
        // resolve("Resolved");
        // reject("Rejected"); // Ignored

        if( Math.random() * 100 < 90)
        {
            resolve("Good");
        }
        else
        {
            reject("Bad");
        }
});

promise1.then(
    (resolved) => console.log(resolved),
    (rejected) => console.log(rejected)
);

// promise1.then((resolved) => console.log(resolved)).catch((rejected) => console.log(rejected));       // Chain Code

// promise1.catch((rejected) => console.log(rejected));         or 👇👇

promise1.then(null, (rejected) => console.log(rejected));


/*
    firstRequest(function(response)
    {
        secondRequest(response, function(nextResponse)
        {
            thirdRequest(nextResponse, function(finalResponse)
            {
            console.log('Final Response: ' + finalResponse);

            }, failureCallback);

        }, failureCallback);

    }, failureCallback);


firstRequest()
    .then(function(response) {
        return secondRequest(response);

    }).then(function(nextResponse)
    {
        return thirdRequest(nextResponse);

    }).then(function(finalResponse)
    {
        console.log('Final Response:' + finalResponse);

    }).catch(failurCallback);



// ===== New Way ===== 👇👇
firstRequest()
.then((response) => secondRequest(response))
.then((nextResponse) => thirdRequest(nextResponse))
.then((finalResponse) => console.log('Final response:' + finalResponse))
.catch(failurCallback);


/*

    XMLHttpRequest :-


let myRequest = new XMLHttpRequest();

myRequest.onreadystatechange = function ()
{
    if (this.readyState === 4 && this.status === 200) 
    {
        /*

        Readt State => The Status Of The Request
        [0] Request Not Intialized
        [1] Server Connection Established
        [2] Request Recieved
        [3] Processing Request
        [4] Request Is Finished And Response Is Ready

        Status => Response Status Code
        [200] Ok
        [404] Not Found

        
        console.log(JSON.parse(this.responseText));
    }
};

// XMLHttpRequest .open(Method, URL, Async, User, Pass)
myRequest.open("GET", "Link" , true);

// Send The Request
myRequest.send();


/*
function getFirstRepo(apiURL)
{
    let firstRequest = new XMLHttpRequest();

    firstRequest.onreadystatechange = function ()
    {
        if(this.readyState === 4 && this.status === 200)
        {
            console.log(JSON.parse(this.resposeText)[0].name);
        }
    myRequest.open("GET", apiURL, true);
 
    firstRequest.send();
}

getFirstRepo("Link");



const getFirstRepo = (apiURL) => {

    return new Promise((resolve, reject) => {
        
        let firstRequest = new XMLHttpRequest();
        
        firstRequest.onload = function () 
        {
            if(this.readyState === 4 && this.status === 200)
            {
                resolve(JSON.parse(this.responseText)[0].name);
            }
            else
            {
                reject(Error(this.statusText));
            }
        };

        firstRequest.open("GET", apiURL, true);
        
        firstRequest.send();
    });
}
/*
getFirstRepo("Link").then(
    (result) => console.log(result),
    (reject) => console.log(reject)
);

getFirstRepo("Link").then(
    (result) =>
    {
        let newElement = document.createElement("div");
        let elementText = document.createTextNode(result);
        newElement.appendChild(elementText);
        document.body.appendChild(newElement);
    },(error) => console.log(error));
*/

// ===== New Way Ignoring The Pyramide Of Doom ===== 
const myFirstPromise = new Promise((resolve, reject) => {
    let thePosts = ["A", "B", "C", "D", "E", "F", "G", "H"];
        resolve(thePosts);
});

myFirstPromise
    .then((thePosts) => {

        console.log(`Total Number Of Postes is: ${thePosts.length} Posts`);

        return thePosts;

    }).then((thePosts) => {

        console.log(`The First Post Is: ${thePosts[0]}`);
        
        return thePosts;

    }).then((thePosts) => {

        console.log(`The Last Post Is: ${thePosts.length - 1} `);
    });




/*

    Promise All and race

*/

const ourFirstPromise = new Promise((resolve, reject) => {
    let connect = true;
    
    if(connect)
    {
        resolve("Our First Promise Resolved");
    }
    else
    {
        reject("Our First Promise Rejected");
    }
});

const ourSecondPromise = new Promise((resolve, reject) => {

    let setting = true;

    if(setting)
    {
        resolve("Our Second Promise Resolved");
    }
    else
    {
        reject("Our Second Promise Rejected");
    }
});

Promise.all([ourFirstPromise, ourSecondPromise])
.then((result) => {
    console.log(result);
});

Promise.race([ourFirstPromise, ourSecondPromise])
.then((result) => {
    console.log(result);
});