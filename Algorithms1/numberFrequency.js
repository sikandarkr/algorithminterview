function numberFrequency(arr){

   return arr.reduce((acc, val)=>{
      
        acc[val] = (acc[val] || 0) + 1;

        return acc;
    },{})

}
console.log(numberFrequency([1, 2, 2, 3, 1, 1]));