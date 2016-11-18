var fs = require("fs");
var https = require("https");
var url = require("url");

function processRequest(req, res) {
    var request = url.parse(req.url).pathname;
    var reader = fs.createReadStream("." + request);
    reader.pipe(res);
    console.log(request);
    reader.on("error", () => {
        res.writeHead(200);
        res.write("404:\nThe page you are looking for does not exist...\nSO GET LOST!\neven though you already are...");
        res.end();
    });
}

var options ={
    key:fs.readFileSync("./keys/server.key"),
    cert:fs.readFileSync("./keys/server.crt")
}

https.createServer(options,processRequest).listen(8000)
