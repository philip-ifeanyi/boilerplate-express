require('dotenv').config()
let express = require('express');
let app = express();
const path = require('path')
const bodyParser = require('body-parser')

// A middleware to show request details
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next();
})

// Mount Middleware for static files
app.use("/public", express.static(path.join(__dirname, 'public')))

// Mount middleware for handling POST requests
app.use(bodyParser.urlencoded({extended: true}))


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

app.get("/now", (req, res, next) => {
  req.time = new Date().toString()
  next()
}, (req, res) => {
  res.json({ "time": req.time});
})

app.get('/:word/echo', (req, res) => {
  res.json({"echo": req.params.word});
})

app.route('/name')
  .post((req, res) => {
    const { first, last } = req.body
    res.json({"name": `${first} ${last}`})
  })

// For Testing purposes only
app.listen(8080, (req, res) => {
  console.log("listening on port 8080")
});

module.exports = app;