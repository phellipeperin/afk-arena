<template>
    <v-app-bar
        app
        dark
        flat
        color="primary"
    >
        <v-toolbar-title class="headline text-uppercase">
            <span class="font-weight-light">AFK Arena</span>
        </v-toolbar-title>

        <v-spacer />
        <v-toolbar-items>
            <v-btn
                text
                @click="goToHeroes"
            >
                <span>Heroes</span>
            </v-btn>
            <v-btn
                text
                @click="goToStatistics"
            >
                <span>Statistics</span>
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'MainHeader',
        methods: {
            goToHeroes() { this.$router.push('/heroes'); },
            goToStatistics() { this.$router.push('/statistics'); },
        },
    };
</script>

<style scoped>

</style>
