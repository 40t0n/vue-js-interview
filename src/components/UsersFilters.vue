<template>
  <v-card>
    <v-container>
      <v-select
        v-model="countryFilter"
        :items="countries"
        class="w-full"
        label="Filter by country"
        @update:model-value="filterUpdated"
      ></v-select>
      <v-range-slider
        v-model="rangeFiler"
        :min="-50"
        :max="50"
        :step="1"
        label="Filter by score"
        thumb-label="always"
        @update:model-value="filterUpdated"
      ></v-range-slider>
      <v-btn @click="resetFilters">Reset filters</v-btn>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const countryFilter = ref<string>('');
const countries = ref<string[]>(['Russia', 'USA']);

const rangeFiler = ref<number[]>([-25, 50]);

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

const resetFilters = () => {
  countryFilter.value = '';
  rangeFiler.value = [-25, 50];
  filterUpdated();
};
</script>

<style scoped></style>
