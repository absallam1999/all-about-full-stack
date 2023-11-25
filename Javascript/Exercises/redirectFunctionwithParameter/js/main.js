/*globel console*/

/*

    Lesson Name      : Redirect URL with Function
    Difficulty       : Very Easy
    What We Will Use : Function, Window.Location, onClick
    Author           : Mohamed Abd Elsallam Badr

*/

function redirectLink(url)
{
    'use strict';

    if(url !== '')
    {
        window.location = url; 
    }
}