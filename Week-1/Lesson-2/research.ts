//Ders 2 araştırma konuları çalışmaları

//tslint :

//Generics
function displayUser <T , U>(name : T, id : U)  {
    return {name,id};
}

console.log(displayUser<string,number>("onur",1));
//displayUser fonksiyonunun aldığı değer tiplerini değiştirmek istersek bu aşamada sadece
//fonksiyona gönderirken örneğin number yerine string yazılabilir.

interface Fullname <T,U> {
    (name : T, surname : U):void
};

type Name = "mirac" | "onur";
type Surname = "saka";


const getFullname: Fullname<Name ,Surname> = (name: Name, surname:Surname) => {
    return {name,surname};
}

console.log(getFullname("onur","saka")); //mirac veya onur yazılabiliyor.
//Generics


//
