import express from "express";

const app = express();
const port = 3000;

app.get("/", (_, req) => {
  req.send("test 1");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
