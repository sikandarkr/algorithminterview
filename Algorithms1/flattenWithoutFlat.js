function flattenWithoutFlat(arr){

    return arr.reduce((acc,item)=>{
        if(Array.isArray(item)){
           acc = acc.concat(flattenWithoutFlat(item));
        }
        else{
           acc = acc.concat(item);
        }
        return acc;
    }, []);

}
console.log(flattenWithoutFlat([1, [2, [3, [4]]]]));