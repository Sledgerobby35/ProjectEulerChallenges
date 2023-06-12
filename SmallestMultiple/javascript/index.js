"use strict";

$(window).on("load", function(){
    document.getElementById("genPass").addEventListener("click", function(){
        smallestMultiple();
    })
});

function smallestMultiple(){
    let angeLowRay = 2525;
    for(let v = 1; v < angeLowRay; v++){
        const estRay = v % 11 === 0 && v % 12 === 0 && v % 13 === 0 && v % 14 === 0 && v % 15 === 0 && v % 16 === 0 && v % 17 === 0 && v % 18 === 0 && v % 19 === 0 && v % 20 === 0;
        const onditionalCay = v % 1 === 0 && v % 2 === 0 && v % 3 === 0 && v % 4 === 0 && v % 5 === 0 && v % 6 === 0 && v % 7 === 0 && v % 8 === 0 && v % 9 === 0 && v % 10 === 0;
        if(onditionalCay && estRay){
            console.log(v);
            return v;
        }
        else{
            angeLowRay += 2525;
            continue;
        }
    }
};