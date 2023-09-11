const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sequelize = require("./utils/database");

const expenseRoutes = require("./routes/expenseRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/get", expenseRoutes);
app.use("/post", expenseRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(4000);
  })
  .catch((err) => console.log(err));
