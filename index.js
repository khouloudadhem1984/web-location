const http = require('http');
const fs = require('fs');
const port = 5000;

const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('index.html',function(error,data){
        if(error){
            res.writeHead(404);
            res.write('Error: File Not Found');
        }else{
            console.log('reading file');
            res.write('data');
            res.write(data);
        }
        res.end();
    })
});


server.listen(port ,function(error){
    if(error){
        console.log('something error happened');
    }else{
        console.log('server is listening on port : ' + port);
    }
})