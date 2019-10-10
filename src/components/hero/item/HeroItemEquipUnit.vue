<template>
    <v-col
        cols="12"
        sm="6"
        class="py-0"
    >
        <v-checkbox
            v-model="status"
            hide-details
            class="mt-0"
            :color="color"
            :label="label"
            @change="change"
        />
    </v-col>
</template>

<script>
    export default {
        name: 'HeroItemEquipUnit',
        props: {
            label: { type: String, required: true },
            color: { type: String, default: 'primary' },
            initialStatus: { type: Boolean, default: false },
        },
        data() {
            return {
                status: false,
            };
        },
        created() {
            this.status = this.initialStatus;
        },
        methods: {
            change() { this.$emit('change', this.status); },
        },
    };
</script>

<style scoped>

</style>
