<template>
  <v-app>
    <v-main>
      <h1 class="text-3xl font-bold underline text-red-500">Hello world!</h1>
      <ContentBlock />
    </v-main>

    <v-footer app v-bind="localAttrs">
      <MainFooter />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import ContentBlock from './components/ContentBlock.vue';
import MainFooter from './components/MainFooter.vue';

export default {
  name: 'App',

  components: {
    ContentBlock,
    MainFooter,
  },

  data: () => ({
    //
  }),

  computed: {
    localAttrs() {
      const attrs = { absolute: true, fixed: true };

      attrs.absolute = true;
      attrs.fixed = false;

      return attrs;
    },
  },
};
</script>
