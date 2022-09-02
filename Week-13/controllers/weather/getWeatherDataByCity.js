async function getWeatherDataByCity(request, response) {
  try {
    const { city } = request.body;
    if (!city) response.send({ status: false, message: "Missing City name" });

    const URL = `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`;

    const res = await fetch(URL);
    const data = await res.json();
    response.send({ status: true, data });
  } catch (err) {
    response.send({ status: false, message: err.message });
  }
}

module.exports = {
  getWeatherDataByCity,
};
