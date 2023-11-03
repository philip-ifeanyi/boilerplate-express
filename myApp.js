let express = require('express');
let app = express();
const path = require('path')
// const PORT = 3000

// Mount Middleware for static files
app.use("/public", express.static(path.join(__dirname, 'public')))


app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.get("/json", (req, res) => {
  res.json(JSON.stringify({"message": "Hello json"}))
})

// app.listen(PORT, ()=> {
//   console.log(`Listening on port ${PORT}`)
// })
 module.exports = app;
