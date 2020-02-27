import Vue from 'vue'
import Vuex from 'vuex'
// import app from './modules/app'        // Modules no descomentar
// import * as getters from './getters'   // Getters  no descomentar
// import VuexI18n from 'vuex-i18n'       // Activar para cargar vuex i18n

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  getters : {},
  modules: {},
  state: {},
  mutations: {},
})

// Vue.use(VuexI18n.plugin, store) // Activar para usar multi-idiomas

export default store