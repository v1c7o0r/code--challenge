function speedChecking (speed){
    const gaugeLimit = 70;
    const faultyPoints = 5 ;
    const highPoints = 12 ;
    if (speed <= gaugeLimit) {
        console.log ("Ok");
        return 0;
        }else{
            const pointsInFaulty = Math.floor((speed-gaugeLimit)/faultyPoints);
            console.log(`points:${pointsInFaulty}`);
            if (pointsInFaulty >=highPoints) {
                console.log("License suspended");
            }
            return pointsInFaulty;
        }
}
   
speedChecking(20)