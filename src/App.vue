<template>
    <v-app>
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
    import MessageContainer from './components/feedback/MessageContainer.vue';

    export default {
        name: 'App',
        components: { MessageContainer },
    };
</script>
