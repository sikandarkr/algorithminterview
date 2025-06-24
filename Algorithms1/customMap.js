Array.prototype.customMap = function (){

    let result =[];

    for(let i=0; i<this.length; i++){

        result.push(this[i]*2)
    }

    return result;
}

console.log([1,2,3].customMap())