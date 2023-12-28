<template>
    <v-card title="Par mail" class="mx-auto my-2" max-width="500" elevation="10">
        <v-container fluid>
            <v-row>
                <v-col v-for="contact in contacts as any" :key="contact.titre">
                    <v-card :href="`mailto:${contact.mail}`">
                        <v-img :src="contact.image" :lazy-src="contact.placeholder" class="align-end text-white"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200" cover>
                            <v-card-title class="text-white">{{ contact.titre }}</v-card-title>
                            <v-card-subtitle class="text-white">{{ contact.soustitre }}</v-card-subtitle>
                        </v-img>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </v-card>

    <v-card class="my-5 mx-auto" max-width="500" title="Sur place" subtitle="Tous les vendredi de 20h à 22h"
        text="44 Rue des Prêles, 57000 Metz" elevation="10">

        <iframe title="Emplacement du lieu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.7583454653577!2d6.189896376553477!3d49.0722279713619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794dcfa28130123%3A0xd11a91602f6d8f90!2sCentre%20Familial%20Social%20et%20Culturel!5e0!3m2!1sfr!2sfr!4v1695498218193!5m2!1sfr!2sfr"
            width="600" height="450" style="border:0;" allowfullscreen="false" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>

    </v-card>
</template>

<script lang="ts">
import contacts from '@/assets/contact.json'
import { updateImagePropertiesList } from '@/utils'

updateImagePropertiesList(contacts, 'contacts')

export default {
    data: () => ({
        contacts: contacts
    }),
}
</script>