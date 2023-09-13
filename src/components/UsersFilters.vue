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
import { useUsersStore } from '../store/users';

const usersStore = useUsersStore();

const countryFilter = ref<string>(usersStore.filteringOptions.country);
const countries = ref<string[]>(['Russia', 'USA']);

const rangeFiler = ref<number[]>([usersStore.filteringOptions.minScore, usersStore.filteringOptions.maxScore]);

const filterUpdated = () => {
  usersStore.updateFilters({
    country: countryFilter.value,
    minScore: rangeFiler.value[0],
    maxScore: rangeFiler.value[1],
  });
};

const resetFilters = () => {
  usersStore.resetFilters();
};
</script>

<style scoped></style>
