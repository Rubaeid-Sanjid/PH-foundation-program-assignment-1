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

console.log(getDayType("Friday"));
console.log(getDayType("friday"));
console.log(getDayType("MONDAY"));
console.log(getDayType("Bandarban"));