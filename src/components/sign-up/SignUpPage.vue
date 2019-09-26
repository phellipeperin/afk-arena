<template>
    <v-row
        justify="center"
        class="mt-8"
    >
        <v-col
            cols="12"
            md="4"
            class="text-center"
        >
            <h6 class="display-1">New Account</h6>

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
                @click="register"
            >
                Sign-up
            </v-btn>

            <v-btn
                block
                text
                color="primary"
                class="mt-2"
                @click="goToLogin"
            >
                Go to Login
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
            register() {
                firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then(() => {
                    this.showMessage('Account created successfully! :)', 'success');
                    this.$router.push('/hero');
                }).catch((error) => {
                    this.showMessage(error.message, 'warning');
                });
            },
            goToLogin() { this.$router.push('/login'); },
        },
    };
</script>

<style scoped>

</style>
