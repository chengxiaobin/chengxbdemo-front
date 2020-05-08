// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import axios from 'axios'
import qs from 'qs'
import store from './store'


Vue.prototype.$qs = qs
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://192.168.199.244:8090/userinfo'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.config.productionTip = false
Vue.use(ViewUI);
/* eslint-disable no-new */


router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.userinfo.name) {
      next()
    } else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
}
)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  // 注意这里
  store,
  components: { App },
  template: '<App/>'
})