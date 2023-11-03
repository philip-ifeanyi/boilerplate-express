let express = require('express');
let app = express();
const PORT = 3000

// Mount Middleware for static files
app.use("/public", express.static(__dirname + '/public'))


app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`)
})

 module.exports = app;
