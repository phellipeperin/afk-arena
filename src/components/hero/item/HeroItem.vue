<template>
    <v-alert
        colored-border
        border="left"
        class="pa-0 ma-0"
        :color="ascensionColor"
    >
        <v-card
            outlined
            class="pl-1"
        >
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
                :initial-ascension="databaseInfo ? databaseInfo.ascension : 0"
                :initial-signature="databaseInfo ? databaseInfo.signature : 0"
                @changeAscension="setAscension"
                @changeSignature="setSignature"
                @changeAscensionColor="setAscensionColor"
            />
            <v-divider />
            <hero-item-equips
                :color="ascensionColor"
                :initial-equips="databaseInfo ? databaseInfo.equips || {} : {}"
                @changeEquip="setEquip"
            />
        </v-card>
    </v-alert>
</template>

<script>
    import firebase from 'firebase';

    import feedback from '../../feedback/feedback';

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
        mixins: [feedback],
        props: {
            hero: { type: Object, required: true },
            databaseInfo: { type: Object, default: () => {} },
        },
        data() {
            return {
                ascensionColor: '',
            };
        },
        methods: {
            setAscension(ascension) {
                const dbObj = {};
                dbObj[this.hero.id] = { ascension };
                this.saveToFirebase(dbObj);
            },
            setSignature(signature) {
                const dbObj = {};
                dbObj[this.hero.id] = { signature };
                this.saveToFirebase(dbObj);
            },
            setEquip(equip, status) {
                const dbObj = {};
                dbObj[this.hero.id] = { equips: {} };
                dbObj[this.hero.id].equips[equip] = status;
                this.saveToFirebase(dbObj);
            },
            setAscensionColor(color) { this.ascensionColor = color; },
            saveToFirebase(dbObj) {
                firebase.firestore().collection('heroes').doc(firebase.auth().currentUser.uid).set(dbObj, { merge: true })
                    .then(() => { this.showMessage('Successfully saved!', 'success'); })
                    .catch(() => { this.showMessage('Ouch! Something went wrong.', 'error'); });
            },
        },
    };
</script>

<style scoped>

</style>
