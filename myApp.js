require('dotenv').config();
let express = require('express');
let app = express();
const path = require('path')
const message = process.env.MESSAGE_STYLE
console.log(message)

// Mount Middleware for static files
app.use("/public", express.static(path.join(__dirname, 'public')))


app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.get("/json", (req, res) => {
  if(message=== "uppercase") {
    res.json({"message": "HELLO JSON"})
  } else {
    res.json({"message": "Hello json"})
  }
})
 module.exports = app;