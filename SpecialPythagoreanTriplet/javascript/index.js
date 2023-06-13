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

    for(let i = 1; i < 100; i++){
        let a = i;
        aSquared = Math.pow(i, 2);

        let v = 1;

        for(v; v < 100; v++){

            let b = v;
            bSquared = Math.pow(v, 2);
            let c = a + b;
            cSquared = aSquared * bSquared;

            console.log(cSquared);

            if(cSquared === 1024){
                let result = (a * b * c);
                console.log(result);
            } else if(a + b + c === 1000) {
                let result = (a * b * c);
                console.log(result);
            }
        }
    }

}