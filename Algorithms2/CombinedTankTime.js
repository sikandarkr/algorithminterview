function CombinedTankTime(timeA, timeB){

    let rateA =1/timeA;
    let rateB = 1/timeB;


    let combinedRate = rateA+rateB;

    let totalTime = 1/combinedRate;


    return totalTime;

 
}

let pipeA = 4;

let pipeB = 6;

console.log(CombinedTankTime(pipeA, pipeB));







