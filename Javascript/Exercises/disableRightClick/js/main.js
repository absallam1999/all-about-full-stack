/*globel console*/

/*

    Lesson Name      : Disable Right Click
    Difficulty       : Very Easy
    What We Will Use : addEventLisener()
    Author           : Mohamed Abd Elsallam Badr

*/

document.addEventListener('contextmenu', function (e)
{
    "use strict";

    e.preventDefault();

    console.log("You Clicked Right Click on Mouse");
});