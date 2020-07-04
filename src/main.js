import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import { Button, Form, FormItem, Input, Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import pAxios from '@/plugin/pAxios.js'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(pAxios)
Vue.component(Message.name.Message)
Vue.prototype.$message = Message
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
