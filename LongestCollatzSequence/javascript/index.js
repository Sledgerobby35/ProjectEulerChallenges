"use strict";
$(window).on('load', function(){
    document.getElementById('longestCollatzSequence').addEventListener('click', function(){
        generateLongestCollatzSequence();
    })
});

function generateLongestCollatzSequence(){
    let result = 0;
    let longestSequence = [];
    for(let i = 5; i < 1000000; i++){
        let currentSequence = [];
        currentSequence.push(i)
        let currentNumInSequence = collatzAlgorithm(i);
        currentSequence.push(currentNumInSequence);
        do {
            let nextNumInSequence = collatzAlgorithm(currentNumInSequence);
            currentSequence.push(nextNumInSequence);
            currentNumInSequence = nextNumInSequence;
        } while (currentNumInSequence != 1);
        longestSequence.push(currentSequence);
    };
    longestSequence.sort(function(a, b){return a.length - b.length})
    result = longestSequence.pop()[0];
    console.log(result);;
};

function collatzAlgorithm(input) {
    if(input % 2 == 0) {
        return input / 2;
    } else if(input % 2 != 0) {
        return (input * 3) + 1;
    };
};