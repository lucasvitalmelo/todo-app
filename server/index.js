const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({hello: "Worlds!..."})
});

app.listen(9000, ()=>{
  console.log("RODOU! 9000")
})