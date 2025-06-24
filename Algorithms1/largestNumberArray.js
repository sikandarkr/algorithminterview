// function largestNumberArray(arr){
//    let largestNumber = 0;

//     for(let i=0;i<=arr.length; i++){
//         if(arr[i]>largestNumber){
//           largestNumber = arr[i];
//         }

//     }

//     return largestNumber;
          
// }
// console.log(largestNumberArray([1,2,5,3,6,9,10,0, 16,40, 20, 90]));                       


// Using builtin method


function GreatestNumber(arr){

    let num = Math.max(...arr);

    return num;
}

console.log(GreatestNumber([1,2,5,3,6,9,10,0, 16,40, 20, 90]));