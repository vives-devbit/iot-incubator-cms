<script setup lang="ts">

const social_media = [
  { icon: 'mdi-facebook', url: 'https://www.facebook.com/vivesiwt' },
  { icon: 'mdi-linkedin', url: 'https://www.linkedin.com/groups/8811012/' },
];

</script>

<template>
  <v-footer
    bottom
    class="text-center d-flex flex-column pa-0"
  >

    <div class="text-h4 align-self-stretch ma-0 pa-2 bg-footer_hero">
      <v-icon size="x-small">mdi-rocket-launch</v-icon>
        Facilitating solutions with IoT technology
      <v-icon size="x-small">mdi-rocket-launch</v-icon>
    </div>

    <v-row class="mt-4">
      <v-col cols="12" sm="4">
        <v-card tile flat>
          <v-card-title class="justify-center">Visit the LAB</v-card-title>
          <v-card-text>
            Here we should place a nice text about the lab.
          </v-card-text>
          <v-card-title class="justify-center">Location?</v-card-title>
          <v-card-text class="ma-0 pa-0 font-weight-bold">
            Campus Xaverianen
          </v-card-text>
          <v-card-text class="ma-0 pa-0">
            Xaverianenstraat 10
          </v-card-text>
          <v-card-text class="ma-0 pa-0">
            8200 Bruges
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col cols="12" sm="4">
        <v-card tile flat>
          <v-card-title class="justify-center">Social Media</v-card-title>
          <div class="mt-4">
            <v-btn
              v-for="media in social_media"
              :key="media.icon"
              class="mx-4"
              icon flat
              :href="media.url"
              target="_blank"
            >
              <v-icon size="48px">{{ media.icon }}</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>
      
      <v-col cols="12" sm="4">
        <v-card tile flat>
          <v-card-title class="justify-center">VIVES University of Applied Sciences</v-card-title>
          <v-card-text>
            The IoT-LAB was founded in 2022 by VIVES University College of Applied Sciences in order to promote the use of IoT technology in Flanders.
          </v-card-text>
          <v-card-text>
            VIVES University of Applied Sciences conducts applied research.
            It provides companies and organizations with solutions for various complex issues.
            Moreover, the research of our expertise centers provides new knowledge and insights for our education.
          </v-card-text>
          <v-container class="mt-4">
            <a href="https://www.vives.be" target="_blank">
              <v-img src="https://www.vives.be/sites/default/files/styles/banner/public/uploads/images/VIVES_LogoNewSmile.png?itok=0BtQiClI" max-height="80" contain></v-img>
            </a>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>