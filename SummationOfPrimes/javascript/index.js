"use strict";

$(window).on('load', function(){
    document.getElementById('primesSummation').addEventListener('click', function(){
        generateSumOfPrimes(2000000);
    })
})

function generateSumOfPrimes(num){
    let result = 0;
    var resultArr = []
    //loop over everynumber between 0 and num to find primes
    for(let i = 0; i < num; i++){
        if(isPrime(num) == true){
            console.log('Made It');
            resultArr.push(num);
            console.log(resultArr);
        }
    }
    console.log(resultArr);
    for(let i = 0; i < resultArr.length; i++){
        result += resultArr[i];
    }
    console.log(result);
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