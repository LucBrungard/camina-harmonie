<template>
  <v-card max-width="600" class="mx-auto my-5 myCard" variant="elevated" color="background" elevation="10" border
    v-for="concert in concerts as any" :key="concert.date">
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card height="cardHeight">
            <v-card-title>{{ concert.titre }}</v-card-title>
            <v-card-subtitle>Le {{ concert.date }}, à {{ concert.ville
            }}</v-card-subtitle>

            <v-card-text>{{ concert.description }}</v-card-text>
          </v-card>
        </v-col>

        <v-col>
          <v-img :src="'concerts/' + concert.affiche" :lazy-src="concert.placeholder" class="align-end text-white"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="cardHeight" cover></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import concerts from '@/assets/concerts.json'
import { updateImagePropertiesList } from '../../utils';

updateImagePropertiesList(concerts, 'concerts')

export default {
  data: () => ({
    cardHeight: 400,
    concerts: concerts
  })
}
</script>
