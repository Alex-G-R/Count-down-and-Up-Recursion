function countDownAndUp(number) {
    console.log(number);
    if(number === 0){
        // Base case
        console.log("Base case")
        return;
    } else {
        // recursive case
        countDownAndUp(number - 1);
        console.log(number + " cout back");
    }
}

countDownAndUp(5);
/* Expected output

    5
    4
    3
    2
    1
    0
    Base case
    1 count back
    2 count back
    3 count back
    4 count back
    5 count back

*/