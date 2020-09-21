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
        selectedOffers: [],
        subtotalService: 0
    },
    getters: {
        ACTIVE_SUB_LINK: state => state.activeCurrentNavigationLink,
        SERVICES: state => state.services,
        SUB_NAVIGATE: state => state.subNavigate,
        OFFERS: state => state.offers,
        SELECTED_OFFERS: state => state.selectedOffers,
        SUB_TOTAL_SERVICE: state => state.subtotalService
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
            let offer = state.offers[arr[1]];
            if(offer.selected === true) {
                state.offers = arr[0];
                state.selectedOffers.push(offer);
                state.subtotalService += offer.price;
            }else {
                for(let item in state.selectedOffers) {
                    if(state.selectedOffers[item].idOffers === offer.idOffers) {
                        state.selectedOffers.splice(item, 1);
                        state.subtotalService -= offer.price;
                    }
                }
            }
        },
        removeSelectedOffers: (state, index) => {
            let selectId = state.selectedOffers[index].idOffers;
            state.subtotalService -= state.selectedOffers[index].price;
            state.selectedOffers.splice(index, 1);
            for(let service of state.services) {
                for(let nav of service.nav) {
                    for(let offer of nav.offers) {
                        if(offer.idOffers === selectId) {
                            offer.selected = false;
                        }
                    }
                }
            }
        },
        orderServices: state => {
            state.activeCurrentNavigationLink = 1;
            state.subtotalService = 0;
            state.selectedOffers = [];
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
        },
        REMOVE_SELECTED_OFFERS({commit}, index) {
            commit('removeSelectedOffers', index);
        },
        ORDER_SERVICES({commit}) {
            commit('orderServices');
            commit('setSubNavigate', []);
        }
    }
});

export default store;
