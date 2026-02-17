const http = require("http");

const server = http.createServer((request, response) => {

    const requestUrl = request.url;
    const requestMethod = request.method;

    console.log("requestMethod:", requestMethod);

    if (requestUrl === "/") {
        response.end("Home Page");
    } 
    else if (requestUrl === "/about") {
        response.end("About Page");
    } 
    else if (requestUrl === "/contact") {
        response.end("Contact Page");
    } 
    else {
        response.end("404 Page Not Found");
    }
});

server.listen(4000)
