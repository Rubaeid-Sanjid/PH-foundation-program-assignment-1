// Question No. 1
function describeValue (params) {

    let textType = typeof params;

    const resultValue = params ? "truthy" : "falsy";
    return `${textType} | ${resultValue}`;
}

// Question No. 2
function getDayType (days){

    let dayCase = days.toLowerCase();

    switch (dayCase) {
        case "friday":
        case "saturday":
            return "Weekend";
            break;
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
            break;
        default:
            return "Invalid Day";
            break;
    }
}

// Question No. 3
function validateUsername(name) {

    if (name.length < 4) {
        return "Too Short";
    } 
    else if (name.includes(" ")) {
        return "No Space Allowed";
    } 
    else if (name.toLowerCase().includes("admin")) {
        return "Reserved Word";
    } 
    else {
        return "Available";
    }
}

// Question No. 4
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

// Question No. 5
const getChaseVerdict = (target, scored, ballsLeft) => {

    let verdict = "";

    const runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }

    if (ballsLeft <= 0) {
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } 
    else if (requiredRate <= 12) {
        verdict = "Tough";
    } 
    else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`
};
