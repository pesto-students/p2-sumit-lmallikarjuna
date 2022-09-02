# 🌞 Weather app 🌦️

REST API to get weather and forecast data

## Steps to run the app

```powershell
npm install
```

## 🚀 API documentation

### Get weather of a city

Header:

```Rest
POST {{BASE_URL}}/weather/city
```

Body:

```json
{
  "city": "London"
}
```

### Get weather of multiple cities

Header:

```Rest
POST {{BASE_URL}}/weather/cities
```

Body:

```json
{
  "cities": ["London", "Paris", "Toronto"]
}
```

### Get forecast of a city for <i>N</i> number of days

Header:

```Rest
POST {{BASE_URL}}/forecast/days
```

Body:

```json
{
  "city": "Paris",
  "days": 5
}
```

### Get forecast of a city at a specific <i>date</i>

Header:

```Rest
POST {{BASE_URL}}/forecast/date
```

Body:

```json
{
  "city": "Paris",
  "date": "2022-11-22"
}
```
