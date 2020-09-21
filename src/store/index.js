import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        activeCurrentNavigationLink: 1,
        services: [],
        subNavigate: [],
        offers: [],
        selectedOffers: []
    },
    getters: {
        ACTIVE_SUB_LINK: state => state.activeCurrentNavigationLink,
        SERVICES: state => state.services,
        SUB_NAVIGATE: state => state.subNavigate,
        OFFERS: state => state.offers,
        SELECTED_OFFERS: state => state.selectedOffers
    },
    mutations: {
        setServices: (state, services) => state.services = services,
        changeActiveSubLink: (state, link) => {
            state.activeCurrentNavigationLink = link;
        },
        setOffers: (state, offers) => {
            if(offers.length) {
                state.offers = offers;
            }else {
                state.offers = [];
                state.services.map(function (service, index) {
                    service.nav.map(function () {
                        if(index === 0) {
                            state.offers = service.nav[index].offers;
                        }
                    })
                })
            }
        },
        setSubNavigate: (state, navigate) => {
            if(navigate.length) {
                state.subNavigate = navigate;
                state.offers = navigate[0].offers;
            }else {
                state.subNavigate = [];
                state.services.map(function (service) {
                    service.nav.map(function (nav) {
                        state.subNavigate.push(nav)
                    })
                })
                state.offers = state.services[0].nav[0].offers;
            }
        },
        selectOffers: (state, arr) => {
            state.offers = arr[0];
            state.selectedOffers.push(state.offers[arr[1]])
        }
    },
    actions: {
        GET_SERVICES: ({commit}) => {
            axios.get('http://localhost:3000/services/')
                .then(response => {
                    commit('setServices', response.data);
                    commit('setSubNavigate', []);
                    commit('setOffers', []);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        SET_SUB_NAVIGATE({commit}, navigate) {
            commit('setSubNavigate', navigate);
            commit('changeActiveSubLink', 1);
        },
        CHANGE_SUB_LINK({commit}, arr) {
            commit('changeActiveSubLink', arr[1]);
            commit('setOffers', arr[0]);
        },
        SELECT_OFFERS({commit}, arr) {
            commit('selectOffers', arr);
        }
    }
});

export default store;
