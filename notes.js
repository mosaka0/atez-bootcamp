var cmle = "atez";

//undefined data
var smthelse;

// Object
var testObj = {
    name : "onur",
    lastName : "saka",
    number : "5457490810"
}

console.log(testObj);

//var : eskiden global değişken olarak tanımlanıyordu.
//let ve const kullanılacak. Scope mantığını getirdi. var her yerde global olduğu için scope'u bozuyordu.
//let : var yerine scope için kullanılmış
//const : değişmez cisimler üretir.

var globalScope = "it is a global scope"
function fonkScope() {
    const fnScopeVariable = "funcscope variable";

    console.log("Global -> ", globalScope);
    console.log("Fonksiyon -> ", fnScopeVariable);

}
//fonkScope();
//arraw function tanımıyla fonksiyon yaratma
const returnArrow = (a,b) => a+b;

console.log(returnArrow("32",2));

function  returnSomething(){
    const a = 5;
    const b = 6;

    return a+b;
}

console.log("a+b = ",returnSomething());

const personArr = [
    {name: "Onur", lastName: "Saka", age:30},
    {name: "Onur", lastName: "Saka", age:31},
    {name: "Onur", lastName: "Saka", age:32},
    {name: "Onur", lastName: "Saka", age:33},
]

for(let i  =0 ; i<personArr.length ; i++){
    console.log("Person Array:",personArr[i]);
}


//arraylerde filter kullanımı
hasInSaleCar = [
    { id : 0, model: "Porche" , inSale: true},
    { id : 1, model: "Tofas" , inSale: false},
    { id : 2, model: "BMW" , inSale: true},
    { id : 3, model: "Mercede" , inSale: false},
];

const inSaleCar = hasInSaleCar.filter(i => i.inSale)

//console.log(inSaleCar)
//for each kullanımı
hasInSaleCar.forEach((element,index) => {
    console.log(element,index)
});



