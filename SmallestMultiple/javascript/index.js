"use strict";

$(window).on("load", function() {
    document.getElementById("genPass").addEventListener("click", function(){
        smallestMultiple();
    })
});

function smallestMultiple(){
    // var result = 2520;
    // for(let i = 1; i < 11; i++){
    //     console.log(result % i);
    // }

    var newResult = 0;
    // let rangeLow = 1;
    // let rangeHigh = 2525;
    // var i = rangeLow;
    // const restOf = i % 11 === 0 && i % 12 === 0 && i % 13 === 0 && i % 14 === 0 && i % 15 === 0 && i % 16 === 0 && i % 17 === 0 && i % 18 === 0 && i % 19 === 0 && i % 20 === 0;
    // const conditional = i % 1 === 0 && i % 2 === 0 && i % 3 === 0 && i % 4 === 0 && i % 5 === 0 && i % 6 === 0 && i % 7 === 0 && i % 8 === 0 && i % 9 === 0 && i % 10 === 0;
    // for(rangeLow; rangeLow < rangeHigh; rangeLow++){
    //     if(conditional && restOf){
    //         console.log(rangeLow);
    //         newResult = rangeLow;
    //         console.log(newResult);
    //         return newResult;
    //     } else if(rangeLow = rangeHigh) {
    //         rangeLow += 2525;
    //         rangeHigh += 2525;
    //         console.log(rangeLow + " Still Computing");
    //         continue;
    //     }
    //     else{
    //         continue;
    //     }
    // }
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