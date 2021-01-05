// console.log("hello world");

// const Person = require('./person');
// const person1 = new Person('Mike', 30);
// person1.greeting();

// http, path, fs
const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello</h1");
    res.end();
  }

  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>This is about page</h1");
    res.end();
  }

  if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>This is contact page</h1");
    res.end();
  }

  if (req.url === "/api/users") {
    const users = [
      {
        name: "Michael Jordan",
        profession: "Athlete",
      },
      {
        name: "Masa",
        profession: "Entertainer",
      },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }

  if (req.url === "/send") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>This is a form</h1>");
    res.write("<p>Fill in the form below: </p>");
    res.write(
      '<form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form>'
    );
    res.end();
  }

  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (packets) => {
      console.log("Packets: ", packets);
      body.push(packets);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1]; //['message','test']
      console.log(message);

      fs.writeFile("hello.txt", message, (err) => {
        if (err) throw err;

        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
