<template>
  <v-app class="bg-gray-100">
    <v-main>
      <ContentBlock />
    </v-main>

    <v-footer app v-bind="localAttrs">
      <MainFooter />
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import ContentBlock from './components/ContentBlock.vue';
import MainFooter from './components/MainFooter.vue';

const localAttrs = computed(() => {
  const attrs = { absolute: true, fixed: true };
  return attrs;
});
</script>
