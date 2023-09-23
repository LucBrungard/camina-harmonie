<template>
  <v-card
    title="Par mail"
    class="mx-auto"
    max-width="500"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
        <v-card :href="`mailto:${card.mail}`">
            <v-img
            :src="card.src"
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200"
            cover
            >
            <v-card-title class="text-white" v-text="card.title"></v-card-title>
            <v-card-subtitle class="text-white" v-text="card.subtitle"></v-card-subtitle>
            </v-img>
        </v-card>
          
        </v-col>
      </v-row>
    </v-container>
  </v-card>

  <v-card
    class="mt-4 mx-auto"
    max-width="500"
    title="Sur place" 
    subtitle="Tous les vendredi de 20h à 22h" 
    text="44 Rue des Prêles, 57000 Metz">
    
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.7583454653577!2d6.189896376553477!3d49.0722279713619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794dcfa28130123%3A0xd11a91602f6d8f90!2sCentre%20Familial%20Social%20et%20Culturel!5e0!3m2!1sfr!2sfr!4v1695498218193!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  </v-card>
</template>
<script lang="ts">
  export default {
    data: () => ({
      cards: [
        { 
            title: 'Camille THIOLLIER',
            subtitle:'Directrice musicale', 
            src: "/src/assets/camille.jpg", 
            mail:'c.thiollier@laposte.net',
            flex: 6 
        },
        { 
            title: 'Jean-Jacques MILLOT', 
            subtitle:'Président', 
            src: "/src/assets/jean-jacques.jpeg", 
            mail: 'jjmillot@yahoo.fr',
            flex: 6 
        },
      ],
    }),
  }
</script>