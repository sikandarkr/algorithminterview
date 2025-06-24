function fastPower(base, power){

    if(power==0){
      return 1;
    }

    let half = fastPower(base, Math.floor(power / 2));

    return power%2===0?half*half:base*half*half;

}

console.log(fastPower(2, 5));