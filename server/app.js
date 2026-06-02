const express = require("express");
const path = require("node:path");
const cors = require("cors");

const app = express();

const indexRouter = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ origin: "http://localhost:5173/" }));

app.use("/", indexRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Listening to port ${PORT}...`);
});
