require('dotenv').config()
let express = require('express');
let app = express();
const path = require('path')

// Mount Middleware for static files
app.use("/public", express.static(path.join(__dirname, 'public')))


app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.get("/json", (req, res) => {
  const response = {"message": "HELLO JSON"}
  if(process.env.MESSAGE_STYLE === "uppercase") {
    response.message.toUpperCase()
  }
  res.json(response)
})
 module.exports = app;