//Typescript kuralları belirleyerek kodda hata yapmayı azaltır, sınırları belirler.
//npm install -global typescript : bilgisayarın typescript'i compile etmesini sağlayacak.
let userInput:number[] = [];
//tanımlama yaparken sadece number verebilecez. String yaparsak sadece string-
userInput = [2,3,5];
// any: her type girilebilir hale getirir. Zaten js'nin default hali
let smthArr:any = [];


// Union Type Örneği
const userLogin = (name:string,password:string | number) => { //string veya number alabilir.
    return name + " " + password;
}
console.log(userLogin("onur",123));



