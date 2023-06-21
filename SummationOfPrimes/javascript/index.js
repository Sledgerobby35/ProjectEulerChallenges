"use strict";

//running code in stages to achieve desiered outcome
//logic seems to time out otherwise
//Find the sum of all primes under 2 million
//ran 4 times incrementing by 500 thousand
$(window).on('load', function(){
    document.getElementById('primesSummation').addEventListener('click', function(){
        let result1 = 9914236195;
        let result2 = 27636165828;
        let result3 = 44524041233;
        let result4 = 60839385666;
        let resultOf3 = result2 + result3 + result4;
        let finalResult = result1 + result2 + result3 + result4;
        let first500ThousandPrimesArr = generateSumOfPrimes(500000);
        console.log(result(first500ThousandPrimesArr), resultOf3);
        console.log(finalResult);
        result(generateSumOfPrimes(2000000, first500ThousandPrimesArr), resultOf3);
    })
})
function result(array, resultOf3){
    console.log(array);
    let result = 0;
    array.forEach(function(num){
        result += num;
    })
    console.log(result);
    console.log(resultOf3);
    return result;
}

function generateSumOfPrimes(num, first500ThousandPrimesArr){
    let resultArr = [];
    //loop over everynumber between 0 and num to find primes
    if(num === 500000){
        for(let i = 0; i < num; i++){
            if(isPrime(i) === true){
                resultArr.push(i);
            }
        }
    } 
    else if (num === 2000000){
        for(let i = 499980; i < num; i++){
            if(isPrime(i, first500ThousandPrimesArr) === true){
                resultArr.push(i);
            }
        }
    }
    else {
        console.log(`Can't Process`);
    }
    return resultArr;
}

function isPrime(number, first500ThousandPrimesArr){
    let isPrime = true;
    if(number === 1){
        isPrime = false;
    }
    else if(number > 500000){
        for(let i = 41358; i > first500ThousandPrimesArr.length - 41358; i--){
            if(number % first500ThousandPrimesArr[i] == 0){
                console.log(first500ThousandPrimesArr[i]);
                isPrime = false;
                break;
            }
        }
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
        isPrime = false;
    }
    return isPrime;
}