<template>
    <v-app-bar
        app
        dark
        color="primary"
    >
        <v-toolbar-title class="headline text-uppercase">
            <span>AFK Arena</span>
        </v-toolbar-title>

        <v-spacer />
        <v-btn
            text
            @click="goToHeroes"
        >
            <span class="mr-2">Heróis</span>
        </v-btn>

        <v-btn
            text
            @click="goToStatistics"
        >
            <span class="mr-2">Estatísticas</span>
        </v-btn>
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
