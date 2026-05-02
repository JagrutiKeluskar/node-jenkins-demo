const http = require('http');

http.createServer((req, res) => {
    res.write("Node.js App Running from Jenkins");
    res.end();
}).listen(3000);

console.log("Server running on http://localhost:3000");
