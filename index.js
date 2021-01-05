//command to create a package.json
//npm init


// console.log("hello world");

// const Person = require('./person');
// const person1 = new Person('Mike', 30);
// person1.greeting();

// http, path, fs
const http = require("http");
const router = require("./routes");

const server = http.createServer(router);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
