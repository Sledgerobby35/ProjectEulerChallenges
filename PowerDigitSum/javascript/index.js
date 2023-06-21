"use strict";
$(window).on('load', function(){
    document.getElementById('powerDigitSum').addEventListener('click', function(){
        generatePowerDigitSum();
    })
})

function generatePowerDigitSum(){
    let result = 0;
    let num = BigInt(2 ** 1000).toString().split('');
    num.forEach(function(num){
        let number = parseInt(num);
        result += number;
    })
    console.log(result);
}