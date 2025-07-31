// Состояние: список городов и объект с погодой по городам
// Действия: добавить город, удалить город, загрузить погоду

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCoordinatesByCity, getCurrentWeather } from '@/api/weatherApi'

export const useWeatherStore = defineStore('weather', () => {
  const cities = ref<string[]>([])
  const weatherByCity = ref<Record<string, any>>({})

  const addCity = async (cityName: string) => {
    if (cities.value.includes(cityName)) return

    try {
      const { lat, lon, name, country } = await getCoordinatesByCity(cityName)
      const weatherData = await getCurrentWeather(lat, lon)

      const cityKey = `${name}, ${country}`
      cities.value.push(cityKey)
      weatherByCity.value[cityKey] = weatherData
    } catch (err) {
      throw new Error('Не удалось загрузить данные')
    }
  }

  const removeCity = (cityKey: string) => {
    cities.value = cities.value.filter(c => c !== cityKey)
    delete weatherByCity.value[cityKey]
  }

  return {
    cities,
    weatherByCity,
    addCity,
    removeCity,
  }
})
