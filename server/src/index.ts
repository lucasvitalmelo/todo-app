import express from "express"
import routes from "./routes";
const app = express();

app.use(express.json());

app.use(routes)

app.listen(9000, ()=>{
  console.log("RODOU! 9000")
})