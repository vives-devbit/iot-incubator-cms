// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as styles from 'vuetify/styles'

const iotTheme = {
  dark: false,
  colors: {
    primary: '#E00120',
    footer_hero: '#1F1F1F',
  //   background: '#FFFFFF',
  //   surface: '#0C3642',
  //   section1: '#FAFAFA',
  //   section2: '#F0F0F0',
  //   background2: '#A0A0A0',
  //   primary: '#869A26',
  //   secondary: '#DC2F30',
  //   ternary: '#2D8ACA',
  //   accent: '#1F1F1F',
  //   error: '#B00020',
  //   info: '#2196F3',
  //   success: '#4CAF50',
  //   warning: '#FB8C00',
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    styles,
    theme: {
      defaultTheme: 'iotTheme',
      themes: {
        iotTheme,
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})