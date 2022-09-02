const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routes/index.router");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use("/user", userRouter);

module.exports = app;
