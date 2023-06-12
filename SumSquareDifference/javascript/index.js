"use strict"

$(window).on("load", function(){
    document.getElementById('genPass').addEventListener("click", function(){
        sumSquareDifference();
    });
});

function sumSquareDifference(){
    console.log(squareOfSum() - sumOfSquares());
};
function sumOfSquares(){
    var result = 0;
    for(let i = 1; i <= 100; i++){
        result += (i * i);
    }
    return result;
};
function squareOfSum(){
    var result = 0;
    for(let i = 1; i <= 100; i++){
        result += i;
    }
    return result * result;
};