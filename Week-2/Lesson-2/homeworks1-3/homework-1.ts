//İstenilen bir cümleyi dosyaya yazdırma
const fs = require ('fs');

const congratulations_message:string = 'Umut Hocam Mutluluklar!';

const fileWriter = (content:string):void => {
    fs.writeFile("wrote.txt",content +'\r\n',{flag : 'a+'}, err => {
        if(err){
            console.log("yazma işlemi başarısız oldu.");
        }
        else{
            console.log("yazma işlemi başarılı.");
        }
    });
};

fileWriter(congratulations_message);