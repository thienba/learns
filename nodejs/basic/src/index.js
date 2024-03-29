const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const route = require("./routes");

app.use(express.static(path.join(__dirname, "./public/")));

// app.use(morgan('combined'));

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./resources/views"));

route(app);

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
