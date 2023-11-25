/*global console, alert*/

            /* Part 1 */

var eventTest = document.getElementById("event-test");
 
/* onload, onclick, ondblclick */

window.onload = function() {
    eventTest.innerHTML = "Button Test "
}

function changeText() {
    eventTest.innerHTML = "Text From Java Script";
};

function changeText2() {
    eventTest.innerHTML = "Text when Twice Clicked";
}


    // Element.Event = Function () { // code }

    eventTest.onclick = function () {
        "use strict";
        // Code 
    }




            /* Part 2 */


 var myInput = document.getElementById("input"),

     myDiv = document.getElementById("result");

/* onkeyup, onkeydown, onkeypress */

myInput.onkeydown = function () { 
    "use strict";

    myDiv.innerHTML = myInput.value * 18;
};




            /* Part 3 */


var 
    myInput = document.getElementById("input"),
    myDiv = document.getElementById("result"),
    myCurrency = document.getElementById("currency");

myCurrency.onchange = function() {

    "use strict";

    myDiv.innerHTML = "Equal " + myInput.value * myCurrency.value + " Egyptian Pound" ;
}