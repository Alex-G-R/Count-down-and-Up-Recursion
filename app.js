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
