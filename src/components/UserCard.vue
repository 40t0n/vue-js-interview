<template>
  <v-card width="250px" class="relative">
    <v-img
      :src="props.user.avatar"
      height="200px"
      cover
      class="cursor-pointer"
      @click="tooltipShown = !tooltipShown"
    ></v-img>

    <v-card-title v-html="props.user.title"></v-card-title>
    <v-card-text v-html="props.user.subtitle"></v-card-text>
    <v-dialog v-model="tooltipShown" width="200px">
      <v-card>
        <v-card-title>My address:</v-card-title>
        <v-card-text>
          {{ props.user.address }}
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IUser } from '../lib/types';

interface UserCardProps {
  user: IUser;
}

const props = defineProps<UserCardProps>();

const tooltipShown = ref<boolean>(false);
</script>

<style scoped></style>
