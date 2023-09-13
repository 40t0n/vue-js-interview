<template>
  <v-card>
    <v-container>
      <TransitionGroup v-if="users.length > 0" name="list">
        <v-list class="flex gap-4 flex-wrap w-[450px] shrink-0 [&>*]:border-b [&>*:last-child]:border-0">
          <UserCard v-for="user in props.users" :key="user.title" :user="user" class=""></UserCard>
        </v-list>
      </TransitionGroup>
      <p v-else class="w-[450px]">Пользователи не найдены</p>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { IUser } from '../lib/types';
import UserCard from './UserCard.vue';

interface UsersListProps {
  users: IUser[];
}

const props = defineProps<UsersListProps>();
</script>

<style scoped></style>
