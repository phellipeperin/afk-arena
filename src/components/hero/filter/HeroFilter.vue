<template>
    <v-row>
        <v-col
            cols="12"
            md="3"
        >
            <v-text-field
                v-model="filter.text"
                label="Search..."
                class="mt-4"
            />
        </v-col>
        <v-col
            cols="12"
            md="4"
        >
            <v-select
                v-model="filter.faction"
                :items="factions"
                attach
                chips
                multiple
                label="Factions"
            />
        </v-col>
        <v-col
            cols="12"
            md="3"
        >
            <v-select
                v-model="filter.type"
                :items="types"
                attach
                chips
                multiple
                label="Types"
            />
        </v-col>
        <v-col
            cols="12"
            md="2"
        >
            <v-btn
                large
                dark
                depressed
                block
                color="primary"
                class="mt-3"
                @click="apply"
            >
                Apply
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'HeroFilter',
        data() {
            return {
                filter: {
                    text: '',
                    faction: [],
                    type: [],
                },
                factions: [
                    { text: 'Celestial', value: 'CELESTIAL' },
                    { text: 'Hypogean', value: 'HYPOGEAN' },
                    { text: 'Lightbearer', value: 'LIGHTBEARER' },
                    { text: 'Mauler', value: 'MAULER' },
                    { text: 'Wylder', value: 'WYLDER' },
                    { text: 'Graveborn', value: 'GRAVEBORN' },
                ],
                types: [
                    { text: 'Strength', value: 'STR' },
                    { text: 'Dexterity', value: 'DEX' },
                    { text: 'Intelligence', value: 'INT' },
                ],
            };
        },
        methods: {
            apply() {
                // TODO
            },
        },
    };
</script>

<style scoped>

</style>
