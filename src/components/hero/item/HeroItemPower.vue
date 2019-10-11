<template>
    <v-container
        fluid
        class="pt-0"
    >
        <v-row>
            <v-col
                cols="12"
                :sm="ascension >= 5 ? 7 : 12"
            >
                <v-select
                    v-model="ascension"
                    hide-details
                    :items="ascensionLevels"
                    :color="getAscensionColor()"
                    label="Ascension"
                    @change="changeAscension"
                />
            </v-col>
            <v-col
                v-if="ascension >= 5"
                cols="12"
                sm="5"
            >
                <v-select
                    v-model="signature"
                    hide-details
                    :items="signatureLevels"
                    :color="getAscensionColor()"
                    label="Signature"
                    @change="changeSignature"
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
            initialAscension: { type: Number, default: 0 },
            initialSignature: { type: Number, default: -1 },
        },
        data() {
            return {
                ascension: 0,
                signature: 0,
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
            this.signatureLevels.push({ text: 'None', value: -1 });
            this.signatureLevels.push({ text: '+0', value: 0 });
            for (let i = 1; i <= max; i++) {
                this.signatureLevels.push({ text: `+${i}`, value: i });
            }

            this.ascension = this.initialAscension || 0;
            this.signature = this.initialSignature || -1;
            this.$emit('changeAscensionColor', this.getAscensionColor());
        },
        methods: {
            changeAscension() {
                this.$emit('changeAscension', this.ascension);
                this.$emit('changeAscensionColor', this.getAscensionColor());
            },
            changeSignature() {
                this.$emit('changeSignature', this.signature);
            },
            getAscensionColor() {
                if (this.ascension === 1 || this.ascension === 2) return 'deep-purple darken-2';
                if (this.ascension === 3 || this.ascension === 4) return 'yellow accent-3';
                if (this.ascension === 5 || this.ascension === 6) return 'red darken-4';
                if (this.ascension === 7) return 'primary';
                if (this.ascension === 8) return 'pink';
                if (this.ascension === 9) return 'pink darken-1';
                if (this.ascension === 10) return 'pink darken-2';
                if (this.ascension === 11) return 'pink darken-3';
                if (this.ascension === 12) return 'pink darken-4';
                return 'blue-grey darken-1';
            },
        },
    };
</script>

<style scoped>

</style>
.
