// console.log('working');


function centuryFromYear(year) {

    var div = (year/ 100)
    console.log(div)
    
    if (year <= 100){
        console.log(1)
        // return (1)
    } else if (div / 1 === 0){
        console.log(div)
        // return (div)
    } else {
        console.log((Math.floor(div)) + 1)
        // return ((math.floor(div)) + 1)
    }
}

console.log(centuryFromYear(1900));
