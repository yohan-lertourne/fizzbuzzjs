function fizzbuzz (number) {
    let result = "";
    if (number % 3 === 0) {
        result = "fizz";
    }
    else if (number % 5 === 0){
        result = "buzz";
    }

    if (number % 3 === 0 && number % 5 === 0){
        result="fizzbuzz";
    }
    console.log(result);
}

fizzbuzz(3);
fizzbuzz(5);
fizzbuzz(15);