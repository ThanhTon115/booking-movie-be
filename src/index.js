const path = require("path");
const express = require("express");
const app = express();
const { create } = require("express-handlebars");
const route = require("./routes");
const hbs = create({ extname: ".hbs" }); //config extension name for handlebar
const port = 3000;


//set public direct

app.use(express.static(path.join(__dirname, "public")));

// middleware handlle request body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//template engine
app.engine("hbs", hbs.engine), app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
