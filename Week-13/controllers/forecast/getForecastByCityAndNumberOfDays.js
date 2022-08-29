function getURL(cityName, numberOfDays) {
  return `https://api.weatherapi.com/v1/forecast.json?key=28dfa714eed94ae8bdc145552222808&q=${cityName}&days=${numberOfDays}&aqi=no&alerts=no`;
}

async function getForecastByCityAndNumberOfDays(request, response) {
  try {
    const { city, days = 1 } = request.body;
    if (!city && !days)
      response.send({
        status: false,
        message: "City and number of days values are required",
      });
    else if (!city) {
      response.send({
        status: false,
        message: "City is required",
      });
    }

    const res = await fetch(getURL(city, days));
    const data = await res.json();
    response.send({ status: true, data });
  } catch (err) {
    response.send({ status: false, message: err });
  }
}

module.exports = { getForecastByCityAndNumberOfDays };
