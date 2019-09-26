/* eslint-disable no-param-reassign */
export default {
    namespaced: true,
    state: {
        request: {
            active: 0,
        },
        feedbackMessage: {},
    },
    mutations: {
        // Request
        openRequest(state) { state.request.active++; },
        closeRequest(state) { state.request.active--; },

        // Feedback
        setFeedbackMessage(state, payload) { state.feedbackMessage = payload; },
    },
};
