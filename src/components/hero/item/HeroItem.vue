<template>
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
        <hero-item-power :faction="hero.faction" />
        <v-divider />
        <hero-item-equips />
    </v-card>
</template>

<script>
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
    };
</script>

<style scoped>

</style>
