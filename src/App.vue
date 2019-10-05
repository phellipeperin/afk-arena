<template>
    <v-app>
        <main-header />

        <v-content>
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <router-view />
                    </v-col>
                </v-row>
            </v-container>
        </v-content>

        <message-container />
    </v-app>
</template>

<script>
    import MainHeader from './components/header/MainHeader.vue';
    import MessageContainer from './components/feedback/MessageContainer.vue';

    export default {
        name: 'App',
        components: { MainHeader, MessageContainer },
    };
</script>
