// HTTP server yaratarak filesystem de pages klasoru altındaki farklı uzantılarda ki sayfaları serve edecek bir server yazılması

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

http.createServer((req,res) => {
    const pathQuery = url.parse(req.url,true);
    const fileName = `pages${pathQuery.pathname}`;

    const extention:string = path.extname(fileName);
    let content: string;

    if (extention === '.html') {
        content = 'text/html';
    }
    else if(extention === '.css') {
        content = 'text/css';
    }
    else if(extention === '.js') {
        content = 'text/javascript';
    }


    fs.readFile(fileName, (err,data) => {
        if(err){
            res.writeHead(404,{"Content-Type":content});
            return res.end("Boyle bir sayfa bulunamadi.");
        }
        res.writeHead(200,{"Content-Type":content});
        res.write(data);
        return res.end();
    });

}).listen(8080);