let express = require('express');
let app = express();
const PORT = 3000

app.use(__dirname + '/public', express.static())

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`)
})

 module.exports = app;
