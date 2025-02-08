/*globel console*/

/*

    Lesson Name      : Create Countdowm Timer
    Difficulty       : Very Easy
    What We Will Use : setInterval(), clearInterval(), Math.floor()
    Author           : Mohamed Abd Elsallam Badr

*/

var secondPass,

    seconds = 119,

    countDiv = document.getElementById('countdown'),

    countdown = setInterval(function()
    {
        "use strict";
        secondPass();

    }, 1000);

function secondPass()
{
    "use strict";

    var minutes = Math.floor(seconds / 60),

        remseconds = seconds % 60;

        if(seconds > 0)
        {
            seconds = seconds - 1   //Decrease One Second Every 100 Millsecond
            
            if(seconds < 9)
            {
                remseconds = "0" + remseconds;
            }
            
            countDiv.innerHTML = minutes +  ":" + remseconds;
        }
        else
        {
            clearInterval(countdown);

             countDiv.innerHTML = "Done";
        }

}
