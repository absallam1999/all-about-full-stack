/*globel console*/

/*

    Lesson Name      : Type Writer Effect
    Difficulty       : Very Easy
    What We Will Use : setInterval, i++
    Author           : Mohamed Abd Elsallam Badr

*/

var myText = "Hello from Elzero Web School .. This is Type Writer Effects on Text",

    myButton = document.getElementById('button'),

    myParagraph = document.getElementById('type'),

    i = 0;

myButton.onclick = function()
{
    'use strict';

    var typeWriter = setInterval(function () {
        myParagraph.textContent += myText[i];
        
        i++;
        
        if(i > myText.length - 1)
        {
            clearInterval(typeWriter);
        }

    }, 100);

};