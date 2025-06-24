function isObjEmpty(Obj){
   return Object.keys(Obj).length==0;
    
}

console.log(isObjEmpty({ a: 1 }));
console.log(isObjEmpty({}));