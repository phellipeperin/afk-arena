import Vue from 'vue';
import Vuex from 'vuex';

import appStore from './appStore';
import userStore from './userStore';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        app: appStore,
        user: userStore,
    },
});
