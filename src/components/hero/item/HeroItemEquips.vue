<template>
    <v-container
        fluid
        class="pt-2"
    >
        <v-row>
            <v-col
                cols="12"
                sm="6"
                class="py-0"
            >
                <v-checkbox
                    hide-details
                    class="mt-0"
                    color="primary"
                    label="WEAPON"
                />
            </v-col>
            <v-col
                cols="12"
                sm="6"
                class="py-0"
            >
                <v-checkbox
                    hide-details
                    class="mt-0"
                    color="primary"
                    label="HEAD"
                />
            </v-col>
            <v-col
                cols="12"
                sm="6"
                class="py-0"
            >
                <v-checkbox
                    hide-details
                    class="mt-0"
                    color="primary"
                    label="BODY"
                />
            </v-col>
            <v-col
                cols="12"
                sm="6"
                class="py-0"
            >
                <v-checkbox
                    hide-details
                    class="mt-0"
                    color="primary"
                    label="FEET"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'HeroItemEquips',
    };
</script>

<style scoped>

</style>
