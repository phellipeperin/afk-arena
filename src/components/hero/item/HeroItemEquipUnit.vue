<template>
    <v-col
        cols="12"
        sm="6"
        class="py-0"
    >
        <v-checkbox
            hide-details
            class="mt-0"
            :color="color"
            :label="label"
        />
    </v-col>
</template>

<script>
    export default {
        name: 'HeroItemEquipUnit',
        props: {
            label: { type: String, required: true },
            color: { type: String, default: 'primary' },
        },
    };
</script>

<style scoped>

</style>
