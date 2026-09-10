function getCngFare(distance, isNight = false, waitingMinutes = 0){
    let fare = 50;

    if(distance > 2){

        distance -= 2;

        fare += distance * 15;  
        
    }

    fare += waitingMinutes * 2;

    if (isNight) {
        let extra = fare * 0.2;
        
        fare += extra;
    }


    return fare;
}

console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(2));	
console.log(getCngFare(10));	
console.log(getCngFare(5, false, 10));	
console.log(getCngFare(5, true));	
console.log(getCngFare(5, true, 10));