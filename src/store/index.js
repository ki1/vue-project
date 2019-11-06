import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deals: {
      'london': null,
      'national-deal': null
    },
    selectedDeal: null,
    pageCount: 0
  },
  mutations: {
    SET_DEALS: (state, { deals, pathKey }) => {
      state.deals[pathKey] = deals;
    },
    SET_PAGE_COUNT: (state, { newCount }) => {
      state.pageCount = newCount;
    },
    SET_SELECTED_DEAL: (state, { dealId }) => {
      state.selectedDeal = dealId;
    },
  },
  actions: {
    UPDATE_PAGE_COUNT: ({ commit, state }) => {
      console.log('UPDATE_PAGE_COUNT CALLED');
      return commit('SET_PAGE_COUNT', {
        newCount: state.pageCount + 1
      })
    },
    UPDATE_SELECTED_DEAL: ({ commit }, { newDealId }) => {
      console.log('UPDATE_SELECTED_DEAL CALLED');
      return commit('SET_SELECTED_DEAL', {
        dealId: newDealId
      })
    },
  },
  modules: {
  },
});
