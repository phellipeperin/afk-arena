<template>
    <div>
        <v-snackbar
            v-model="$store.state.app.feedbackMessage.show"
            multi-line
            bottom
            :color="$store.state.app.feedbackMessage.color"
            :timeout="$store.state.app.feedbackMessage.timeout"
        >
            {{ $store.state.app.feedbackMessage.text }}
            <v-btn
                color="white"
                text
                @click="$store.state.app.feedbackMessage.show = false"
            >
                Close
            </v-btn>
        </v-snackbar>

        <confirmation-modal
            ref="confirmationModal"
            :title="confirmationMessage.title"
            :text="confirmationMessage.text"
            :confirm-text="confirmationMessage.confirmText"
            :cancel-text="confirmationMessage.cancelText"
            :success-callback="confirmationMessage.successCallback"
            :error-callback="confirmationMessage.errorCallback"
        />
    </div>
</template>

<script>
    import EventBus from '../event/EventBus';

    import ConfirmationModal from './ConfirmationModal.vue';

    export default {
        name: 'MessageContainer',
        components: { ConfirmationModal },
        data() {
            return {
                confirmationMessage: {
                    title: '',
                    text: '',
                    successCallback: () => ({}),
                },
            };
        },
        created() {
            EventBus.$on('openConfirmationModal', (message) => {
                this.confirmationMessage = message;
                this.$refs.confirmationModal.open();
            });
        },
    };
</script>

<style scoped lang="scss">

</style>
