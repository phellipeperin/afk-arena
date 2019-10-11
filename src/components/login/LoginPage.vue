<template>
    <v-row
        justify="center"
        class="mt-6"
    >
        <v-col
            cols="12"
            md="4"
            class="text-center"
        >
            <h6 class="display-1 mb-4">LOGIN</h6>

            <v-text-field
                v-model="user.email"
                label="Email"
            />

            <v-text-field
                v-model="user.password"
                label="Password"
                type="password"
            />

            <v-btn
                block
                depressed
                large
                color="primary"
                @click="login"
            >
                Login
            </v-btn>

            <v-btn
                block
                text
                color="primary"
                class="mt-2"
                @click="goToSignUp"
            >
                Go to Sign-up
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
    import firebase from 'firebase';

    import feedback from '../feedback/feedback';

    export default {
        name: 'LoginPage',
        mixins: [feedback],
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                },
            };
        },
        methods: {
            login() {
                firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password).then(() => {
                    this.$router.push('/hero');
                }).catch((error) => {
                    this.showMessage(error.message, 'warning');
                });
            },
            goToSignUp() { this.$router.push('/sign-up'); },
        },
    };
</script>

<style scoped>

</style>
