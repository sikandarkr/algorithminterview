
// A pipe can fill a tank in 5 hours. How much of the tank is filled in 2 hours?

function tankFilledInTime(totalTime,timePassed){

    const totalTankFilled = timePassed/totalTime;

    return totalTankFilled;

}

const totalTime =5;
const timePassed = 2;
console.log(tankFilledInTime(totalTime, timePassed));