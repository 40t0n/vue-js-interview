<template>
  <div>
    <v-select
      v-model="countryFilter"
      :items="countries"
      class="w-96"
      label="Filter by country"
      @update:model-value="filterUpdated"
    ></v-select>
    <v-range-slider
      v-model="rangeFiler"
      :min="-50"
      :max="50"
      :step="1"
      label="Filter by score"
      @update:model-value="filterUpdated"
    ></v-range-slider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const countryFilter = ref<string>('');
const countries = ref<string[]>(['Russia', 'USA']);

const rangeFiler = ref<number[]>([-25, 25]);

const emits = defineEmits<{
  (e: 'updateFilters', { country, minScore, maxScore }: { country: string; minScore: number; maxScore: number }): void;
}>();

const filterUpdated = () => {
  emits('updateFilters', {
    country: countryFilter.value,
    minScore: rangeFiler.value[0],
    maxScore: rangeFiler.value[1],
  });
};
</script>

<style scoped></style>
