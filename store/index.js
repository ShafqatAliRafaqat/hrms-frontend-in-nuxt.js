import Vuex from "vuex";
import axios from "axios";
import { baseURL } from "~/configs/urls";
import { setAuthToken, resetAuthToken } from "~/configs/auth";

const token = localStorage.getItem("x-access-token");
if (token) {
  setAuthToken(token);
} else {
  resetAuthToken();
}
axios.defaults.baseURL = baseURL.API_URL;
export default () => {
  return new Vuex.Store({
    state: {
      user: {
        bearerToken: null,
        isAuthenticated: false
      },
      alert: {
        snackbar: false,
        color: "",
        message: ""
      },
      loader: false,
      barColor: '#161b37',
      barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
      drawer: null,
      countries:[]
    },
    mutations: {
      SHOW_SNACKBAR(state, data) {
        state.alert = data;
      },
      SHOW_LOADER(state, data) {
        state.loader = data;
      },
      SET_USER(state, data) {
        state.user = {
          bearerToken: data.token,
          user: data.user,
          isAuthenticated: true
        };
      },
      RESET_USER(state) {
        state.user = {
          bearerToken: null,
          user: null,
          isAuthenticated: false
        };
      },
      SET_BAR_IMAGE (state, payload) {
        state.barImage = payload
      },
      SET_DRAWER (state, payload) {
        state.drawer = payload
      },

      COUNTRIES_LIST(state, data) {
        state.countries = data;
      },
    },
    actions: {
      async login({ dispatch }, data) {
      return axios({
          method: "POST",
          url: "/login",
          data : data
        }).then(response => {
          dispatch("setCurrentUser", response.data);
          return response;
        })
      },
      register ({ dispatch },data){
        return axios({
          method: "POST",
          url: "/register",
          data : data
        }).then(response => {
          dispatch("setCurrentUser", response.data);
          return response.data;
        })
      },
      setCurrentUser: function({ commit }, response) {
        console.log('set',response)
        if (response.data) {
          commit("SET_USER", response.data);
          setAuthToken(response.data.token);
          localStorage.setItem("x-access-token", response.data.token);
        }
      },
      reset({ commit }) {
        commit("RESET_USER");
        commit('SHOW_SNACKBAR', {snackbar:true,color:'green', message:'Successfully logged out'})
        resetAuthToken();
        localStorage.removeItem("x-access-token");
        localStorage.removeItem("vuex");
        return Promise.resolve();
      },
      list({commit},data){
        commit("SHOW_LOADER", true);
        return axios({
          method: "GET",
          url: data.path,
        })
      },
      create({dispatch,commit},data){
        return axios({
          method:'POST',
          url:data.path,
          data:data.data
        })
      },
      update({dispatch,commit},data){
        return axios({
          method:'POST',
          url:data.path,
          data:data.data
        })
      },
      delete({dispatch,commit},data){
        return axios({
          method:'POST',
          url: data.path,
          data:data
        })
      },
    },
  });
};
