const express = require("express");
const {
  getWeatherDataByCity,
} = require("../controllers/weather/getWeatherDataByCity.js");
const {
  getWeatherDataByMultipleCities,
} = require("../controllers/weather/getWeatherDataByMultipleCities.js");
const {
  getForecastByCityAndNumberOfDays,
} = require("../controllers/forecast/getForecastByCityAndNumberOfDays.js");
const {
  getForecastByCityAndDate,
} = require("../controllers/forecast/getForecastByCityAndDate");

const router = express.Router();

router.route("/weather/city").post(getWeatherDataByCity);
router.route("/weather/cities").post(getWeatherDataByMultipleCities);
router.route("/forecast/days").post(getForecastByCityAndNumberOfDays);
router.route("/forecast/date").post(getForecastByCityAndDate);

module.exports = router;
