
var createdResult = document.getElementById("result");
    startValue = document.getElementById("start-value"),
    endValue = document.getElementById("end-value"),
    submitBtn = document.getElementById("submit-btn");

submitBtn.onclick = function () {

    "use strict";

    var startInput = startValue.value,
        endInput = endValue.value;

    if (startInput == "0" && endInput == "0")
    {

        createdResult.innerHTML = "No Created Loops";

    }
    else if(isNaN(startInput) && isNaN(endInput) || isNaN(startInput) || isNaN(endInput))
    {

        createdResult.innerHTML = "No Created Loops";

    }
    else if(startInput == "" && endInput == "" || startInput == "" || endInput == "")
    {
        
    }
    else if(startInput >= endInput)
    {
      /*
      document.write("<select>");

       var i = startInput;

       do 
       {
        document.write("<option value=\" " + i + " \">" + i + "</option>");

        i--;

       } while (i >= endInput);
      */ 
       
      createdResult.innerHTML = "No Created Loops";
    }
    else
    {
        document.write("<select>");

        var i;

        for(i = startInput; i <= endInput; i++)
        {

            document.write(" <option value=\" " + i + "\">" + i + "</option>");
        }

        document.write("</select>");
    }

};
