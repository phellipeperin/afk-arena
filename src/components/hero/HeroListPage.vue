<template>
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
</template>

<script>
    import heroDatabase from './database/heroDatabase';

    import HeroItem from './item/HeroItem.vue';

    export default {
        name: 'HeroListPage',
        components: { HeroItem },
        mixins: [heroDatabase],
    };
</script>

<style scoped>

</style>
