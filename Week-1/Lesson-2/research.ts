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

//örnek
const returnName = <T> (obj:T) => {
    const id = Math.random();
    return {
        ...obj,
        id,
    };
};

interface Userinterface<T>{
    name : string,
    data : T,
}

const user: Userinterface<{meta: string}> = {
    name : "Onur",
    data : {
        meta: "saka",
    }
}


const result = returnName(user);
console.log("result:",result);



//Generics



//Enums
const seasons = Object.freeze({
    ilkbahar : "spring",
    yaz: "summer",
    sonbahar: "autumn",
    kış: "winter"
});
//seasons.kış = "winter2"; -- yapılamaz çünkü object freeze yapıldı.
console.log("kış:",seasons.kış);

//Enums


//Funtion Overloading

function padding (a:number , b?:number , c?:number , d?: any){
    if(b === undefined && c=== undefined && d=== undefined ){
        b = c = d = a;
    }
    else if(c === undefined && d === undefined){
        c = a;
        d = b;
    }
    return{
        top : a,
        left : b,
        bottom : c,
        right : d,
    };
}
//Funtion Overloading

//:void nesneye bir değer atanamaz. undefined olur.




