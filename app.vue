<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title class="font-weight-bold">Internet of Things Incubator</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn flat size="large" to="/projects" prepend-icon="mdi-magnify">Projects</v-btn>
      <v-btn flat size="large" to="/people" prepend-icon="mdi-account-group">Our Team</v-btn>

    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>

    <Footer></Footer>

  </v-app>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data () {
    return { }
  },
})
</script>