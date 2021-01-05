const url = require('url'); //deprecated

const myURL = new URL('http://mywebsite.com:8080/hello.html?id=56465465&status=active');

//serialize URL
console.log(myURL.href);
console.log(myURL.toString());

//host
console.log(myURL.host);

//hostname
console.log(myURL.hostname);

//pathname
console.log(myURL.pathname);

//serialize query
console.log(myURL.search);

//params object
console.log(myURL.searchParams);

//add param
myURL.searchParams.append('color', 'white');
console.log(myURL.searchParams);
console.log(myURL.search);

//loop through params
myURL.searchParams.forEach((value, name) => {
    console.log(`${name} : ${value}`);
})