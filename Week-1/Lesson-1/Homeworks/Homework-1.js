//faktoriyel hesabı

const findFactoriel = (factorielNum) => {
    if(typeof factorielNum === "number" && factorielNum > 0 && factorielNum !== Infinity){
        let result = 1;
        for(let i = factorielNum ; i > 0 ; i--){
            result *= i;
        }
        console.log(result);
    }
    else if(factorielNum === 0){
        console.log(1);
    }
    else if(factorielNum < 0){
        console.log("Lütfen pozitif bir sayı girin.");
    }
    else{
        console.log("Hata! Lütfen number tipinde değer gönderin");
    }
}
//Denemek için değer girin:
findFactoriel(5);
