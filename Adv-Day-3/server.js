const express = require("express");
const app = express();

const port = 6553;
app.listen(port, function() {
    console.log("Server is running at port: " + port);
});