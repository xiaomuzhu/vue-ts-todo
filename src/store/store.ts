import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import { state, State } from "./state";
import { mutations } from "./mutations";
import { getters } from "./getters";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  state,
  mutations,
  getters
});
