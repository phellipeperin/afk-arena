<template>
    <v-alert
        colored-border
        border="left"
        class="pa-0 ma-0"
        :color="ascensionColor"
    >
        <v-card outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline">{{ hero.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ hero.title }}</v-list-item-subtitle>
                    <v-list-item-subtitle>
                        <hero-item-faction :faction="hero.faction" />
                        <hero-item-type :type="hero.type" />
                    </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar size="80">
                    <img :src="hero.image">
                </v-list-item-avatar>
            </v-list-item>

            <v-divider />
            <hero-item-power
                :faction="hero.faction"
                @changeAscension="setAscension"
                @changeSignature="setSignature"
                @changeAscensionColor="setAscensionColor"
            />
            <v-divider />
            <hero-item-equips
                :color="ascensionColor"
            />
        </v-card>
    </v-alert>
</template>

<script>
    import firebase from 'firebase'; // TODO must go to a mixin or store

    import HeroItemFaction from './HeroItemFaction.vue';
    import HeroItemType from './HeroItemType.vue';
    import HeroItemPower from './HeroItemPower.vue';
    import HeroItemEquips from './HeroItemEquips.vue';

    export default {
        name: 'HeroItem',
        components: {
            HeroItemFaction,
            HeroItemType,
            HeroItemPower,
            HeroItemEquips,
        },
        props: {
            hero: { type: Object, required: true },
        },
        data() {
            return {
                ascensionColor: '',
            };
        },
        methods: {
            setAscension(ascension) {
                // const { currentUser } = firebase.auth();
                // const db = {};
                //
                // db.collection('heroes').doc(currentUser.email).set({
                //     name: 'Los Angeles',
                //     state: 'CA',
                //     country: 'USA',
                // }).then(() => {
                //     console.log('Document successfully written!');
                // }).catch((error) => {
                //     console.error('Error writing document: ', error);
                // });
            },
            setSignature(signature) {

            },
            setAscensionColor(color) { this.ascensionColor = color; },
        },
    };
</script>

<style scoped>

</style>
