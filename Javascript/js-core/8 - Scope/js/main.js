/*global console, alert*/

var myName = "Mohamed";

console.log(myName); // Globel Scope

function myNameFunc() {
    "user strict";

    var myName = "Ahmed"; 

    console.log(myName);

}
console.log(myName); // Globel Scope

myNameFunc();  // local Scope

console.log(myName); // Globel Scope



        /*  Globel && Local Scope Example   */ 

var x = 1;

function changeXto2()
{

    "use strict";

     var x = 2;
}
        console.log(x); // 1

        changeXto2();

        console.log(x); // 1



function changeXto3() 
{

    "use strict";

     x = 3;


}
        console.log(x); // 1

        changeXto3();

        console.log(x); // 3



var x = 1;

function testFunc() {

        "use strict";

        var calc = x + 2 ;

        console.log(calc);
}

testFunc();



function testParent() {

     "use strict";

        var myName = "Mohamed";
                
        console.log(myName);

   function testChild() {

        console.log(myName);

        function testGrand() {

                console.log(myName);
    }
  }
}

testParent();