<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue"
import { useWeatherStore } from './stores/weatherStore'
import WeatherCard from '@/components/WeatherCard.vue'

const weatherStore = useWeatherStore()
const addCity = async (city: string) => {
  try {
    await weatherStore.addCity(city)
  } catch (err) {
    alert('Ошибка при загрузке города')
  }
}
</script>

<template>
  <v-app>
    <v-container class="py-4">
      <SearchBar @add-city="addCity" />
    </v-container>

    <v-container>
      <WeatherCard v-for="city in weatherStore.cities" :key="city" :city="city" />
    </v-container>
  </v-app>
</template>

<style scoped></style>
