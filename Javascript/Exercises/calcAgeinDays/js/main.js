
var input = document.getElementById("input-field");

input.onkeyup = function () { 

        "use strict";

        var  
        myInput = input.value,
        calcAge = myInput * 365,
        result = document.getElementById("result");

        if (myInput == "0") {
            
            result.value = "لا يمكن حساب هذا الرقم";

       } else if(myInput == "" ) {
            
            result.value = "لا يمكن ان يكون فارغ";

       } else if (myInput >= 1000 ) {

            result.value= " لا يمكن ان تكون بهذا العمر";

        } else if (isNaN(myInput)) {

            result.value = " لا يمكن ان يكون هكذا";
            
        } else if (myInput <= 0.9) {

            result.value = "انتا هتستعبط يلا!"

        } else {

            result.value = "عمرك " + input.value + " عاما يساوى " + calcAge + " بـ الأيام ";
            
        }
    };
