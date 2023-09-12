<template>
  <v-container>
    <div class="flex gap-4 align-start">
      <UsersFilters class="w-[450px] shrink-0" @update-filters="onFiltersUpdate" />
      <div class="flex gap-4 flex-wrap">
        <TransitionGroup name="list">
          <UserCard v-for="user in filteredUsersList" :key="user.title" :user="user"></UserCard>
        </TransitionGroup>
      </div>

      <!-- <v-col cols="12" md="4">
        <v-card max-width="450" class="mx-auto">
          <v-list three-line>
            <template v-for="(item, index) in users">
              <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

              <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

              <v-list-item v-else :key="item.title">
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col> -->
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import UsersFilters from './UsersFilters.vue';
import { useUsersStore } from '../store/users';
import { storeToRefs } from 'pinia';
import UserCard from './UserCard.vue';

const usersStore = useUsersStore();
const { usersList } = storeToRefs(usersStore);

const filteringOptions = ref<{ country: string; minScore: number; maxScore: number }>({
  country: '',
  minScore: -25,
  maxScore: 50,
});

const filteredUsersList = computed(() => {
  let filteredByCountry = usersList.value;
  if (filteringOptions.value.country) {
    filteredByCountry = filteredByCountry.filter((user) => user.country === filteringOptions.value.country);
  }
  return filteredByCountry.filter(
    (user) => user.score >= filteringOptions.value.minScore && user.score <= filteringOptions.value.maxScore,
  );
});

const onFiltersUpdate = (options: { country: string; minScore: number; maxScore: number }) => {
  filteringOptions.value = options;
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
