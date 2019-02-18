import * as express from "express";
import * as compression from "compression";

const app = express();

app.use(compression());

app.use("/assets", express.static("./src/client"));

app.get("/", (_req, res) => {
  res.sendFile("index.html", { root: "./src/server" });
});

const port = 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}`));
