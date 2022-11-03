const express = require("express");
require("dotenv").config(".env");
const process = require("process");
const dealRouter = require("./routes/deal.route");
const autoRouter = require("./routes/auto.route");
const customerRouter = require("./routes/customer.route");
const statisticRouter = require("./routes/statistic.route");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use("/statistic", statisticRouter);
app.use("/customer", customerRouter);
app.use("/auto", autoRouter);
app.use("/deal", dealRouter);

app.listen(PORT, () => console.log(`======= PORT:${PORT} =======`));
