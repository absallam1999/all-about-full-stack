/* global console, alert, prompt */



                /* Part One */ 
          // Convert To String //

/*

var myString = "I Love \"JavaScript\"";

console.log(myString);

console.log(typeof (myString));

console.log(myString.length);

*/


var myNumber = 100;

console.log(myNumber);

console.log(typeof (myNumber));

var myNewNumber = myNumber.toString(); // or => myNewNumber = string (myNewNumber);

console.log(myNewNumber);

console.log(typeof (myNewNumber));



                /* Part Two */ 
             // Locata A String //

/* 

    syntax : indexof ( Value, Start Position ) // Default = 0
    syntax : LastIndexOf ( Value, Starting Position ) // Default = 0
    syntax : search (Value);

*/

var myString = "I'm In Love With JavaScript",
    myWord = myString.indexOf("Love");

console.log(myWord);


var myString = "I'm In Love With JavaScript And In Love With PHP",
    myWord = myString.lastIndexOf("Love", 39);

console.log(myWord);


var myString = "I'm In Love With JavaScript And In Love With PHP",
    myWord = myString.search("Love"); // (\LOVE\i);     i = Regular Expression

console.log(myWord);




                /* Part Two */ 
         // Split And Extract String //


/*

    Split  : split( Separator, Limit )
    Slice  : slice( Start [ Required ] , End  [Optional] )
    SubStr : substr( Start, Length )
    SubString : substring ( Start [ Required ] , End [Optional] )

*/

var myMainString = "I-Love-JavaScript-And-JSON",
    mySplitString = myMainString.split("-", 2);

console.log(myMainString);

console.log(typeof (myMainString));

console.log(mySplitString);

console.log(typeof (mySplitString));





var myMainString = "I Love JavaScript And JSON",
    mySlicedString = myMainString.slice(7, 17); // slice(-3)    for last 3 Letters
   
console.log(myMainString);

console.log(typeof (myMainString));

console.log(mySlicedString);

console.log(typeof (mySlicedString));






var myString = "I Love JavaScript And JSON",
    mySubStr = myString.substr(7, 10);

console.log(myString);

console.log(typeof (myString));

console.log(mySubStr);

console.log(typeof (mySubStr));






var myString = "I Love JavaScript And JSON",
    mySubString = myString.substring(7, 17);

console.log(myString);

console.log(typeof (myString));

console.log(mySubString);

console.log(typeof (mySubString));








                /* Part Three */ 
           // Find And Replace //

/*

    charAt(index);
    charCodeAt(index); // UniCode charset
    replace(Value , New Value);

*/


var myString = "I Love JavaScript Too Much",

    myLength = myString.length,

    myChar = myString.charAt(7);    // myString.charAt(myString.length - 1);   for last Letter

console.log(myString);

console.log(myLength);

console.log(myChar)




var myString = "I Love JavaScript Too Much",

    myChar = myString.charCodeAt(myString.length - 1);

console.log(myString);

console.log(myChar);




var myString = "I Love JavaScript Too Much",

    myReplace = myString.replace("JavaScript" , "PHP");

console.log(myString);

console.log(myReplace);








                /* Part Four */ 
            // Concatenating //

/*

    String.fromCharCode(Num1, Num2, Num3);
    concat(String, String, String, String);

*/

var myMessage = String.fromCharCode(77, 111, 104, 97, 109, 101, 100);

console.log(myMessage);




var myMessage = "Hello I Love",

    myMessage2 = "PHP And JavaScript",

    myAll = myMessage.concat(" ", myMessage2 , " And Python");


// var myAllString = "Hello I Love".concat(" PHP And JavaScript " , "And Python");


console.log(myAll);







                /* Part Five */ 
            // Convert String Letters //


/*

    string.toLowerCase();
    string.toUpperCase();

*/

var myString = "I Love JavaScript",

    mySmallString = myString.toLowerCase();

console.log(myString);

console.log(mySmallString);





var myString = "I Love JavaScript",

    mySmallString = myString.toUpperCase();

console.log(myString);

console.log(mySmallString);










                /* Part Five */ 
            // Trim And Link //


// [0] => .trim()

var myString = "     Hello World!     ";

console.log(myString);

var newString = myString.trim();

console.log(newString);


// [1] => .link()

var myString = "Google",

    myLink = myString.link("https://www.google.com");

console.log("Go to Google By This Link => " + myLink);










                /* Part Six */ 
                //  Chain   //

var myNumber = 120,

    myString = myNumber.toString();

console.log(myNumber);

console.log(myString);

var myNewNumber = myString.replace(2, 3);

console.log(myNewNumber);

var myNewString = myNewNumber.split("");

console.log(myNewString);


var myNumber = 120,

    myString = myNumber.toString().replace(2, 3).split("");

console.log(myNumber);

console.log(myString);