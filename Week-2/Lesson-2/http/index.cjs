const http = require('http');
const url = require('url');
const fs = require('fs');
/*http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('hello atez bootcamp guys');
    res.end();
}).listen(3000);*/

/*http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('hello atez bootcamp guys');
    res.end();
}).listen(3000);*/

http.createServer((req,res) => {
    const pathQuery = url.parse(req.url,true);
    const fileName = `.${pathQuery.pathname}`;

    fs.readFile(fileName,(err,data) => {
        if(err){
            res.writeHead(404,{'Content-Type' : 'text/html'});
            return res.end('Böyle bir sayfa bulunamadı');
        }
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
    })
})