<template>
  <v-card :elevation="12" class="d-flex flex-column rounded-lg ma-5 bg-background text-left" hover>    <!-- to="/research/project" -->
    <v-img :src="`${project.coverImage}`" class="rounded-t-lg" height="150" max-height="150" cover></v-img>

    <v-card-title>
      {{ project.title }}
    </v-card-title>

    <v-card-subtitle class="text-caption">
      {{ project.year }}
    </v-card-subtitle>

    <v-card-text>
      {{ ellips_trim(project.summary) }}
    </v-card-text>

    <v-card-text class="text-medium-emphasis text-caption d-flex align-end">
      {{ '#' + project.tags.join(', #') }}
    </v-card-text>
  </v-card>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
// import { Project } from '@/types/Project';

export default defineComponent({
  name: 'ProjectThumbnail',

  props: {
    project: { type: Object as PropType<any>, },
    descriptionLength: { type: [Number, String], default: 200 }
  },

  methods: {
    ellips_trim(text: string): string {
      if (this.descriptionLength > 0) {
        return text.length > this.descriptionLength ? text.substring(0, this.descriptionLength) + "..." : text;
      }

      return text;
    }
  },

  mounted() {
    console.log(this.project)
  }
})
</script>
