            // ================== Find Elements ================== //
/*

    [1] - document.getElementById()

*/

var myDiv = document.getElementById('test');

myDiv.innerHTML = 'Changed By JavaScript';


/*

    [2] - document.getElementsByTagName()

*/

var myElement = document.getElementsByTagName('p');

// myElement.innerHTML = 'Changed By JavaScript'; // Will NOT Changed
myElement[0].innerHTML = 'Changed By JavsScript'; // Will Change


/*

    [3] - document.getElementsByClassName()

*/

var className = document.getElementsByClassName('test');

className[1].innerHTML = 'Changed By JavaScript';


/*

    [4] - document.querySelectorAll()

*/

var querySelector = document.querySelectorAll('p.test');

querySelector[0].innerHTML = 'Changed By JavaScript';




            // ================== Find Elements ================== //

/*

    [1] - document.title

*/

var myDiv2 = document.getElementById('show');

myDiv2.innerHTML = document.title;


/*

   [2] - document.images

*/

console.log(document.images.length);
console.log(document.images[1].src);

for(i = 0; i < document.images.length; i++)
{
    document.write(document.images[i].src + '<br>');
}


/*

    [3] - document.forms

*/

console.log(document.forms[1].z1.value);


/*

    [4] - document.anchors  ||   [5] - document.links

*/
console.log(document.anchors.length);
console.log(document.links.length);



            // ============= Get/Set Element Content ============= //

/*

    innerText   // NOT STANDARD
    outerText   // NOT STANDARD
    innerHTML
    outerHTML
    textContent

    // Get HTML Content
    Element.innerHTML

    // Get Text Content
    Element.textContent

*/



            // ============= Get/Set Element Attribute ============= //

/*

    getAttribute('Attribute Name')
    setAttrribute('Attribute Name', 'Attribute Value')

*/


            // ============= Has/Remove Element Attribute ============= //

/*

    hasAttribute()
    removeAttribute()

*/

// var myImg = document.querySelector('img');
var myImg = document.images[6];

if(myImg.hasAttribute('alt'))
{
    console.log('Yes');
}
else
{
    console.log('No')
}


            // ============= ClassList Element ============= //

/*

    Element ClassList || Length, Item, Contains

*/

var myDiv = document.getElementById('main');

console.log(myDiv.classList);

// [1] classList Length
console.log(myDiv.classList.length);


// [2] classList Contains
if(myDiv.classList.contains('zero'))
{
    console.log('Yes Div Contain Class Zero');
}

// [3] classList Item
console.log(myDiv.classList.item(2));



/*

    Element ClassList || Add, Remove, Toggle

*/

var myButton = document.querySelector('button');

myButton.onclick = function()
{
    // [1] classList.Add
    myDiv.classList.add('js');  // or you can add more class by separeted them with comma ('js', 'css', 'html')

    // [2] classList.remove
    myDiv.classList.remove('cool'); // or you can remove more class by separeted them with comma ('cool', 'zero')

    // [3] classList.toggle
    myDiv.classList.toggle('zero');
};

var divTwo = document.getElementById('ourtext'),
    buttonTwo = document.getElementById('button');

buttonTwo.onclick = function()
{
    divTwo.classList.toggle('hidden');
};



            // ============= Children [ChildNodes] ============= //

/*

    [1] .children            => to get children Elements
    [2] .childElementCount   => to count childern Elements (or children.length)
    [3] .childNodes          => to count all the perant content

*/


/*

    [1] [first/last]Child           => to get first/last perant Content
    [2] [first/last]ElementChild    => to get first/last parent Element

*/




            // ============= Element Children [AppendChild] ============= //

/*

    appendChild

*/

var mainDiv = document.getElementById('main-div'),
    
    // Creat Div Element
    myNewElement = document.createElement('div'),

    // Creat Another Paragraph
    myNewP = document.createElement('p'),

    // Create Text Node
    myText = document.createTextNode('Hello From JavaScript');

// Append the Text to paragraph
myNewP.appendChild(myText);

// Append Paragraph To The New Element
myNewElement.appendChild(myNewP);

// Append The New Element to main Div
mainDiv.appendChild(myNewElement);


/*

    insertBefore

*/

mainDiv.insertBefore(myNewElement, mainDiv.childNodes[3]);


/*

    removeChild

*/

mainDiv.removeChild(mainDiv.firstElementChild);
