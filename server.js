const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res)=>{
    res.send("Home Page");
})

app.get("/about", (req, res)=>{
    res.send("About Page");
})

app.listen(port, ()=>{
    console.log("Server started at port ", port);
});