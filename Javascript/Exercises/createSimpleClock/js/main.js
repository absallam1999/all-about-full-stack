/*globel console*/

/*

    Lesson Name      : Create Simple Clock
    Difficulty       : Very Easy
    What We Will Use : new Date()
    Author           : Mohamed Abd Elsallam Badr

*/

function showTime()
{
    var now = new Date(),

        hours = now.getHours(),

        minutes = now.getMinutes(),

        seconds = now.getSeconds();

        if(hours < 10 && minutes < 10 && seconds < 10)
        {
            hours = "0" + hours;
                minutes = "0" + minutes;
                    seconds = "0" + seconds;
        }

    document.getElementById('clock').textContent = hours + ":" + minutes + ":" + seconds;

}

window.onload = function ()
{

    "use strict";

    setInterval(showTime, 1000);
}