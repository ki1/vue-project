import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  watch:{
    '$route' (to, from){
      this.$store.dispatch('UPDATE_PAGE_COUNT');
    }
  },
  render: h => h(App),
}).$mount('#app');
