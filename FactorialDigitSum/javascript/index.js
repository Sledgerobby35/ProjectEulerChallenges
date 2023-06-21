"use strict";
$(window).on('load', function(){
    document.getElementById('factorialDigitSum').addEventListener('click', function(){
        generateFactorialDigitSum();
    })
})

function generateFactorialDigitSum(){
    let result = 0;
    let parsedResult = 1n;
    for(let i = 100; i > 0; i--){
        parsedResult *= BigInt(i);
    }
    let num = parsedResult.toString().split('');
    num.forEach(function(num){
        let number = parseInt(num);
        result += number;
    })
    console.log(result);
}