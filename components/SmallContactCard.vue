<script setup lang="ts">
// const props = defineProps({
//   name: { type: String, required: true },
//   image: { type: String, required: true },
//   email: { type: String, required: true },
// });
</script>

<template>
  <v-card>
    <v-avatar class="float-right ma-4" large image="https://avatars.githubusercontent.com/u/5863590?v=4"></v-avatar>
    <v-card-title class="text-overline font-weight-bold">Jonas Lannoo</v-card-title>
    <v-card-subtitle class="text-wrap">Researcher Expert Center Technology</v-card-subtitle>
    <v-card-text class="pa-1 pt-2 pb-0">
      <v-btn class="text-primary" prepend-icon="mdi-email" variant="text" href="mailto:jonas.lannoo@vives.be">jonas.lannoo@vives.be</v-btn>
    </v-card-text>
  </v-card>
</template>
