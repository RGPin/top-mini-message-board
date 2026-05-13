const express = require("express");
const path = require("node:path");

const app = express();

const indexRouter = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(8000, (error) => {
  if (error) throw error;
  console.log("Listening to port 8000...");
});
