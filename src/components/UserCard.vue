<template>
  <v-card width="250px">
    <v-img :src="props.user.avatar" height="200px" cover class="cursor-pointer"></v-img>
    <v-card-title v-html="props.user.title"></v-card-title>
    <v-card-subtitle v-html="props.user.subtitle"></v-card-subtitle>
  </v-card>
</template>

<script setup lang="ts">
import { IUser } from '../lib/types';

interface UserCardProps {
  user: IUser;
}

const props = defineProps<UserCardProps>();
</script>

<style scoped></style>
