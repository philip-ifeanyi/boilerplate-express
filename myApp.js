let express = require('express');
let app = express();
const PORT = 3000

app.get("/", (req, res) => {
  res.send("Hello Express");
})

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`)
})


































 module.exports = app;
