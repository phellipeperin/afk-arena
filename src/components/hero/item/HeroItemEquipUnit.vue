<template>
    <v-col
        cols="12"
        sm="6"
        class="py-0"
    >
        <v-checkbox
            hide-details
            class="mt-0"
            color="primary"
            :label="label"
        />
    </v-col>
</template>

<script>
    export default {
        name: 'HeroItemEquipUnit',
        props: {
            label: { type: String, default: '' },
        },
    };
</script>

<style scoped>

</style>
