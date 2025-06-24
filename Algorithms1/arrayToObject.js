function arrayToObject(arr, key){

   return arr.reduce((acc,item)=>{

         acc[item[key]] = item;

         return acc;
    },{})
}

const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
];

console.log(arrayToObject(users, "id"));