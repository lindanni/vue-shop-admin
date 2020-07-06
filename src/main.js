import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Aside,
  Main,
  Header,
  Row,
  Col,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import pAxios from '@/plugin/pAxios.js'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(pAxios)
Vue.use(Header)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.component(Message.name.Message)
Vue.prototype.$message = Message
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
