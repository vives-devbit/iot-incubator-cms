<script setup>
  const { data, pending } = await useAsyncData('people', () => queryContent('/people/').find())
  console.log(data)
</script>

<template>

  <main>
    <div>

      <v-row justify="center" class="py-12 bg-section1">
        <v-col cols="12" md="10" no-gutters>

          <v-row class="mb-6">
            <v-col cols="12">

              <v-card class="d-flex flex-column align-center bg-transparent" flat>
                <v-card-title class="text-h4" >
                  <strong>Meet our Team</strong>
                </v-card-title>
                <v-card-text class="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis aliquid ipsum, nulla placeat deleniti voluptatibus. Dignissimos inventore, esse officiis quam neque molestias ea similique ab fugit consectetur saepe est.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis aliquid ipsum, nulla placeat deleniti voluptatibus. Dignissimos inventore, esse officiis quam neque molestias ea similique ab fugit consectetur saepe est.
                </v-card-text>
              </v-card>

            </v-col>
          </v-row>

          <v-container class="d-flex flex-wrap justify-center" v-if="data">

            <member-card v-for="member in data" :key="member.name" :member="member"></member-card>

          </v-container>

        </v-col>
      </v-row>

    </div>
  </main> 

</template>

<style scoped>
  .v-card--reveal {
    bottom: 0;
    opacity: .9;
    position: absolute;
    width: 100%;
  }
</style>