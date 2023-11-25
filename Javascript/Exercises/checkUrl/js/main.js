/*globel console*/

/*

    Lesson Name      : Check if URL Hash Contain ( string )
    Difficulty       : Very Easy
    What We Will Use : window.location.hash, indexof,Substring
    Author           : Mohamed Abd Elsallam Badr

*/

 if(window.location.hash){
/*
    if(window.location.indexof("Mohamed") === 1)    // or  indexof("#Mohamed") === 0
    {
        console.log("There is Hash") 
    }
    //  or

    var hash = window.location.hash.substring(1);
    if(hash === "Mohamed") 
    {
        console.log("There is Hash");
    }
*/
    console.log("There is Hash");

 } else {
     console.log("bad There is no Hash");

 }