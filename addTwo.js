function addTwoDigits(n) {
    var digits = (n).toString(10).split("").map(function(t){return parseInt(t)})

    console.log(digits);

    var sum = digits.reduce((a,b) => a +b, 0);

    console.log(sum);
    // var integers = parseInt(digits, 10);
    // console.log(integers);

    // var ans = digits.reduce(function (a, b){
    //     return a + b
    // }, 0);


    // console.log(ans);
    // console.log(digits);

    // function getSum(total, num){
    //     return total + num;
    // }

    // var sum = digits.reduce(getSum);
}

console.log(addTwoDigits(29));