/*globel console , alert */


                // Part one //

/*

    For Loop Syntax
    
    for ( Initialization; Condition; Final Expression ) {

        // Statement

    }

    Initialization: Excuted Befire The Loop Once
    Condition: Define The Condition To Run The Loop
    Final Expression: Executed Everytime The Code Run

*/

    var i;

    for (i = 1; i <= 10; i++ ) {

       console.log(i);

    }


    var friends = ["Ahmed", "Soha", "Sayed", "Mahmoud"];

    var x;

    for(x = 0; x < friends.length; x = x + 1 ) {

        console.log(friends[x]);

    }


    var i;

    for(i = 2; i <= 100; i = i + 2 ) {

        console.log(i);

    }


    var i = 0;

    for(;;)
    {
        if (i > 10)
        {
            break;
        }

        console.log(i);

        i++;
    }

    var x = 1;

    for(;;)
    {
        if(x > 10)
        {
            break;
        }

        console.log(x);

        x++;
    }







                // Part Two //
     // [:[:[:[: Loop For/In :]:]:]:] //

     var myCar = {

        colour:"White",
        type: "BMW",
        price:"50.000",
        model: "2022"

     };

     console.log(myCar.model);


/*

     For/In Syntax

     for ( Variable In Object ) {

        if ( object.hasOwnProperty(Variable) ) {

            // Statement
        }
     }


*/ 


    var prop;

    for (prop in myCar) {

        if(myCar.hasOwnProperty(prop)) {

            console.log(prop + ": " + myCar[prop]);
        }
    }


function genertateYears(start, End)
{
    "use strict";

    document.write("<select>");
    
    var years;
    
    for(years = start; years <= End; years = years + 1)
    {
        document.write("<option value=\" years\">" + years +"</option>");
    }
    document.write("</select>");
}

genertateYears(1900, 2022);