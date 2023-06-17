"use strict";

$(window).on("load", function(){
    document.getElementById('specialPythagorean').addEventListener('click', function(){
        generatePythagorean();
    })
})

function generatePythagorean(){
    //Pythagorean Formula = Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)
    var aSquared = 0;
    var bSquared = 0;
    var cSquared = 0;
    let finalResult = 0;
    //itializing 'i' element for the do/while... loop
    let i = 0;

    do{
        i++;
            for(let v = 0; v < 1000; v++){
                //intializing variables A and B
                let a = i;
                let b = v;

                //Setting variable values to use with Pythagorean formula
                aSquared = Math.pow(a, 2);
                bSquared = Math.pow(b, 2);

                //Initalizing C variable and setting logic to dertmine value
                cSquared = aSquared + bSquared;
                let c = Math.sqrt(cSquared);
                let result = a + b + c;

                if(result === 1000){
                    finalResult = a * b * c;
                    console.log(finalResult);
                    return;
                }
            }
    }
    while(finalResult === 0);
}