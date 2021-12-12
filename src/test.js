const http = require('http');

const server = http.createServer((inReq, inResp) => {
    inResp.end("I am a rockstar genius!");
});

server.listen(8080);

