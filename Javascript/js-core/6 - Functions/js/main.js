/*global console, alert*/

    function calcMyAge(){

        "use strict";

        var amount = document.getElementById("Age").value,
            name = document.getElementById("Name").value,
            result = amount * 365,
            message = document.getElementById("calculate");

        if (amount === "" ){        // amount Can't Be Empty

            message.innerHTML = "This Field Must NOT Be Empty";

        }else if(isNaN(amount)){    // amount Can't Be String and letters

            message.innerHTML = "This Field Must Be Number";

        } else if(amount == "0"){   // amount Can't Be 0

            message.innerHTML = "This Field Must NOT Be 0";

        }else if(amount < 0){       // amount Can't Be Negative (-)

            message.innerHTML = "This Field Must Be Real Number"
        
        }else {                     // Else Output the Result

            message.innerHTML =" <br> Hello " + name + "<br> Your Age " + amount + " is Equal " + result + " Days";
        }

    }