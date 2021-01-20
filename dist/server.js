"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("./app");
var debug = require("debug")("node-angular");
var http = require("http");
// set a port
var normalizePort = function (val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
};
var onError = function (error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    var bind = typeof port === "string" ? "pipe " + port : "port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};
var onListening = function () {
    var addr = server.address();
    var bind = typeof port === "string" ? "pipe " + port : "port " + port;
    debug("Listening on " + bind);
};
var port = normalizePort(process.env.PORT || "8080");
app.set("port", port);
var server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
