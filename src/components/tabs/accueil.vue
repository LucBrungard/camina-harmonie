<template>
    <v-timeline align="start">
      <v-timeline-item 
        v-for="event in historique"
        :key="event.date">
        <v-card>
          <v-img
            v-if="event.image !== ''"
            :src="event.image"
            height="200px"
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

  export default {
    data: () => ({
      historique: historique
    })
  }
</script>