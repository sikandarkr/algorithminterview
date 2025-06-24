// function arrayIntersection(arr, brr){
  
//     return arr.filter((item)=>brr.includes(item));

// }
// console.log(arrayIntersection([1, 2, 3,4,5,8], [2, 3, 4]));


// function arrayIntersection(arr, brr){
//     let result = [];

//     for(let i=0; i<arr.length; i++){
//        let found = false;

//        for(let j=0; j<brr.length; j++){
//          if(arr[i]==brr[j]){
//             result.push(arr[i])
//             console.log("Value found....", arr[i])
//          }

//        }
//     }
//     if(found){
//        console.log("Found...", found);
//     }
//    return result;
// }

// console.log(arrayIntersection([1, 2, 3], [2, 3, 4]));


function arrayIntersection(arr, brr){

    let result = [];

    for(let i=0; i<arr.length; i++){

        let found = false;

        for(let j=0; j<brr.length; j++){

            if(arr[i]==brr[j]){
                found = true;
            }
        }

        if(found){
            let alreadyAdded = false;

            for(let k=0; k<result.length; k++){
                if(result[k]===arr[i]){
                   alreadyAdded = true;
                   break;
                }
            }
            if(!alreadyAdded){

                result.push(arr[i]);
            }
        }


    }

    return result;



}



console.log(arrayIntersection([1, 2, 3], [2, 3, 4]));