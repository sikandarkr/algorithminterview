function greatesCommonDiviser(a,b){

    if(b===0){
        return a;
    }

   return greatesCommonDiviser(b,a%b)
}

console.log(greatesCommonDiviser(60, 48));

// Find GCD of an array of numbers: [24, 60, 36]

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  
  function gcdOfArray(arr) {
    return arr.reduce((acc, val) => gcd(acc, val));
  }
  
  console.log(gcdOfArray([24, 60, 36])); // Output: 12
  