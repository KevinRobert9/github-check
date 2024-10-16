import express from "express";
const app = express();
import { sum } from "./sum";

// localhost:3000/sum/1/1
// localhost:3000/sum/2/2
app.get("/sum/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  const result = sum(a, b);
  res.send("result " + result);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});