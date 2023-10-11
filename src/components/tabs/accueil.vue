<template>
    <v-timeline align="start" justify="center">
      <v-timeline-item 
        v-for="event in historique as any"
        :key="event.date"
        dot-color="secondary">
        <v-card variant="elevated" class="mr-5 ml-5" elevation="10">
          <v-img
            v-if="event.image !== ''"
            :src="event.image"
            :lazy-src="event.placeholder"
            cover
          >
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular
                  color="grey-lighten-4"
                  indeterminate
                ></v-progress-circular>
              </div>
            </template>
          </v-img>
          <v-card-title>{{ event.titre }}</v-card-title>
          <v-card-subtitle>{{ event.date }}</v-card-subtitle>
          <v-card-text>{{ event.text }}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </template>

<script lang="ts">
  import historique from '@/assets/historique.json'

  const imgFolder = `${import.meta.env.BASE_URL}/historique`;

  for (let hist of historique) {
    Object.defineProperty(hist, 'placeholder', {
      value: `${imgFolder}/placeholder/${hist.image}`,
      writable: false,
    });
    hist.image = `${imgFolder}/${hist.image}`
  }

  export default {
    data: () => ({
      historique: historique
    })
  }
</script>