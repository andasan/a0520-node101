const http = require('http');

//create a server object
http.createServer((req, res) => {
    console.log(req);
}).listen(5000, () => {
    console.log("Server is running.....");
})