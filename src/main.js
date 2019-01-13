import Vue from 'vue'
import App from './App.vue';

import router from './router';
import store from './store';
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

Vue.filter("currency", (value) => new Intl.NumberFormat("es-US",
  { style: "currency", currency: "USD"}).format(value));

Vue.use(Vuelidate);
  
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
