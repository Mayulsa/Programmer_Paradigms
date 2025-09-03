function fizzbuzz(){
    for (let numero = 1; numero <= 50; numero++){
        if (numero % 3 === 0 && numero % 5 === 0){
            console.log("FizzBuzz");
        }
        else if (numero % 3 === 0){
            console.log("Fizz");
        }
        else if (numero % 5 === 0){
            console.log("Buzz")
        }
        else {
            console.log(numero);
        }
    }
}

fizzbuzz();

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// 31
// 32
// Fizz
// 34
// Buzz
// Fizz
// 37
// 38
// Fizz
// Buzz
// 41
// Fizz
// 43
// 44
// FizzBuzz
// 46
// 47
// Fizz
// 49
// Buzz