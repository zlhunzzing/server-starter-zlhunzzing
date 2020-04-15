import * as express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
