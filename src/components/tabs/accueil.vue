<template>
    <v-timeline align="start" justify="center">
      <v-timeline-item 
        v-for="event in historique"
        :key="event.date"
        dot-color="secondary">
        <v-card variant="elevated" class="mr-5 ml-5" elevation="10">
          <v-img
            v-if="event.image !== ''"
            :src="event.image"
            cover
          ></v-img>
          <v-card-title>{{ event.titre }}</v-card-title>
          <v-card-subtitle>{{ event.date }}</v-card-subtitle>
          <v-card-text>{{ event.text }}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </template>

<script lang="ts">
  import historique from '@/assets/historique.json'

  for (let hist of historique) {
    hist.image = `${import.meta.env.BASE_URL}/historique/${hist.image}`
  }

  export default {
    data: () => ({
      historique: historique
    })
  }
</script>