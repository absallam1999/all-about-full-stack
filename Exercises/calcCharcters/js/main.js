/*globel console*/

/*

    Lesson Name          : Calculate Textarea Characters while Writing
    Lesson Level         : Very Easy
    What We Will Use     : onkey, this, textContent, if condition
    author               : Absallam

*/

var myTextArea = document.getElementById("my-text"),

    mySpan = document.getElementById("my-span");

myTextArea.onkeyup = function ()
{
    "use strict";

    mySpan.textContent = 100 - this.value.length;

    if(mySpan.textContent < 0)
    {
        mySpan.style.color = '#F00';
    }
    else
    {
        mySpan.style.color = '#000';
    }
};
