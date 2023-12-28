<template>
  <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="accueil">Présentation de l'orchestre</v-tab>
      <v-tab value="planning">Concerts à venir</v-tab>
      <v-tab value="rejoindre">Nous rejoindre</v-tab>
      <v-tab value="contact">Nous trouver</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="accueil">
          <Accueil />
        </v-window-item>

        <v-window-item value="planning">
          <Planning />
        </v-window-item>

        <v-window-item value="rejoindre">
          <Rejoindre />
        </v-window-item>

        <v-window-item value="contact">
          <Contact />
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import Accueil from './tabs/Accueil.vue'
  import Contact from './tabs/Contact.vue'
  import Planning from './tabs/Planning.vue'
  import Rejoindre from './tabs/Rejoindre.vue';

  export default {
    data: () => ({
        tab: null,
    }),
    components: { Accueil, Planning, Contact, Rejoindre }
}
</script>