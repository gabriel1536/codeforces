// problem https://codeforces.com/problemset/problem/1353/C
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}

function main() {
    const testCases = parseInt(readline());
    
    for(let i = 0; i < testCases; i++){
        const n = parseInt(readline());
        calculateDistance(n);
    }
}

function calculateDistance(n) {
    process.stdout.write(`${(n * (n-1)*(n+1))/3}\n`);  
}