// Belirtilen lokasyandaki dosya veya dosyaları zip dosyası haline getirecek bir fonksiyon yazılması
const fs = require('fs');
const jszip = require('jszip');
const zipping = new jszip();

const imageFiles = ["wrote.txt"];


const makeZip = (images:string[],zip):void => {

    const img = zip.folder("txt-dosyalari");

    for (const image of images) {
        const imageData = fs.readFileSync(image);
        img.file(image, imageData);
    }

    zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
        .pipe(fs.createWriteStream('sample.zip'))
        .on('finish', function (err) {
            if(err){
                console.log("zip oluşturulurken hata!");
            }
            console.log("zip başarıyla oluşturuldu!");
        });

}

makeZip(imageFiles,zipping);
