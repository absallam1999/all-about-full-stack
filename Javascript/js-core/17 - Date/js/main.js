/*globel console, alert */


    // =============================== [:[:[:[: Part One :]:]:]:] =============================== //

/*

    [0] new Date();                 // Print Current Date & Time
    [1] new Date(MillSeconds);     // Print Millseconds From UTC 1 Jan 1970 00:00:00
    [2] new Date(Date String)     // Can Add Date String
    [3] new Date(Year, Month , Day , Hour , Minutes , Seconds , Millseconds)
*/


    // [0] new Date Example =>
    var theDate = new Date();

    console.log(theDate);


    // [1] new Date(MillSeconds) Example =>
    var theDate = new Date(10000) // newDate(10000m.s = 10s)

    console.log(theDate);


    // [2] new Date(Date String) Example =>
    var theDate = new Date("January 28,1999 12:20:05");

    console.log(theDate);


    // [3] new Date(7 Arguments) Example =>

    var theDate = new Date(1999 , 0 , 28 , 12 , 20 , 05);   // Months Start with [0]

    console.log(theDate);






    // =============================== [:[:[:[: Part Two :]:]:]:] =============================== //

/*

    Date Format :

    [0] Full Format         
      [1] Long Format
        [2] Short Format
          [3] Iso Format        International Standaraization Organization [ YYYY-MM-DD hh:mm:ss TZD]

*/


    // [0] Full Format Example =>
    var theDate = new Date("January 28,1999 12:20:05:30");

    console.log(theDate);


    // [1] Long Format Example =>
    var theDate = new Date("Jan 28 1999 12:20:05");

    console.log(theDate);


    // [2] Short Format Example =>
    var theDate = new Date("1999/1/28 12:20:05");   // Month must be before Day

    console.log(theDate);


    // [3] ISO Format Example =>
    var theDate = new Date("1999-01-28 12:20:05+04:00");

    console.log(theDate);
    





    // =============================== [:[:[:[: Part Three :]:]:]:] =============================== //


/*

    [0] getDate()               // Day of The Month 1-31
    [1] getDay()               // Day of the Week 0-6 start at Sunday
    [2] getFullYear()         // Get The Full Year
    [3] getHours()           // Get Hours 0-59
    [4] getMinutes()        // Get Minutes 0-59
    [5] getSeconds()       // Get Seconds 0-59
    [6] getMilliSeconds   // Get MilliSeconds 0-999
    [7] getTime()        // Number of Milli Seconds From 1970 or Specific Date
    [8] getTimeZoneOffset() // Get Def Between UTC & Your Local Time In Minutes

*/

    // [0] getDate() Example =>
    var theDate = new Date("28 Jan 1999"),

        theDay = theDate.getDate();

    console.log(theDay);


    // [1] getDay() Example =>
    var theDate = new Date("28 Jan 1999"),

        theDay = theDate.getDay();

    console.log(theDay);


    // [2] getFullYear() Example =>
    var theDate = new Date("28 Jan 1999"),

        theYear = theDate.getFullYear();

    console.log(theYear);


    // [3] getHours() Example =>
    var theDate = new Date(),

        theHour = theDate.getHours();

    console.log(theHour);


    // [4] getMinutes() Example =>
    var theDate = new Date(),

        theMinutes = theDate.getMinutes();

    console.log(theMinutes);

    
    // [5] getSeconds() Example =>
    var theDate = new Date(),

        theSeconds = theDate.getSeconds();

    console.log(theSeconds);

    
    // [6] getMilliSeconds() Example =>
    var theDate = new Date(),

        theMilliSeconds = theDate.getMilliseconds();

    console.log(theMilliSeconds);


    // [7] getTime() Example =>
    var theDate = new Date(),

        theTime = theDate.getTime();

    console.log(theTime);


    // [8] getTimeZoneOffset() Example =>
    var theDate = new Date(),

        dateTest = theDate.getTimezoneOffset();

    console.log(dateTest);
    





    // =============================== [:[:[:[: Part Four :]:]:]:] =============================== //


/*

   [0] setDate ()               // Day (req)
   [1] setFullYear()           // Year (req), Month (opt), Day (opt)
   [2] setHours()             // Hours (req), Minutes (opt), Seconds (opt), MilliSeconds (opt)
   [3] setMinutes()          // Minutes(req), Seconds (opt), MilliSeconds (opt)
   [4] setSeconds()         // Seconds (req), MilliSeconds(opt)
   [5] setMilliSeconds()   // (600000) = 10 minutes
   [6] setMonth()         //  Month (req), Day (opt) 

*/


    
    // [0] setDate() Example =>
    var theDate = new Date("28 Jan 1999");

        theDate.setDate(30);

    console.log(theDate);


    // [1] setFullYear Example =>
    var theDate = new Date("28 Jan 1999");

        theDate.setFullYear(2000);

    console.log(theDate);


    // [2] setHours Example =>
    var theDate = new Date("28 Jan 1999");

        theDate.setHours(12);

    console.log(theDate);


    // [3] setMinutes() Example =>
    var theDate = new Date("28 Jan 1999");

        theDate.setMinutes(5);

    console.log(theDate);


    // [4] setSeconds() Example =>
    var theDate = new Date("28 Jan 1999");

        theDate.setSeconds(50);

    console.log(theDate);


    // [5] setMilliSeconds() Example =>
    var theDate = new Date("28 Jan 1999");

        theDate.setMilliseconds(60000);

    console.log(theDate);


    // [6] setMonth() Example =>
    var theDate = new Date("28 Jan 1999");

        theDate.setMonth(0);

    console.log(theDate);






    // =============================== [:[:[:[: Part Five :]:]:]:] =============================== //


/*

   [0] now()
   [1] parse()
   [2] toISOString()
   [3] toDateString()
   [4] toTimeString()
*/

// [0] now() Example =>
var theDate = new Date(),

    now = Date.now(),

    min = 1000 * 60,        //1000 = MilliSeconds || 60 = Minutes 

    hour = min * 60,

    day = hour * 24

    month = day * 30,

    year = month * 24;

// console.log(now);

console.log(Math.round(now / year));


// [1] Parse() Example =>
var myDate = Date.parse("28 Jan 1999 12:20:05");

console.log(Math.round(myDate / year));


// [2] .toISOString() Example =>
var theDate = new Date(),

    isoString = theDate.toISOString();

console.log(isoString);


// [3] .toDateString() Example =>
var theDate = new Date(),

    dateString = theDate.toDateString();

console.log(dateString);


// [4] .toTimeString() Example =>
var theDate = new Date(),

    timeString = theDate.toTimeString();

console.log(timeString);