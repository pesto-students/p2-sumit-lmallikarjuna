const express = require("express");
require("dotenv").config();
const router = require("./routes/routes.js");

const app = express();
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
