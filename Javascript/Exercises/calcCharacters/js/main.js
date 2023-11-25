/*globel console*/

/*

    Lesson Name      : Count Letters and Numbers oninput
    Difficulty       : Very Easy
    What We Will Use : if, DOM
    Author           : Mohamed Abd Elsallam Badr

*/

var $count = document.getElementById("count"),
    $textarea = document.getElementById("text"),
    $maxLength = $textarea.getAttribute('maxlength');

$count.innerHTML = $maxLength;


$textarea.oninput = function()
{
    $count.innerHTML = $maxLength - this.value.length;

    if($count.innerHTML == 0)
    {
        $count.classList.add("red");
    }
    else
    {
        $count.classList.remove("red");
    }
};