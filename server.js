let express = require("express");
let exphbs = require("express-handlebars");
require("dotenv").config();
// console.log(process.env);

let PORT = process.env.PORT || 8080;
let app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "main",
    helpers: require("./helpers/handlebars-helpers"),
  })
);
app.set("view engine", "handlebars");

let routes = require("./routes/");

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
