/*globel console*/

/*

    Lesson Name      : Hide Placeholder on input
    Difficulty       : Very Easy
    What We Will Use : setAttribute, getAttribute
    Author           : Mohamed Abd Elsallam Badr

*/

var myInput = document.getElementById('my-input');

myInput.onfocus = function()
{
    "use strict";

    // Store placeholder Attribute in Backup Attribute
    this.setAttribute('data-place', this.getAttribute('placeholder'));

    // Empty placeholder Attribute
    this.setAttribute('placeholder', '');

};


myInput.onblur = function()
{

    "use strict";

    // Get Placeholder Attribute from  Backup Attribute
    this.setAttribute('placeholder', this.getAttribute('data-place'));

    // Empty Backup Attribute
    this.setAttribute('data-place', '');
    
};