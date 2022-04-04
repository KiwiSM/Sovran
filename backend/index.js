const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors({
    origin: "*"
}));

app.use(express.static("public"));

app.listen(port, () => {
    console.log("Server is listening on port " + port)
    console.log("This server is active");
});

app.get("/api", (req, res) => {
    res.sendFile(__dirname + "/public/operators.json");
})

//-----------------------------------------------------//

let data = fs.readFileSync("./public/operators.json");
let operators = JSON.parse(data);
console.log(operators);