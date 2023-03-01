//Typescript kuralları belirleyerek kodda hata yapmayı azaltır, sınırları belirler.
//npm install -global typescript : bilgisayarın typescript'i compile etmesini sağlayacak.
//macte çalıştırmak için npx tsc file_name
let userInput:number[] = [];
//tanımlama yaparken sadece number verebilecez. String yaparsak sadece string-
userInput = [2,3,5];
// any: her type girilebilir hale getirir. Zaten js'nin default hali
let smthArr:any = [];


// Union Type Örneği
const userLogin = (name:string,password:string | number) => { //string veya number alabilir.
    return name + " " + password;
}
//console.log(userLogin("onur",123));


interface Surungen {
    name : string;
    length : number;
    age : number;
    toxic? : boolean;
}

interface Yilan extends Surungen {
    skin_color : string;
}

const mahmut: Yilan =  {
    age: 2,
    length: 452,
    name: "mahmut",
    skin_color: "orange",
    toxic :true
};
const showObj = (yilan: {age: number, length: number, name:string,toxic?:boolean}): string => {
    return `Snake name is ${yilan.name} and it is ${yilan.length} cm also it is ${yilan.age} years old.`
}

console.log(showObj(mahmut));



