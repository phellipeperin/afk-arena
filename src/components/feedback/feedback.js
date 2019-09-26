import EventBus from '../event/EventBus';

export default {
    name: 'feedback',
    methods: {
        showMessage(message, type) {
            this.$store.commit('app/setFeedbackMessage', {
                text: message, color: this.getColorByType(type), show: true, timeout: 5000,
            });
        },
        getColorByType(type = 'info') {
            let color = '';
            if (type === 'success') color = 'primary';
            else if (type === 'warning') color = 'error';
            return color;
        },
        askForConfirmation(title, text, successCallback, errorCallback, confirmText = 'Confirmar', cancelText = 'Cancelar') {
            EventBus.$emit('openConfirmationModal', {
                title,
                text,
                confirmText,
                cancelText,
                successCallback,
                errorCallback,
            });
        },
    },
};
