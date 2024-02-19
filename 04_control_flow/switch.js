/** Switch case statement (its helpful in redux)

Syntax :

switch (key) {
    case value:
        
        break;

    default:
        break;
}

*/

const month = 3;

switch (month) {
    case 1:
        console.log("January");        
        break;
    case 2:
        console.log("February");        
        break;
    case 3:
        console.log("March");        
        break;
    case 4:
        console.log("April");        
        break;
    case 5:
        console.log("May");        
        break;
    case 6:
        console.log("Jun");        
        break;

    default:
        console.log("Invalid");
        break;
}

//Note: if 'break' is not present in switch statement then it will display all switch cases in switch statement except default cases.


const day = "sun day";

switch (day) {
    case "sun day":
        console.log("Sun Day");        
        break;
    case "mon day":
        console.log("Mon Day");        
        break;
    case "tues day":
        console.log("Tues Day");        
        break;
    case "thurs day":
        console.log("Thurs Day");        
        break;
    default:
        console.log("Invalid Data");
}