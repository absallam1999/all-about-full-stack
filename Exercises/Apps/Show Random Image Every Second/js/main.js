/*

    Author           : Mohamed Abd Elsallam Badr

*/

var elements = document.getElementById('img'),

    imgs = ['imgs/1.jpg', 'imgs/2.jpg', 'imgs/3.jpg', 'imgs/4.jpg'];

function changeImage(elements, imgs)
{
    'use strict';

    setInterval(function(){
        
        var randomKey = Math.floor(Math.random() * imgs.length);
        
        elements.src = imgs[randomKey]; 

    }, 1000);
}

changeImage(elements, imgs);
