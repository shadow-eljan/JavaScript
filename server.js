const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.write("Hello im server pro max.");
    res.end();
});

server.listen(3000, ()=> console.log("Server is up and runnning. :)"));

// node --watch server.js