"use strict";

$(window).on("load", function(){
    document.getElementById("genPalindrome").addEventListener("click", function(){
        generatePalindrome();
    })
})

function generatePalindrome(){
    let i = 99;
    let v = 90;

    var result = [];

    for(v; v < i; v++){
        let checkNum = v * i;
        var check = checkNum.toString().split('').reverse();
        if(check.reverse() === checkNum.toString().split('')){
            console.log(result);
            console.log(check.toString().split(''));
            continue;
        } else {
            result.push(checkNum);
            console.log(result);
        }
    }
}