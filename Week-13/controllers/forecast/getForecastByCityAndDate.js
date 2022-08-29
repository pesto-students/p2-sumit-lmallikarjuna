function getURL(cityName, date) {
  return `https://api.weatherapi.com/v1/future.json?key=${process.env.WEATHER_API_KEY}&q=${cityName}&dt=${date}`;
}

async function getForecastByCityAndDate(request, response) {
  try {
    const { city, date } = request.body;
    if (!city && !date) {
      response.send({
        status: false,
        message: "City and number of days values are required",
      });
    } else if (!city) {
      response.send({
        status: false,
        message: "City is required",
      });
    } else if (!date) {
      response.send({
        status: false,
        message: "Date is required",
      });
    }

    const res = await fetch(getURL(city, date));
    const data = await res.json();
    response.send({ status: true, data });
  } catch (err) {
    response.send({ status: false, message: err });
  }
}

module.exports = { getForecastByCityAndDate };
