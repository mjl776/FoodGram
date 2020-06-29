const express = require("express")();
const http = require("http").Server(express);

http.listen(3000, ()=> {
    console.log("Listening at :3000...")
});