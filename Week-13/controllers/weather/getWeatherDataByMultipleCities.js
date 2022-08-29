function getURL(cityName) {
  return `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${cityName}`;
}

function getWeatherDataByMultipleCities(request, response) {
  try {
    const { cities } = request.body;
    if (!cities || cities.length === 0) {
      response.send({ status: false, message: "Required City names" });
    }
    const promises = cities.map((cityName) => fetch(getURL(cityName)));
    Promise.all(promises)
      .then((res) => res.map((item) => item.json()))
      .then((val) =>
        Promise.all(val).then((data) => response.send({ status: true, data }))
      )
      .catch((err) => response.send({ status: false, message: err }));
  } catch (err) {
    response.send({ status: false, message: err });
  }
}

module.exports = { getWeatherDataByMultipleCities };
