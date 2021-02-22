const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


// Serve static assets on heroku
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Send every request to the react app
app.get("*", (req, res) => {
    res.sendFile(path.join(PATH, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});



