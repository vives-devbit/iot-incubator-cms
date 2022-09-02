<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title class="font-weight-bold">Internet of Things Incubator</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn flat size="large" to="/research" prepend-icon="mdi-magnify">Research</v-btn>
      <v-btn flat size="large" to="/students/projects" prepend-icon="mdi-school">Student Projects</v-btn>
      <v-btn flat size="large" to="/ourteam" prepend-icon="mdi-account-group">Our Team</v-btn>
      <v-btn flat size="large" prepend-icon="mdi-human-greeting-proximity">Contact Us</v-btn>

    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>

    <v-footer
      app
      bottom
      class="text-center d-flex flex-column"
    >
      <v-row class="my-5">
        <v-col cols="12">
          <div class="text-h4">
            <v-icon size="x-small">mdi-rocket-launch</v-icon>
              Facilitating solutions with IoT technology
            <v-icon size="x-small">mdi-rocket-launch</v-icon>
          </div>
        </v-col>  
      </v-row>

      <v-row>
        <v-col cols="12" sm="4">
          <v-card tile flat>
            <v-card-title class="justify-center">Founded in 2019</v-card-title>
            <v-card-text>
              IoT Incubator was founded in 2019 by VIVES University College of Applied Sciences in order to promote the use of IoT technology in Flanders.
            </v-card-text>
            <v-container class="mt-4">
              <a href="https://www.vives.be" target="_blank">
                <v-img src="https://www.vives.be/sites/default/files/styles/banner/public/uploads/images/VIVES_LogoNewSmile.png?itok=0BtQiClI" max-height="80" contain></v-img>
              </a>
            </v-container>
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
            <v-card-title class="justify-center">Placeholder</v-card-title>
            <v-card-text>
              Just a placeholder for something, who knows what?
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-footer>

  </v-app>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data () {
    return {
      social_media: [
        {icon: 'mdi-facebook', url: 'https://www.facebook.com/vivesiwt'},
        {icon: 'mdi-linkedin', url: 'https://www.linkedin.com/groups/8811012/'},
      ]
    }
  },
})
</script>