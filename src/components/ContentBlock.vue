<template>
  <v-container>
    <div class="grid grid-cols-2 justify-center items-center gap-3 w-[1000px] m-auto">
      <div class="flex justify-center col-span-2">
        <v-img :src="logoSrc" class="my-3" contain height="200" width="200" />
      </div>
      <UsersFilters class="shrink-0 self-start" />
      <UsersList :users="filteredUsersList" class="self-start" />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import UsersFilters from './UsersFilters.vue';
import { useUsersStore } from '../store/users';
import { storeToRefs } from 'pinia';
import UsersList from './UsersList.vue';

const usersStore = useUsersStore();
const { filteredUsersList } = storeToRefs(usersStore);

const logoSrc = computed(() => {
  return new URL('../assets/logo.png', import.meta.url).href;
});
</script>

<style scoped></style>
