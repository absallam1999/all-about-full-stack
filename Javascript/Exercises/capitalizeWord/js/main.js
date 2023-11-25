/*globel console*/

/*

    Lesson Name      : Capitalize Letters
    Difficulty       : Medium
    What We Will Use : function,loop
    Author           : Mohamed Abd Elsallam Badr

*/

function capitalizeLetters(string)
{

    var stringLetters = string.split(' '),
        newArray = [];

    for (var i = 0; i < stringLetters.length; i++)
    {
        newArray.push(stringLetters[i].charAt(0).toUpperCase() + stringLetters[i].slice(1));
    }

    return newArray.join(" ");
}

console.log(capitalizeLetters("elzero Web School"));
console.log(capitalizeLetters("mohamed abd elsallam badr"));