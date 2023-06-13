"use strict";

$(window).on("load", function(){
    document.getElementById("genPalindrome").addEventListener("click", function(){
        generatePalindrome(999);
    })
})

function generatePalindrome(numberA){
    let v = 90;
    let result = [];

    for(numberA; numberA > 101; numberA--){
        for(let i = 998; i > 100; i--){
            let checkNum = i * numberA;
            let reverseNum = checkNum.toString().split('').reverse().join('');
            if(checkNum == reverseNum){
                result.push(checkNum);
                continue;
            } else {
                continue;
            }
        }
        if(numberA === 990){
            result.sort();
            console.log(result.pop());
            return;
        }
    }

    for(v; v < numberA; v++){
        let checkNum = v * numberA;
        let reverseCheck = checkNum.toString().split('').reverse().join('');
        if(checkNum == reverseCheck){
            console.log(checkNum);
            return;
        } else {
            console.log("Still Computing");
            continue;
        }
    }
}