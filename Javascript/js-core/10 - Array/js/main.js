/*global console, alert*/



                        /* Part One */

var friendOne = "Hassan",

    friendTwo = "Soha",

    friendThree = "Ahmed",

    friendFour = "Zahra",

    freindFive = "Hind";


var friends = new Array(); // Constractor Way

friends[0] = "Hassan";
friends[1] = "Soha";
friends[2] = "Ahmed";
friends[3] = "Zahra";
friends[4] = "Hind";

console.log(friends);

var friends = new Array("Hassan", "Soha", "Ahmed", "Zahra", "Hind");

console.log(friends);


var friends = new Array(
            "Hassan",
            "Soha",
            "Ahmed",
            "Zahra",
            "Hind"
);

console.log(friends);



var friends = []; // Literal Way

    friends[0] = "Hassan";
    friends[1] = "Soha";
    friends[2] = "Ahmed";
    friends[3] = "Zahra";
    friends[4] = "Hind";

console.log(friends);


var friends = ["Hassan", "Soha", "Ahmed", "Zahra", "Hind"];

console.log(friends);


var friends = [
        "Hassan", // 0 index - 1 lenght
        "Soha",   // 1 index - 2 lenght
        "Ahmed",  // 2 index - 3 lenght
        "Zahra", // 3 index -  4 lenght
        "Hind"   // 4 index -  5 lenght
];

console.log(friends[2]);

/*   var arrayName = ["Element1", "Element2", "Element3"];   */







                        /* Part Two */
             // [:[:[: Check if Array :]:]:]  //

 if (Array.isArray(friends)){   // Check if Array

    console.log("Good");
 
}else {

    console.log("Bad")

}

if (friends.constructor === Array ){    // Check if Array [ in anotherway ]

    console.log("Good");

} else {

    console.log("Bad");

}






                    /* Part Three */
                // [:[:[: length :]:]:]  //

var myVariable = "Hello JavaScript";
console.log(myVariable.length);

console.log(friends.length); //  [ get Array Length ]

friends.length = 2;     // [ Set Array Length ]
console.log(friends); 







                    /* Part Four */
         // [:[:[: Counvert To String :]:]:]  // 

// [0] .toString |.toLocaleString

var friends = ["Hassan", "Soha", "Ahmed", "Zahra", "Hind"];

console.log(friends); // This is Array
friends = friends.toString(); //Counvert it To String
console.log(friends); // String

var myDate = new Date(),

    string = myDate.toString(); // String Date

console.log(myDate);
console.log(string);

var myLocalDate = myDate.toLocaleString(); // Try : localeDateString

console.log(myLocalDate);



// [1] .Join()

var friends = ["Hassan", "Soha", "Ahmed", "Zahra", "Hind"];

friends = friends.join("|");

console.log(friends);






                    /* Part Five */
            // [:[:[: Adding Items :]:]:]  // 

// [0] Adding Items By Length

var friends = ["Hassan", "Soha", "Ahmed", "Zahra", "Hind"];

console.log(friends);

console.log(friends.length); //5

friends[friends.length] = "Mohamed";

console.log(friends.length); //6

console.log(friends);



// [1] Adding Items By .push()

var friends = ["Hassan", "Soha", "Ahmed", "Zahra", "Hind"];

console.log(friends);

friends.push("Nada"); // Last Item in the Array

console.log(friends);



// [2] Adding Items By .unshift()

var friends = ["Hassan", "Soha", "Ahmed", "Zahra", "Hind"];

friends.unshift("Nada"); // First Item in the Array

console.log(friends);




// [3] Adding Items By .splice()

// arrayName.splice(index, deleted Items , added item1 , added item2...)

var friends = ["Hassan", "Soha", "Ahmed", "Zahra", "Hind"];

friends.splice(2, 0 , "Ibrahim", "Ali", "Mohamed"); // Adding item with order

console.log(friends);







                    /* Part Six */
            // [:[:[: Remove Items :]:]:]  // 

// [0] Remove Items By .splice()

var friends = ["Hassan", "Soha", "Ahmed", "Zahra", "Hind"];

console.log(friends.length);

friends.splice(3, 2); // remove items with order

console.log(friends);

console.log(friends.length);



// [1] Remove Items By .pop()

var friends = ["Hassan", "Soha", "Ahmed", "Zahra", "Hind"];

friends.pop(); // remove last Item from Array

console.log(friends);

var lastItem = friends.pop(); // export last Item from Array with VAR

console.log(lastItem);



// [2] Remove Items By .shift()

var friends = ["Hassan", "Soha", "Ahmed", "Zahra", "Hind"];

friends.shift(); // remove first Item from Array

console.log(friends);








                    /* Part Seven */
            // [:[:[: Array Sort :]:]:]  // 

var friends = ["Hassan", "Soha", "Ahmed", "Zahra", "Hind"];

console.log(friends);

friends.sort(); // sort Array by Alphapet

console.log(friends);

friends.reverse(); // Reverse Array

console.log(friends);








                    /* Part Eight */
            // [:[:[: Slice && Concat  :]:]:]  // 

// [0] Select Items By .slice( Start , End)

var friends = ["Hassan", "Soha", "Ahmed", "Zahra", "Hind"];

console.log(friends);

var mySliceArray = friends.slice(2, 4); // For Normal Slice

console.log(mySliceArray);

var mySliceArray2 = friends.slice(-1 , -3) // For Reverse Slice

console.log(mySliceArray2);


// [2] Merg Arraies By .concat()

var friends = ["Hassan", "Soha", "Ahmed", "Zahra", "Hind"];

console.log(friends);

var workFriends = [ "Saleh", "Kamel", "Mostafa"],
    otherFriends = ["Ibrahim" , "Youssef" , "Rahma"];

var allFriends = friends.concat(workFriends, otherFriends);

console.log(allFriends);






                    /* Part Nine */
            // [:[:[: Search in Array :]:]:]  // 

// indexOf();

var friends = ["Hassan", "Soha", "Ahmed", "Zahra", "Hind"];

console.log(friends);

console.log(friends.indexOf("Soha"));



// lastIndexOf(); ( Starting Point , Ending Point )

var friends = ["Hassan", "Soha", "Ahmed", "Zahra", "Hind"];

console.log(friends.lastIndexOf("Ahmed", 3));