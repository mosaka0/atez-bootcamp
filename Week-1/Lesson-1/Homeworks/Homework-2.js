//Fonksiyonda çarpma işlemi

//sonsuz parametreli fonksiyon
const multiplication = (...args) => {
    let result = 1;
    args.forEach((i) => {
        result *= i;
    })
    console.log(result);
}

multiplication(3,2,5)