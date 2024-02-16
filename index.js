const express = require("express");
const app = express();

app.get("/" , (req, res) => {
    res.send("hello good night baccha soo jaoo ");

})
app.listen(8000,() => {
    console.log("servere is run at this port number");
})