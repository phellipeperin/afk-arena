<template>
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
                    :items="ascensionLevels"
                    label="Ascension"
                />
            </v-col>
            <v-col
                cols="12"
                sm="5"
            >
                <v-select
                    hide-details
                    :items="signatureLevels"
                    label="Signature"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'HeroItemPower',
        props: {
            faction: { type: String, required: true },
        },
        data() {
            return {
                ascensionLevels: [
                    { text: 'None', value: 0 },
                    { text: 'Elite', value: 1 },
                    { text: 'Elite+', value: 2 },
                    { text: 'Legendary', value: 3 },
                    { text: 'Legendary+', value: 4 },
                    { text: 'Mythic', value: 5 },
                    { text: 'Mythic+', value: 6 },
                    { text: 'Ascended', value: 7 },
                    { text: 'Ascended 1*', value: 8 },
                    { text: 'Ascended 2*', value: 9 },
                    { text: 'Ascended 3*', value: 10 },
                    { text: 'Ascended 4*', value: 11 },
                    { text: 'Ascended 5*', value: 12 },
                ],
                signatureLevels: [],
            };
        },
        created() {
            const max = (this.faction === 'CELESTIAL' || this.faction === 'HYPOGEAN') ? 40 : 30;
            this.signatureLevels.push({ text: 'None', value: 0 });
            for (let i = 1; i <= max; i++) {
                this.signatureLevels.push({ text: `+${i}`, value: i });
            }
        },
    };
</script>

<style scoped>

</style>
