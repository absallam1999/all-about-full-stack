/*globel console*/

/*

    Lesson Name      : show / hide Password
    Difficulty       : Very Easy
    What We Will Use : ifCondition, setAttribute, this, onclick()
    Author           : Mohamed Abd Elsallam Badr

*/

var input = document.getElementById('input'),

    button = document.getElementById('button');

button.onclick = function()
{   
    if(this.textContent === "Show Password")
    {
        input.setAttribute('type', 'text');

        this.textContent = 'Hide Password';
    }
    else
    {
    
        input.setAttribute('type', 'password');

        this.textContent = 'Show Password';
    }
};