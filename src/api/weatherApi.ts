// запрос к OpenWeatherMap
import axios from 'axios'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org'

export const getCoordinatesByCity = async (city: string) => {
  const res = await axios.get(`${BASE_URL}/geo/1.0/direct`, {
    params: {
      q: city,
      limit: 1,
      appid: API_KEY,
    },
  })

  if (!res.data.length) {
    throw new Error('Город не найден')
  }

  const { lat, lon, name, country } = res.data[0]
  return { lat, lon, name, country }
}

export const getCurrentWeather = async (lat: number, lon: number) => {
  const res = await axios.get(`${BASE_URL}/data/2.5/weather`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units: 'metric',
      lang: 'ru',
    },
  })

  return res.data
}