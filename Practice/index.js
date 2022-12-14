const express = require("express");
const cors = require("cors");
const connection = require("./config");
const crudRouter = require("./routes/crud.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("WELCOME TO THE WORLD OF BACKEND");
});

app.use("/crud", crudRouter);

app.listen(8080, async () => {
  try {
    await connection;
  } catch (er) {
    console.log("err in config.js", er);
  }
  console.log("listening on port 8080");
});
