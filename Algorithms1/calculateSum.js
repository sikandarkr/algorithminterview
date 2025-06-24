function calculateSum(){

    let arr = [1,2,3,4,5,6,7,8,9];

    const sum = arr.reduce((acc,num)=>{
        return acc+num;
    },0)
    return sum;
};

console.log(calculateSum());