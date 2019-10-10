<template>
    <v-container
        fluid
        class="pt-2"
    >
        <v-row>
            <hero-item-equip-unit label="WEAPON" />
            <hero-item-equip-unit label="HEAD" />
            <hero-item-equip-unit label="BODY" />
            <hero-item-equip-unit label="FEET" />
        </v-row>
    </v-container>
</template>

<script>
    import HeroItemEquipUnit from './HeroItemEquipUnit.vue';

    export default {
        name: 'HeroItemEquips',
        components: { HeroItemEquipUnit },
    };
</script>

<style scoped>

</style>
