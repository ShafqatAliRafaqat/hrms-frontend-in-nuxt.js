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
      barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
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
          return response.data;
        }).catch(error => {
          console.log(error)
        });
      },
      register ({ dispatch },data){
        return axios({
          method: "POST",
          url: "/register",
          data : data
        }).then(response => {
          dispatch("setCurrentUser", response.data);
          return response.data;
        }).catch(error => {
          console.log(error)
        })
      },
      setCurrentUser: function({ commit }, response) {
        if (response.data) {
          commit("SET_USER", response.data);
          setAuthToken(response.data);
          localStorage.setItem("x-access-token", response.data.token);
        }
      },
      reset({ commit }) {
        commit("RESET_USER");
        commit('SHOW_SNACKBAR', {snackbar:true,color:'green', message:'Successfully logged out'})
        resetAuthToken();
        // cookies.remove('x-access-token')
        localStorage.removeItem("x-access-token");
        localStorage.removeItem("vuex");
        return Promise.resolve();
      },
      // countryList({commit}){
      //    commit("SHOW_LOADER", true);
      //    axios({
      //     method: "GET",
      //     url: "/all_countries",
      //   }).then(response => {
      //     commit("COUNTRIES_LIST", response.data.data);
      //     commit("SHOW_LOADER", false);
      //   }).catch(error => {
      //      commit('SHOW_SNACKBAR', {snackbar:true,color:'pink', message:error.message})
      //   });
      // },
      list({commit},data){
        commit("SHOW_LOADER", true);
        return axios({
          method: "GET",
          url: data.path,
        }).then(response => {
          return response;
        }).catch(error => {
          commit('SHOW_SNACKBAR', {snackbar:true,color:'pink', message:error.message})
        });
      },
      create({dispatch,commit},data){
        return axios({
          method:'POST',
          url:data.path,
          data:data.data
        }).then(response =>{
          return response;
        }).catch(error => {
            commit('SHOW_SNACKBAR', {snackbar:true,color:'pink', message:error})
        });
      },
      update({dispatch,commit},data){
        return axios({
          method:'Put',
          url:data.path,
          data:data.data
        }).then(response =>{
          return response;
        }).catch(error => {
            commit('SHOW_SNACKBAR', {snackbar:true,color:'pink', message:error.message})
        });
      },
      delete({dispatch,commit},data){
        return axios({
          method:'POST',
          url: data.path,
          data:data
        }).then(response =>{
          return response;
        }).catch(error => {
            commit('SHOW_SNACKBAR', {snackbar:true,color:'yellow', message:error.message})
        });
      },



    },
  });
};