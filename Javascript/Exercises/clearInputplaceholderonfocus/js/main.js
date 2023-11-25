/*globel console*/

/*

    Lesson Name      : Clear Input Placeholder On Focus
    Difficulty       : Very Easy
    What We Will Use : onfocus, onblur, this
    Author           : Mohamed Abd Elsallam Badr

*/

var input = document.getElementById("input");

input.onfocus = function ()
{
    if(this.placeholder === "Type Your Name")
    {
        this.placeholder = "";
    }
};

input.onblur = function()
{

    if(this.placeholder === "")
    {
        this.placeholder = "Type Your Name";
    }
};