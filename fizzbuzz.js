// function
function fizzBuzz (number) {
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

// call function
fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(15);