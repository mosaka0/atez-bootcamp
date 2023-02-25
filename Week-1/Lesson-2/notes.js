// git commit -m ""(m: Message)
// git komutuyla bütün komutlar görünür.
// git checkout LOG_ID : Dallandırma yöntemi. Eski kodu getirerek inceleme yapmayı sağlayabilir.
// git reset --hard : git pull yapmış gibi bütün localde yaptığın değişiklikleri 0 lar.
// git stash - git stash apply : kendi localindeki değişiklikleri saklayıp tekrar gösterir. - Commit Sekmesine Shelve Changes intellij'deki hali
//

const calculate = (x,y,z) =>{
    return x + y + z;
}

const nArray = [3,2,2];

console.log(calculate(...nArray));
// Spread
const Car = {
    marka : "mazda",
    model : "323",
    yil : "2000"
};
const newCar = {
    speed : 120,
    max_speed : 240
};
//birleştirme
const nC = {...Car,...newCar};

console.log("nC:",nC);

const {x , y , ...nC2} = nC;

console.log("x:"+x+" y: "+y+" nc2: "+nC2);

// optional chaining

// Ternary operator