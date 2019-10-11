/* eslint-disable no-param-reassign */
export default {
    namespaced: true,
    state: {
        user: null,
    },
    mutations: {
        user(state, payload) { state.user = payload; },
    },
};
