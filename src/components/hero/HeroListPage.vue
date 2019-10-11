<template>
    <v-container
        fluid
        class="pt-0"
    >
        <v-subheader>Filter</v-subheader>
        <v-divider />
        <hero-filter @apply="applyFilter" />


        <v-subheader>Heroes</v-subheader>
        <v-divider />
        <v-row>
            <v-col
                v-for="hero in filteredHeroList"
                :key="hero.name"
                cols="12"
                sm="4"
                md="3"
            >
                <hero-item
                    :hero="hero"
                    :database-info="database[hero.id]"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import firebase from 'firebase';

    import heroDatabase from './database/heroDatabase';

    import HeroFilter from './filter/HeroFilter.vue';
    import HeroItem from './item/HeroItem.vue';

    export default {
        name: 'HeroListPage',
        components: { HeroFilter, HeroItem },
        mixins: [heroDatabase],
        data() {
            return {
                filteredHeroList: [],
                database: {},
            };
        },
        created() {
            this.filteredHeroList = Object.freeze(this.heroList);
            firebase.firestore().collection('heroes').doc(firebase.auth().currentUser.uid).get()
                .then((doc) => {
                    if (doc.exists) this.database = doc.data();
                });
        },
        methods: {
            applyFilter(filter) {
                this.filteredHeroList = Object.freeze(this.heroList.filter((elem) => {
                    const text = filter.text ? filter.text.toLowerCase() : '';
                    const hasText = !text || (elem.name.toLowerCase().indexOf(text) !== -1 || elem.title.toLowerCase().indexOf(text) !== -1);
                    const hasFaction = Boolean(filter.faction.length && filter.faction.includes(elem.faction));
                    const hasType = Boolean(filter.type.length && filter.type.includes(elem.type));
                    return hasText && hasFaction && hasType;
                }));
            },
        },
    };
</script>

<style scoped>

</style>
