<template>
  <v-card class="mb-4" color="#ea899a">
    <v-card-title class="d-flex justify-space-between align-center">
      <span>{{ city }}</span>
      <v-btn icon="mdi-close" color="red" @click="removeCity(city)"/>   <!--не работает иконка-->
    </v-card-title>

    <v-card-text v-if="weather">
      <div class="d-flex align-center">
        <img
          :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
          alt="weather icon"
          width="60"
          height="60"
          class="mr-4"
        />
        <div>
          <div class="text-h5 font-weight-bold">{{ Math.round(weather.main.temp) }}°C</div>
          <div class="text-subtitle-1">{{ weather.weather[0].description }}</div>
          <div class="text-caption">{{ formatDate(weather.dt) }}</div>
        </div>
      </div>
    </v-card-text>

    <v-card-text v-else>
      <span class="text-error">Данные о погоде недоступны</span>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWeatherStore } from '@/stores/weatherStore'

const props = defineProps<{
  city: string
}>()

const weatherStore = useWeatherStore()

const weather = computed(() => weatherStore.weatherByCity[props.city])

const removeCity = (city: string) => {
  weatherStore.removeCity(city)
}
const formatDate = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleString('ru-RU', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}
</script>
