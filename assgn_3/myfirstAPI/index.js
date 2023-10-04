import express from "express";

const app = express();

const PORT = 3005;

app.get("/", function(req,res,next) {
    console.log(req,"request");
    return res.status(200).send("<h1>Hello World!</h1>");
});

app.get("/hello", function(req,res,next) {
    return res.status(200).json({message: "Welcome to our API", timestamp: new Date().toISOString()});
})


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
