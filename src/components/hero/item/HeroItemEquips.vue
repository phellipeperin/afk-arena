<template>
    <v-container
        fluid
        class="pt-2"
    >
        <v-row>
            <hero-item-equip-unit
                v-for="equip in equipList"
                :key="equip"
                :color="color"
                :label="equip"
                :initial-status="initialEquips[equip]"
                @change="(status) => changeEquip(equip, status)"
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
            initialEquips: { type: Object, default: () => {} },
        },
        data() {
            return {
                equipList: ['WEAPON', 'BODY', 'HEAD', 'FEET'],
            };
        },
        methods: {
            changeEquip(equip, status) { this.$emit('changeEquip', equip, status); },
        },
    };
</script>

<style scoped>

</style>
