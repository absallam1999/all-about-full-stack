/*globel console*/

/*

    Lesson Name      : Changing WebSite Theme
    Difficulty       : Medium
    What We Will Use : loop and DOM
    Author           : Mohamed And Elsallam Badr
    
*/

//[6]
// Add Default Local Storage Class pn Body
document.body.classList.add(localStorage.getItem("page-color") || "red");
// [0]
var element = document.querySelectorAll(".color-switcher li");
var classesList = [];

// [1]
// Loop on Elements
for(var i = 0; i < element.length; i++)
{
    // [2]
    // Get Classes List
    classesList.push(element[i].getAttribute("data-color"));
    element[i].addEventListener("click", function() 
    {
        // [3]
        // Remove All Old Classes
        document.body.classList.remove(...classesList);
        // [4]
        // Add Current Class from li Data Attribute
        document.body.classList.add(this.getAttribute("data-color"));
        // [5]
        // Add Data To Local Storage
        localStorage.setItem("page-color", this.getAttribute("data-color"));

    }, false);
}

console.log(classesList);
console.log(localStorage.getItem("page-color"));