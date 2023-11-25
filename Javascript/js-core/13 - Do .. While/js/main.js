/*globel console, alert */

/*

    [0] While Syntax

    while (Condition) {

        Statement
    }

    
    [1] Do While Syntax

    do {

        statement

    } while(Condition)

*/



// [0] While Example ==>

function generateYears(Start, End) {

    "use strict";

    document.write("<select>");

    var i = Start;

    while( i <= End ) 
    {
        document.write("<option value=\"" + i + "\">" + i + "</option>");

        i++;
    }

    document.write("</select>");
}



// [1] Do While Example ==>

function generateNumbers (Start , End){

    "use strict";

    document.write("<select>");

    var i = Start;

    do
    {
        document.write("<option value=\"" + i  + "\" >" + i + "</option>");

        i++;
    }
    while(i <= End);

    document.write("</select>");
}
generateYears(1900 , 2022);

generateYears(2000, 2022);

generateYears(1400 , 1445 );

generateNumbers(1400,1445);

generateNumbers(2000 , 2022);

generateNumbers(1900 , 2022);


