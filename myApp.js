require('dotenv').config()
let express = require('express');
let app = express();
const path = require('path')

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next();
}

// Mount Middleware for static files
app.use(logger())
app.use("/public", express.static(path.join(__dirname, 'public')))


app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.get("/json", (req, res) => {
  let message = "Hello json"
  if ( process.env['MESSAGE_STYLE'] === "uppercase") {
    res.json({ "message": message.toUpperCase() });
  }
  else {
    res.json({ "message": message });
  }
})

app.listen(8080, (req, res) => {
  console.log("listening on port 8080")
});

module.exports = app;