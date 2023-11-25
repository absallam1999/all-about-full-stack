/* globel console, alert */


            // ==============================[:[:[: Part One :]:]:]=================================== //


/* 

    [0] Syntax : Math.ceil(x)

*/

    var x = Math.ceil(4.4);     // Try Math.ceil(-4.4)  تقريب للرقم من فوق

    console.log(x);


            // ==============================[:[:[: Part Two :]:]:]=================================== //


/*

    [1] Syntax : Math.floor(x)

*/

    var x = Math.floor(4.4);    // Try Math.floor(-4.4)  تقريب للرقم من تحت

    console.log(x);


            // ==============================[:[:[: Part Three :]:]:]=================================== //


/*

    [2] Syntax : Math.round(x)

*/

    var x = Math.round(4.4);      // تقريب للرقم الطبيعى

    console.log(x);


            // ==============================[:[:[: Part Four :]:]:]=================================== //

/*

    [3]
    Syntax : Math.min(Val, Val, Val, Val)
    Syntax : Math.max(Val, Val, Val, Val)

*/

    // [0] Min Example =>
    var x = Math.min(10, 50, 100, -90, -120, 10.5);

    console.log(x);


    // [1] Max Example =>
    var x = Math.max(10, 50, 100, -90, -120, 10.5);

    console.log(x);


    // [2] Advanced Example =>
    var x = Math.min(10, 50, 100, -90, -120, 10.5);

    console.log(Math.ceil(Math.round(x)) + 10.5);


                // ==============================[:[:[: Part Five :]:]:]=================================== //

/*

    Syntax : Math.random(x)         // creat random Number form 0 to 9

*/

    var x = Math.random(),

        myEndPattern = 1000;

    console.log(Math.floor(( x * myEndPattern) + 1 ));