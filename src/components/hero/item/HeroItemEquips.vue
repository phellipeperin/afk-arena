<template>
    <v-container
        fluid
        class="pt-2"
    >
        <v-row>
            <hero-item-equip-unit
                :color="color"
                label="WEAPON"
            />
            <hero-item-equip-unit
                :color="color"
                label="HEAD"
            />
            <hero-item-equip-unit
                :color="color"
                label="BODY"
            />
            <hero-item-equip-unit
                :color="color"
                label="FEET"
            />
        </v-row>
    </v-container>
</template>

<script>
    import HeroItemEquipUnit from './HeroItemEquipUnit.vue';

    export default {
        name: 'HeroItemEquips',
        components: { HeroItemEquipUnit },
        props: {
            color: { type: String, default: 'primary' },
        },
    };
</script>

<style scoped>

</style>
