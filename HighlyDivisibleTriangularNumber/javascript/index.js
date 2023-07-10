"use strict";
$(window).on('load', function(){
    document.getElementById('highlyDivisibleTriangularNumber').addEventListener('click', function(){
        generateHighlyDivisibleTriangularNumber();
    });
});

function generateHighlyDivisibleTriangularNumber(){
    let finalSequence = [];
    let input = 12300;
        do{
            let resultSequence = [];
            let num = factorialDigitSum(input);
            for(let i = 1; i <= num; i++){
                if(num % i === 0){
                    resultSequence.push(i);
                }
            }
            input++
            finalSequence = resultSequence;
        } while(finalSequence.length <= 500);
}

function factorialDigitSum(input){
    let result = 0;
    for(let i = input; i >= 0; i--){
        result += i;
    }
    console.log(result);
    return result;
}