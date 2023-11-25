/*global console, alert*/

/* 
    var myPrice = 450

    Start With letters, UnderScore, $

    var = JavaScript Variable Keyword

    myPrice = Variable Name

    ( = ) Assignment Operator

    450 = Variable Value

*/

var mainPrice = 450,

    mySmallDiscount = 50,

    myMediumDiscount = 100,

    myBigDiscount = 250;

document.getElementById("price").innerHTML = mainPrice;

document.getElementById("product1").innerHTML = mainPrice * mySmallDiscount; // 450 * 50 = 22500

document.getEelementById("product2").innerHTML = mainPrice / myMediumDiscount; // 450 / 100 = 4.5

document.getElementById("product3").innerHTML = mainPrice - myBigDiscount; // 450 - 250 = 200
