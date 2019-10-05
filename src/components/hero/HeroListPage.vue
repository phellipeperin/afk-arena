<template>
    <v-container
        fluid
        class="pt-0"
    >
        <v-subheader>Filter</v-subheader>
        <v-divider />
        <hero-filter />


        <v-subheader>Heroes</v-subheader>
        <v-divider />
        <v-row>
            <v-col
                v-for="hero in heroList"
                :key="hero.name"
                cols="12"
                sm="4"
                md="3"
            >
                <hero-item :hero="hero" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import heroDatabase from './database/heroDatabase';

    import HeroFilter from './filter/HeroFilter.vue';
    import HeroItem from './item/HeroItem.vue';

    export default {
        name: 'HeroListPage',
        components: { HeroFilter, HeroItem },
        mixins: [heroDatabase],
    };
</script>

<style scoped>

</style>
