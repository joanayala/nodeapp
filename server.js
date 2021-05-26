var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Servidor Node activo');
    console.log('Servidor activo en este momento');
}).listen(3000);