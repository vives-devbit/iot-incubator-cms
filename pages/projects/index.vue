<script setup>
  const { data, pending } = await useAsyncData('projects', () => queryContent('/projects/').find())
</script>

<template>

  <v-row justify="center" class="py-12 bg-section2">
    <v-col cols="12" md="10" no-gutters>

      <v-row class="mb-6">
        <v-col cols="12">

          <v-card class="d-flex flex-column align-center bg-transparent" flat>
            <v-card-title class="text-h4" >
              <strong>Our Project Portfolio</strong>
            </v-card-title>
            <v-card-text class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis aliquid ipsum, nulla placeat deleniti voluptatibus. Dignissimos inventore, esse officiis quam neque molestias ea similique ab fugit consectetur saepe est.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis aliquid ipsum, nulla placeat deleniti voluptatibus. Dignissimos inventore, esse officiis quam neque molestias ea similique ab fugit consectetur saepe est.
            </v-card-text>
          </v-card>

        </v-col>
      </v-row>

      <v-container class="px-8 d-flex flex-wrap justify-center" v-if="!pending">
        <project-thumbnail v-for="project in data" :key="project._id" :project="project" max-width="320" />
      </v-container>

    </v-col>
  </v-row>

</template>