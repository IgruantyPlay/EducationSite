const express = require('express');
const app = express();
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public");
});
app.listen(80, () => {
    console.log("Server is running on http://localhost:80/");
});