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
        <v-toolbar-items v-if="$store.state.user.user">
            <v-btn
                text
                @click="logout"
            >
                <span>Logout</span>
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: 'MainHeader',
        methods: {
            logout() {
                firebase.auth().signOut().then(() => {
                    this.$router.replace('/');
                });
            },
        },
    };
</script>

<style scoped>

</style>
