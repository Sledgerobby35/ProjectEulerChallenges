"use strict";

$(window).on("load", function(){
    document.getElementById("primeNumber").addEventListener("click", function(){
        generate10001stPrime(10);
    });
})

function generate10001stPrime(number){
    let result = [];
    for(let i = 1; result.length< 10002; i++){
        let potentNum = isPrime(i);
        if(potentNum === true){
            result.push(i);
        }
        else {
            console.log("Compound number")
        }
    }
    console.log(result);
    console.log(result[10001]);
}

function isPrime(number){
    let isPrime = true;
    if(number === 1){
        console.log("1 is neither prime nor composite");
    }
    else if (number > 1){
        for(let i = 2; i < number; i++){
            if(number % i == 0){
                isPrime = false;
                break;
            }  
        }
    }
    else {
        console.log("The number is not a prime number")
    }
    return isPrime;
}