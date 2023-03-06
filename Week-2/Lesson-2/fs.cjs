const fs = require('fs');


fs.exists('newFile.txt', (exists) => {
    console.log(exists? 'dosya var:' : 'dosya yok');
    if(exists){
        fs.readFile("newFile.txt",'utf8',(err,data) =>{
            console.log('Data',err,data);
        });
    }
    else{
        throw Error('Böyle bir dosya yok.');
    }
})
