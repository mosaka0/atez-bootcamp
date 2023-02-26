// git commit -m ""(m: Message)
// git komutuyla bütün komutlar görünür.
// git checkout LOG_ID : Dallandırma yöntemi. Eski kodu getirerek inceleme yapmayı sağlayabilir.
// git reset --hard : git pull yapmış gibi bütün localde yaptığın değişiklikleri 0 lar.
// git stash - git stash apply : kendi localindeki değişiklikleri saklayıp tekrar gösterir. - Commit Sekmesine Shelve Changes intellij'deki hali


//... dizinin tamamı anlamı vardır.
const calculate = (x,y,z) =>{
    return x + y + z;
}

const nArray = [3,2,2];

console.log(calculate(...nArray));


const Car = {
    marka : "mazda",
    model : "323",
    yil : "2000",
    renk : "gri",
};
const newCar = {
    speed : 120,
    max_speed : 240
};

//tekilleştirme - spread operator
const nC = {...Car,...newCar};
console.log("nC:",nC);
//tekilleştirme - spread operator


//Array deneme
const numberArr = [...nArray,12,74];
console.log("numberArray:",numberArr);
//Array deneme


//Object destructing
const [x,y, ...rest] = numberArr;

console.log("x: "+x+" y: "+y+" rest: "+rest);

const {speed, marka, ...restCar} = nC;

console.log("NewModel",{speed,marka});
console.log("speed:",speed);
console.log("marka:",marka);
console.log("restCar:",restCar);
//Object destructing


// optional chaining (?)
const coffe = {
    name: "jacobs",
    color: "brown",
    type: "hot",
    others : ["medium","5"],
};

console.log("kahve özellikleri: ",coffe?.others?.map(x => x) );
// optional chaining

// Ternary operator
//const isRed = true;

console.log("Araba", (nC.renk === 'gri' || nC.model === '323') ? "gridir." : "gri değildir.");
console.log("null gelir mi:",coffe.others || "yok");
// Ternary operator
