/*globel console*/

/*

    Lesson Name      : Edit Text Live
    Difficulty       : Easy
    What We Will Use : onkeyup(), textContent
    Author           : Mohamed Abd Elsallam Badr

*/

var myTitle = document.getElementById("title"),

    myContent = document.getElementById("content"),

    myTitleLive = document.getElementById("title-live"),

    myContentLive = document.getElementById("content-live");


myTitle.onkeyup = function()
{
    "use strict";

    myTitleLive.textContent = this.value;
};

myContent.onkeyup = function()
{
    "use strict";

    myContentLive.textContent = this.value;
};