import Vue from 'vue'

// add translations directly to the application
Vue.i18n.add('es', require('../i18n/es.json'))
Vue.i18n.add('br', require('../i18n/br.json'))
Vue.i18n.add('en', require('../i18n/en.json'))

// set the start locale to use
Vue.i18n.set('es')

// set fallback for non-translated strings
Vue.i18n.fallback('es')
