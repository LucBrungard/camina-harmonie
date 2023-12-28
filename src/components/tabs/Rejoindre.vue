<template>
  <div>
    <p class="ml-3 my-4">Notre orchestre vous intéresse et vous voulez nous rejoindre ? Alors vous êtes sur la bonne page
      ! Nous vous donnons toutes les informations que vous recherchez ici !</p>

    <div class="text-center d-flex ma-2">
      <v-btn class="mx-1" @click="ouvrirTous">
        Ouvrir tous les panels
      </v-btn>
      <v-btn class="mx-1" @click="fermerTous">
        Fermer tous les panels
      </v-btn>
    </div>

    <v-expansion-panels v-model="panel" multiple class="pa-4">

      <v-expansion-panel value="1" elevation="5" class="my-3">
        <v-expansion-panel-title>Qu'est-ce qu'un orchestre de musique ?</v-expansion-panel-title>
        <v-expansion-panel-text>
          C'est un ensemble d'instrumentistes réunis pour réaliser des oeuvres musicales.
          <v-img :src="organisation" height="500px" />
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel value="2" elevation="5" class="my-3">
        <v-expansion-panel-title>Quelle est la différence entre un orchestre d'harmonie et un orchestre symphonique
          ?</v-expansion-panel-title>
        <v-expansion-panel-text>
          L'orchestre symphonique est une <b>extension</b> de l'orchestre d'harmonie. Il est composé d'<b>instruments à
            cordes</b>. L'orchestre d'harmonie n'en possède pas, il n'est composé que d'<b>instruments à vent</b> et de
          <b>percussions</b>.

          <v-container fluid>
            <v-row>
              <v-col cols="6">
                <v-card class="text-center">
                  <v-img :src="orchestreSymphonique" height="300px"></v-img>
                  <v-card-title>Orchestre symphonique</v-card-title>
                </v-card>
              </v-col>

              <v-col cols="6">
                <v-card class="text-center">
                  <v-img :src="orchestreHarmonie" height="300px"></v-img>
                  <v-card-title>Orchestre d'harmonie</v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel value="3" elevation="5" class="my-3">
        <v-expansion-panel-title>Et Camina Harmonie,qu'est-ce que c'est exactement ?</v-expansion-panel-title>
        <v-expansion-panel-text>
          Camina Harmonie est un <b>orchestre d'harmonie</b> (donc composé uniquement d'instruments à vent et de
          percussions).
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel value="4" elevation="5" class="my-3">
        <v-expansion-panel-title>Qui peut venir à l'orchestre ?</v-expansion-panel-title>
        <v-expansion-panel-text>
          <b>Tout le monde</b>, à partir du moment où elle pratique d'un instrument de musique à vent ou de percussion.
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel value="5" elevation="5" class="my-3">
        <v-expansion-panel-title>Quel niveau musical est nécessaire pour rentrer à l'orchestre ?</v-expansion-panel-title>
        <v-expansion-panel-text>
          <b>Aucun</b> ! Nous acceptons les instrumentistes <b>débutants</b>, comme les <b>experts</b>. Nous recommandons
          toutefois que vous ayez des cours de musique en parallèle si vous êtes débutants.
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel value="6" elevation="5" class="my-3">
        <v-expansion-panel-title>Pourquoi nous rejoindre ?</v-expansion-panel-title>
        <v-expansion-panel-text>
          Et bien tout simplement <b>pour vous faire plaisir</b> ! L'objectif de notre orchestre est de regrouper des
          instrumentistes dans des <b>moments conviviaux</b> pour pratiquer la passion qui nous anime, la musique.
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel value="7" elevation="5" class="my-3">
        <v-expansion-panel-title color="accent">Comment nous rejoindre ?</v-expansion-panel-title>
        <v-expansion-panel-text>
          Vous pouvez soit nous contacter par mail, soit venir nous voir directement sur place lors de nos répétitions.
          Pour plus de détails, allez voir la page d'à côté, "<b>Nous trouver</b>".
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- <v-expansion-panel value="8" elevation="5" class="my-3">
        <v-expansion-panel-title>Vous avez des doutes si votre instrument peut s'intégrer ?</v-expansion-panel-title>
        <v-expansion-panel-text>
          Voici une liste de tous les instruments traditionnels dans un orchestre d'harmonie :
          <instrument-tree v-for="instrument in instruments as any" :key="instrument.titre" :titre="instrument.titre"
            :description="instrument.description" :images="instrument.images" :placeholders="instrument.placeholders"
            :enfants="instrument.enfants">
          </instrument-tree>
        </v-expansion-panel-text>
      </v-expansion-panel> -->

    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import InstrumentTree from "../InstrumentTree.vue";
import instruments from "@/assets/instruments.json"
import organisation from "@/assets/organisation.jpg"
import orchestreHarmonie from "@/assets/orchestre-harmonie.jpg"
import orchestreSymphonique from "@/assets/orchestre-symphonique.jpg"
import { updateImagePropertiesList } from "../../utils";

updateImagePropertiesList(instruments, 'instruments')

const all = Array.from({ length: 100 }, (_, index) => (index + 1).toString());

export default {
  data() {
    return {
      panel: all,
      organisation,
      orchestreHarmonie,
      orchestreSymphonique,
      instruments
    }
  },
  methods: {
    ouvrirTous() {
      this.panel = all
    },
    fermerTous() {
      this.panel = []
    },
  },
  components: { InstrumentTree }
}

</script>

<style>
img {
  height: 200px;
}
</style>
