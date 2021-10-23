import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import loginComponent from './resources/login/loginComponent'
import cadastroComponent from './resources/cadastro/cadastroComponent'

Vue.config.productionTip = false

Vue.use(
  VueRouter,
  BootstrapVue,
  IconsPlugin,
)

const routes = [
  { path: '/login', name: 'login', component: loginComponent },
  { path: '/cadastro', name: 'cadastro', component: cadastroComponent },
]

const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
