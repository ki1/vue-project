import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deals: null,
    selectedDeal: null,
    pageCount: 0
  },
  mutations: {
    SET_PAGE_COUNT: (state, { newCount }) => {
      state.pageCount = newCount;
    },
  },
  actions: {
    UPDATE_PAGE_COUNT: ({ commit, state }) => {
      console.log('PAGE COUNTER CALLED');
      return commit('SET_PAGE_COUNT', {
        newCount: state.pageCount + 1
      })
    },
  },
  modules: {
  },
});
