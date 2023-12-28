<template>
    <v-card>
        <v-card-title>{{ titre }}</v-card-title>
        <v-card-text>{{ description }}</v-card-text>
        <div v-if="images">
            <v-img v-for="n in images.length" :key="n" 
                :src="images[n-1]"
                height="300px" />
        </div>
        <div v-if="enfants">
            <instrument-tree 
                v-for="enfant in enfants" :key="enfant.titre"
                :titre="enfant.titre"
                :description="enfant.description"
                :images="enfant.images"
                :placeholders="enfant.placeholders"
                :enfants="enfant.enfants" />
        </div>
    </v-card>
</template>

<script lang="ts" setup>

    interface InstrumentType {
        titre: string,
        description: string,
        images?: string[],
        placeholders?: string[],
        enfants?: InstrumentType[]
    }

    defineProps<InstrumentType>()
</script>

<script lang="ts">
    export default {
        name: 'instrument-tree',
    }
</script>