import * as express from "express";

const app = express();

import * as mustacheExpress from 'mustache-express';

app.engine('html', mustacheExpress());
app.set('view engine', 'html');

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

app.get('/', (_req, res) => {
  res.sendfile('index.html');
});


app.listen(5000, () => console.log("Example app listening on port 5000"));
