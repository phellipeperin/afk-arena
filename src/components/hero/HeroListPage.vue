<template>
    <v-row>
        <v-col
            v-for="hero in heroList"
            :key="hero.name"
            cols="12"
            sm="4"
            md="3"
        >
            <v-card outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="headline">{{ hero.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ hero.title }}</v-list-item-subtitle>
                        <v-list-item-subtitle>
                            <img
                                v-if="hero.faction === 'LIGHTBEARER'"
                                src="https://vignette.wikia.nocookie.net/afk-arena/images/3/33/Lightbearer_emblem.png/revision/latest/scale-to-width-down/30?cb=20190417073153"
                                width="24"
                            >
                            <img
                                v-if="hero.faction === 'MAULER'"
                                src="https://vignette.wikia.nocookie.net/afk-arena/images/6/69/Mauler_emblem.png/revision/latest/scale-to-width-down/30?cb=20190417073730"
                                width="24"
                            >
                            <img
                                v-if="hero.faction === 'WYLDER'"
                                src="https://vignette.wikia.nocookie.net/afk-arena/images/7/70/Wilder_emblem.png/revision/latest/scale-to-width-down/30?cb=20190417073807"
                                width="24"
                            >
                            <img
                                v-if="hero.faction === 'GRAVEBORN'"
                                src="https://vignette.wikia.nocookie.net/afk-arena/images/0/06/Graveborn_emblem.png/revision/latest/scale-to-width-down/30?cb=20190417073841"
                                width="24"
                            >
                            <img
                                v-if="hero.faction === 'CELESTIAL'"
                                src="https://vignette.wikia.nocookie.net/afk-arena/images/6/62/Celestial_emblem.png/revision/latest/scale-to-width-down/30?cb=20190419043326"
                                width="24"
                            >
                            <img
                                v-if="hero.faction === 'HYPOGEAN'"
                                src="https://vignette.wikia.nocookie.net/afk-arena/images/6/6b/Hypogean_emblem.png/revision/latest/scale-to-width-down/30?cb=20190419043346"
                                width="24"
                            >

                            <img
                                v-if="hero.type === 'STR'"
                                src="https://vignette.wikia.nocookie.net/afk-arena/images/9/97/Warrior.png/revision/latest/scale-to-width-down/50?cb=20181211130624"
                                width="24"
                                class="ml-1"
                            >
                            <img
                                v-if="hero.type === 'DEX'"
                                src="https://vignette.wikia.nocookie.net/afk-arena/images/5/59/Rogue.png/revision/latest/scale-to-width-down/50?cb=20181211130613"
                                width="24"
                                class="ml-1"
                            >
                            <img
                                v-if="hero.type === 'INT'"
                                src="https://vignette.wikia.nocookie.net/afk-arena/images/2/20/Mage.png/revision/latest/scale-to-width-down/50?cb=20181211130557"
                                width="24"
                                class="ml-1"
                            >
                        </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar
                        size="80"
                    >
                        <img :src="hero.image">
                    </v-list-item-avatar>
                </v-list-item>

                <v-divider />

                <v-container
                    fluid
                    class="pt-0"
                >
                    <v-row>
                        <v-col
                            cols="12"
                            sm="7"
                        >
                            <v-select
                                hide-details
                                label="Ascension"
                            />
                        </v-col>
                        <v-col
                            cols="12"
                            sm="5"
                        >
                            <v-select
                                hide-details
                                label="Signature"
                            />
                        </v-col>
                    </v-row>
                </v-container>

                <v-divider />

                <v-container
                    fluid
                    class="pt-2"
                >
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            class="py-0"
                        >
                            <v-checkbox
                                hide-details
                                class="mt-0"
                                label="WEAPON"
                            />
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            class="py-0"
                        >
                            <v-checkbox
                                hide-details
                                class="mt-0"
                                label="HEAD"
                            />
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            class="py-0"
                        >
                            <v-checkbox
                                hide-details
                                class="mt-0"
                                label="BODY"
                            />
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            class="py-0"
                        >
                            <v-checkbox
                                hide-details
                                class="mt-0"
                                label="FEET"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import heroDatabase from './database/heroDatabase';

    export default {
        name: 'HeroListPage',
        mixins: [heroDatabase],
    };
</script>

<style scoped>

</style>
