// Bir text dosyasının belirtilen lokasyondan istenilen lokasyana bir kopyasının oluşturulması için fonksiyon
const fs = require('fs');
const path = require('path');

const filePath:string = path.join(__dirname,'/wrote.txt');
const copyFilePath:string = path.join(__dirname,'/../wrote.txt');

const copyDirectory = (currentFilePath:string,copyFilePath:string):void => {
        fs.copyFile(currentFilePath,copyFilePath,(err) => {
            if(err){
                console.error("kopyalama işlemi başarısız...");
            }
            else {
                console.error("kopyalama işlemi başarıyla gerçekleşti.");
            }
        })
}

copyDirectory(filePath,copyFilePath);
