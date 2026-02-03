function groupBy(arr){
    
    
    let group = {};
    
    for(let i=0; i<arr.length; i++){
       let type = arr[i].type;
       if(!group[type]){
           group[type] = [];
       }
       group[type].push(arr[i]);
    }
    return group;
    
}





let fruits = [{id:1,"name":"Mango", amount:"20kg",type:"fruit"},{id:2,"name":"orange", amount:"20kg", type:"fruit"},{id:3,"name":"tomato", amount:"20kg", type:"vegetable"},{id:4,"name":"potato", amount:"20kg", type:"vegetable"}];

console.log(groupBy(fruits));
