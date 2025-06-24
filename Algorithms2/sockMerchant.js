// Count the number of matching pairs of socks
function sockMerchant(socks){

    let colorCount = {};
    let pairs = 0;

    for(let sock of socks){
        if(colorCount[sock]){
            colorCount[sock] +=1;
        }
        else{
            colorCount[sock] =1;
        }

    }

    for(let color in colorCount){

        pairs += Math.floor(colorCount[color]/2);
        
    }
    return pairs;
}

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]));