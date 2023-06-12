"use strict";

$(window).on("load", function(){
    document.getElementById('genPass').addEventListener("click", function(){
        sumOfEven(fibonacciSequence());
    });
});

function fibonacciSequence(){
    var curSeq = [1,2];
    let i = 1
    do {
        if(i === 1){
            curSeq.push(curSeq[i - 1] + curSeq[i]);
        }
        else { 
            curSeq.push(curSeq[i - 1] + curSeq[i]);
        }
        i++
    }
    while (curSeq[i] < 4000000);
    return curSeq;
};
function sumOfEven(array){
    var result = 0;
    for(let i = 0; i < array.length - 1; i++){
        if(array[i] % 2 === 0){
            result += array[i];
        }
    }
    console.log(result);
};