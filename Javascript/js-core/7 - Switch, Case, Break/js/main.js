/*global console, alert, prompt*/

/* 

    Switch (expression) {

    case x:
        Code TO Exceute;
        break;

    case x:
        Code TO Exceute;
        break;

    case x:
        Code TO Exceute;
        break;

    default:
        Code To Exceute;
        break;

    }

*/

var season = prompt("What is Your Best Season ?");

switch(season){

    case "Winter":

        alert("Winter is Cold");

    break;

    case "Summer":

        alert("Summer is Hot");

    break;

    case "Autumn":
    case"Spring":

        alert("This Season is Amazing");

    break;

    default:

    alert("Enter Avalid Season Name");

    break;
}
