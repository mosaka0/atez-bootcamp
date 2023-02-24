//faktoriyel hesabı

const findFactoriel = (a) => {
    if(typeof a === "number"){
        let result = 1;
        for(let i = a ; i > 0 ; i--){
            result *= i;
        }
        console.log(result);
    }
    else{
        console.log("Hata! Lütfen number tipinde değer gönderin");
    }
}
//Denemek için değer girin:
findFactoriel(4);
