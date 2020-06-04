import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  //showing things, not mutating state
  getters: {
    tripleCounter: state => {
      return state.counter * 3;
    }
  },
  //mutating the state
  //mutations are always synchronous
  mutations: {
    increment: (state, num) => {
      state.counter += num;
    }
  },
  //commits the mutation, it's asynchronous
  actions: {
    incrementAsync({ commit }, num) {
      setTimeout(() => {
        commit("increment", num);
      }, 1000);
    }
  }
});
