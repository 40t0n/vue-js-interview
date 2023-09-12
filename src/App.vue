<template>
  <v-app>
    <v-main>
      <h1 class="text-3xl font-bold underline text-red-500">Hello world!</h1>
      <ContentBlock />
    </v-main>

    <v-footer app v-bind="localAttrs">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import ContentBlock from "./components/ContentBlock.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    ContentBlock,
    Footer,
  },

  computed: {
    localAttrs() {
      const attrs = {};

      attrs.absolute = true;
      attrs.fixed = false;

      return attrs;
    },
  },

  data: () => ({
    //
  }),
};
</script>
