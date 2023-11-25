/*globel console, alert*/

    // ========================[:[:[: Part One :]:]:]======================== //

/* 

Regular Expression Syntax :

    /pattern/attributs
    
    Search | Replace | Match | Split | Test
    
    Attributes List
    [ i ] => Case Insensitive
    [ g ] => Globel Search
    [ m ] => Multi Line Seach

*/

var string = "I Love Elzero Web School",

    result = string.replace(/L/gi, "@");

console.log(result);



 // ========================[:[:[: Part Two :]:]:]======================== //


 /*

    Brakets Use :

    [..] Character
    [^..] Not Character
    [a-e] Range
    [A-Z] Range Capital Letters
    [a-z] Range Small Letters
    [A-e] Range All Capital Letters [A-Z] & Range small Letters until e [a-e]
    [0-9] Range Numbers
    [^0-9] Range Not Numbers
    [0-9a-z] Double Range
 
*/


    // [..] Character Example =>

    var string = "I Love Elzero Web School",

        result = string.replace(/[e]/gi, ".");

    console.log(result);


    // [^..] Not Character Example =>

    var string = "I Love Elzero Web School",

        result = string.replace(/[^e]/gi, ".");

    console.log(result);

    // [a-e] Range Example =>

    var string = "I Love Elzero Web school",

        result = string.replace(/[a-e]/gi, ".");

    console.log(result);

    // [A-Z] Range Example =>

        var string = "I Love Elzero Web school",

        result = string.replace(/[A-Z]/g, ".");

    console.log(result);

    // [A-e] Range Example =>

    var string = "ABC XYZ abc xyz",

        result = string.replace(/[A-e]/g, ".");

    console.log(result);

    // [a-z] Range Example =>

    var string = "I Love Elzero Web school",

    result = string.replace(/[a-z]/g, ".");

    console.log(result);

    // [0-9] Range Number Example =>

    var string = "I 2 Love 4 Elzero 6 Web 8 School 10",

        result = string.replace(/[0-9]/g, ".");

    console.log(result);

    // [^0-9] Range Not Number Example =>

    var string = "I Love Elzero Web School",

        result = string.replace(/[^0-9]/g, ".");
    
    console.log(result);

    // Double Range Example =>

    var string = "1234567890ABCDEFGHIJabcdefghij";

        result = string.replace(/[0-9A-Z]/g, ".");      // [^a-z]

    console.log(result);





    // ========================[:[:[: Part Three :]:]:]======================== //


/*

    Quantifiers
    
        [0] Letter+                  => Word Contain One Letter
        [1] Letter{Number}           => Word Contian Number of Letter
        [2] Letter{Number, Number}   => Word Contain Number or Number of Letter
        [3] Letter{Number,}          => Word Contain Number at least

*/

    // [0] LetterPlus Example =>

    var string = "I Love Elzero Web School",

        result = string.replace(/e+/gi, ".");

    console.log(result);


    // [1] Letter{Number} Example =>

    var string = "I Love Elzeeero Web School",

        result = string.replace(/e{3}/gi, ".");

    console.log(result);


    // [2] Letter{Number,Number} Example =>

    var string = "I Love Elzeero Weeeb School",

        result = string.replace(/e{2,3}/gi, ".");

    console.log(result);


    // [2] Letter{Number,Number} Example =>

    var string = "I Loveeeee Elzeero Weeeb School",

        result = string.replace(/e{2,}/gi, ".");

    console.log(result);