// function sumDigits(n){

//     if(n<10) return n;

//     return n%10+sumDigits(Math.floor(n/10));
// }

// console.log(sumDigits(123456));

// without recursion
function sumDigits(n){
 let sum =0;
    while(n>0){
        sum += n%10;
        n=Math.floor(n/10);

    }
    return sum;
}

console.log(sumDigits(1234));