import Vue from 'vue'
import App from './App.vue'
import router from './router'

import  { defineCustomElements }  from 'mn-progress-bar/dist/loader';

Vue.config.productionTip = false

// Let vue know we have custom components..
Vue.config.ignoredElements = ['mn-progress-bar'];
// Bind the custom elements to the window object..
defineCustomElements(window);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
