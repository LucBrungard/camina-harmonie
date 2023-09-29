<template>
    <v-card
        max-width="500"
        class="mx-auto">
        <v-container>
        <v-row
            v-for="concert in concerts"
            :key="concert.date">
            <v-col>
                <v-card
                    height="300">
                    <v-card-title>{{ concert.titre }}</v-card-title>
                    <v-card-subtitle>Le {{ concert.date }}, à {{ concert.ville }}</v-card-subtitle>

                    <v-card-text>{{ concert.description }}</v-card-text>
                </v-card>
            </v-col>

            <v-col>
                <v-img
                    :src="concert.affiche"
                    class="align-end text-white"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="300"
                    cover
                ></v-img>
            </v-col>
        </v-row>
        </v-container>
    </v-card>
</template>

<script lang="ts">
    import concerts from '@/assets/concerts.json'

    for (const concert of concerts) {
        concert.affiche = `${import.meta.env.BASE_URL}/${concert.affiche}`
    }

    export default {
        data: () => ({
            concerts: concerts
        })
    }
</script>