"use strict"

$(window).on("load", function(){
    document.getElementById('genPass').addEventListener("click", function(){
        multipleOf3And5();
    });
});

function multipleOf3And5(){
    var result = 0;
    for(let i = 0; i < 1000; i++){
        if(i % 3 === 0 || i % 5 === 0){
            result += i;
        }
    }
    console.log(result);
};