import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './registerServiceWorker' // Activar para funciones PWA
// import './plugins/i18n'          // Activar para exportar multi-idiomas

// import {Notify} from 'mdbvue'
// import Vue2TouchEvents from 'vue2-touch-events'

// Vue.use(Notify)
// Vue.use(Vue2TouchEvents)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
