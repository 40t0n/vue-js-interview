<template>
  <!-- <v-card :key="props.user.title"> -->
  <Transition name="list">
    <v-container>
      <div class="flex gap-4">
        <v-avatar>
          <v-img :src="props.user.avatar" @click="tooltipShown = !tooltipShown"></v-img>
        </v-avatar>
        <div>
          <v-list-item-title v-html="props.user.title"></v-list-item-title>
          <v-list-item-subtitle v-html="props.user.subtitle"></v-list-item-subtitle>
        </div>

        <v-dialog v-model="tooltipShown" width="200px">
          <v-card>
            <v-card-title>My address:</v-card-title>
            <v-card-text>
              {{ props.user.address }}
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </v-container>
  </Transition>
  <!-- </v-card> -->
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
