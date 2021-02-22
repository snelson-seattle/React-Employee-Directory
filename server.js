const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3000;
const PATH = path.join(__dirname, "..", "public");

const app = express();

app.use(express.static(PATH));

app.get("*", (req, res) => {
    res.sendFile(path.join(PATH, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});



