<!--ввод названия города и кнопка add-->
<script setup lang="ts">
import { ref } from 'vue'

const city = ref('')

const emit = defineEmits<{
  (e: 'add-city', value: string): void
}>()
const submit = () => {
  const trimmed = city.value.trim()
  if (trimmed) {
    emit('add-city', trimmed)
    city.value = ''
  }
}
</script>

<template>

  <div class="d-flex ga-2">
    <v-text-field
        v-model="city"
        label="Введите город"
        density="comfortable"
        hide-details
        variant="outlined"
    />

    <v-btn
        color="#ea899a"
        variant="flat"
        @click="submit"
    >
      Добавить
    </v-btn>
  </div>

</template>

<style scoped>

</style>
