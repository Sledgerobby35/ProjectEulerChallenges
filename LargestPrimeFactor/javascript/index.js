"use strict"

$(window).on("load", function(){
    document.getElementById("genLargest").addEventListener("click", function(){
        generateLargest(600851475143);
    })
});

function generateLargest(number){
    const factors = [];
    var divisor = 2;

    //do/while loop one lined
    while (number >= 2) {
        //if the remainder of number / divisor == 0. Add divisor to array number = number / divisor
        if (number % divisor == 0) {
          factors.push(divisor);
          number = number / divisor;
        } else {
          divisor++;
        }
      }
      console.log(factors);
      return factors;
};