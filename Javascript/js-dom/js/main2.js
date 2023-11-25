           // ============= Nodes [ Name, Type, Value] ============= //

// Node Name
var mainDiv = document.getElementById('main');

console.log(mainDiv.childNodes[0]);

console.log(mainDiv.childNodes[0].nodeName);

console.log(mainDiv.childNodes[1].nodeName);

console.log(mainDiv.childNodes[2].nodeName);

console.log(mainDiv.childNodes[3].nodeName);

console.log(mainDiv.childNodes[4].nodeName);

console.log(mainDiv.childNodes[5].nodeName);

console.log(mainDiv.childNodes[6].nodeName);


// TagName VS NodeName
console.log(mainDiv.childNodes[0].tagName);
console.log(mainDiv.childNodes[1].tagName);



// Node Value
console.log(mainDiv.childNodes[0].nodeValue);

console.log(mainDiv.childNodes[1].firstChild.nodeValue);

console.log(mainDiv.childNodes[2].nodeValue);

console.log(mainDiv.childNodes[3].firstChild.nodeValue);

console.log(mainDiv.childNodes[4].nodeValue);

console.log(mainDiv.childNodes[5].firstChild.nodeValue);

console.log(mainDiv.childNodes[6].nodeValue);


// Node Type

/*

1 => Element

2 => Attribute

3 => Text

8 => Comment

*/

console.log(mainDiv.childNodes[3].nodeType);

console.log(mainDiv.childNodes[3].firstChild.nodeType);




           // ============= Clone Node ============= //

/*

    cloneNode() => to copy element [with class, id, attribute] to new element
    cloneNode(true) => to copy the whole element [attribute and content] to new element 

*/

var cloneDiv = document.getElementById('clone'),

        newDiv = document.getElementById('new'),

           copyValue = cloneDiv.firstElementChild.cloneNode(true);

newDiv.appendChild(copyValue);


// to cut the element
cloneDiv.removeChild(cloneDiv.firstElementChild);