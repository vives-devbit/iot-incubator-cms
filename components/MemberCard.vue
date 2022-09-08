<template>
  <v-hover v-slot="{ isHovering, props }" >
    <v-card elevation="6" class="bg-background ma-1" v-bind="props" @click="showdetails = !showdetails">
      <v-img
        :src="member.image"
        height="400px"
        width="300px"
        cover
      >
        <v-expand-transition>
          <v-card v-if="isHovering || showdetails" class="d-flex flex-column align-center transition-fast-in-fast-out bg-secondary v-card--reveal" height="100%">
            <v-card-title>
              {{ member.name }}
            </v-card-title>
            <v-card-text class="d-flex text-center align-center">
              {{ member.bio }}
            </v-card-text>

            <v-container class="text-medium-emphasis text-caption text-center text-white">
              #{{ member.expertise.join(', #') }}
            </v-container>

            <v-container class="d-flex justify-space-around">

              <v-btn
                icon flat v-if="member.linkedin"
                :href="member.linkedin"
                target="_blank"
                color="transparent"
                
              >
                <v-icon size="48px">mdi-linkedin</v-icon>
              </v-btn>

              <v-btn
                icon flat v-if="member.email"
                :href="`mailto:${member.email}`"
                target="_blank"
                color="transparent"
              >
                <v-icon size="48px">mdi-at</v-icon>
              </v-btn>

            </v-container>
          </v-card>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
// import { Member } from '@/types/Member';

export default defineComponent({
  name: 'MemberCard',

  props: {
    member: { type: Object as PropType<any>, },
  },

  data() {
    return {
      showdetails: false
    }
  }

})
</script>


<style scoped>
.v-card-title, .v-card-subtitle {
  text-overflow: initial;
  word-break: normal;
  white-space: normal;
  word-wrap: normal;
}
</style>