/*global console, alert*/

/*
                    [:[:[:[ "Data Types" ]:]:]:] 

    Boolean: True, False
    Array:["facebook.com", "youtube.com", "google.com"]
    Object: {firstName: "Mohamed" , lastName: "Badr"}
    String: "Java Script"
    Number : 23
    Undefined
    Null
    NaN = Not a Number
    Symbol


*/


            /*  [0] Boolean  */


var mainPrice = 150,
    hasDiscount = true;

if (hasDiscount === true) {

    var mainPrice = 50;
    
}else {

    var mainPrice = 150;
}

document.getElementById("test").innerHTML = mainPrice;




            /*  [1] Array  */


var socialWebsites = ["facebook.com", "youtube.com", "google.com"];
document.getElementById("test").innerHTML = socialWebsites[2];




            /*  [2] Object  */


var myInfo = {firstName: "Mohamed", lastName: "Badr"};
document.getElementById("test").innerHTML = myInfo.firstName;




            /*  [3] String  */


var myName = "Mohamed badr \"Absallam\" ";
document.getElementById("test").innerHTML = myName;



            /*  [4] Number  */


var myAge = 23;
document.getElementById("test").innerHTML = myAge;



            /*  [5] Undefined  */


var myAge;
document.getElementById("test").innerHTML = myAge;