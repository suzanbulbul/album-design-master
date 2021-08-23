import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    datas: [],
  },
  mutations: {
    SET_DATA(state, value){
      state.datas = value;
    }
  },
  actions: {
    getDatas(state) {
      return state.datas;
    },
    addValueOnDatas(state, value) {
      state.datas.push(value);
    },
  },
  modules: {},
  plugins: [createLogger()],
});
