function findDuplicate(arr){

    let seen = {};
    const duplicate = [];


    for(let i=0;i<arr.length;i++){
        if(!seen[arr[i]]){
           seen[arr[i]] = 1;
        }
        else{
           seen[arr[i]] +=1;
           if(seen[arr[i]]===2){
            console.log("counter..", seen[arr[i]]);
            duplicate.push(arr[i])
           }
        }
    }
    return seen;
// return duplicate;

}

console.log(findDuplicate([1, 2, 3, 4, 2, 3, 5,2]));