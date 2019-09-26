import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;

let app = '';

const firebaseConfig = {
    apiKey: 'AIzaSyD4fsuMn_A_FnwSxf4tfQbixQRVfjSU2k4',
    authDomain: 'afk-arena-a1f6a.firebaseapp.com',
    databaseURL: 'https://afk-arena-a1f6a.firebaseio.com',
    projectId: 'afk-arena-a1f6a',
    storageBucket: '',
    messagingSenderId: '1049422512770',
    appId: '1:1049422512770:web:ab19dfc9e5bbd4e38eaa9b',
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            vuetify,
            router,
            store,
            render: h => h(App),
        }).$mount('#app');
    }
});
