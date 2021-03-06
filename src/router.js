import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import store from './store/store';

import LoginPage from './components/login/LoginPage.vue';
import SignUpPage from './components/sign-up/SignUpPage.vue';

import HeroListPage from './components/hero/HeroListPage.vue';

Vue.use(Router);

const router = new Router({
    routes: [
        // Public
        { path: '/login', name: 'login', component: LoginPage },
        { path: '/sign-up', name: 'signUp', component: SignUpPage },
        { path: '*', redirect: '/' },
        { path: '/', redirect: '/login' },

        // Logged
        {
            path: '/hero',
            name: 'hero',
            component: HeroListPage,
            meta: { requiresAuth: true },
        },
    ],
});

router.beforeEach((to, from, next) => {
    const { currentUser } = firebase.auth();
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) {
        next('login');
        store.commit('user/user', null);
    } else if (!requiresAuth && currentUser) {
        next('hero');
        store.commit('user/user', currentUser);
    } else {
        next();
        store.commit('user/user', currentUser);
    }
});

export default router;
