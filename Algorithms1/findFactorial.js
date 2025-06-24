function finFactorial(number){

    if(number==0) return 1

    return number*finFactorial(number-1);
}

console.log(finFactorial(4));