import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const state = {
  companyName: "Enes Budak",
  userToken: localStorage.getItem("token") || null,
  isLogged: localStorage.getItem("token") ? true : false
};

const getters = {
  getCompanyName: state => state.companyName,
  getUserToken: state => state.userToken
};

const mutations = {
  setLogin(state, token) {
    state.userToken = token;
    state.isLogged = true;
  },
  setLogout(state) {
    state.isLogged = false;
    state.userToken = null;
  }
};

const actions = {
  LOGIN({ commit }, payload) {
    const url = "user/login";
    return new Promise((resolve, reject) => {
      axios
        .post(url, payload)
        .then(({ data, status }) => {
          if (status === 200) {
            const token = data.token;
            resolve(true);

            localStorage.setItem("token", token);
            commit("setLogin", token);
          }
        })
        .catch(error => {
          commit("setLogout");
          reject(error);
        });
    });
  },
  LOGOUT({ commit }) {
    commit("setLogout");
    localStorage.removeItem("token");
  }
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
