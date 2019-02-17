import * as express from "express";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/friends", (_req, res) => {
  res.json(["Joe", "Mary", "Peter", "Lisa"]);
});

const port = 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}`));
