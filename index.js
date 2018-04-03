/************************************
 *  Name: index.js
 *  Author: Richie Flores
 *  Date: 17 March 18
 *  Description: Simple web chat
 ************************************/

 var app = require("express")();
 var http = require("http").Server(app);
 var io = require("socket.io")(http);
 var port = 3000;

 app.get("/", function(req, res){
     res.sendFile(__dirname + '/index.html');
 });

 io.on("connection", function(socket) {
     console.log("A user connected");
     socket.on("disconnect", function(){
         console.log("User disconnected");
     });
 });

 io.on("connection", function(socket) {
     socket.on("chat message", function(msg) {
         io.emit("chat message", msg)
         console.log("message:", msg)
     });
 });

 http.listen(port, function(){
     console.log("Listening on port", port);
 });

