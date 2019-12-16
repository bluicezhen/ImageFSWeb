import Vue from 'vue'
import App from './App.vue'
import { Button, Menu, Message } from 'element-ui';

Vue.use(Button);
Vue.use(Menu);
Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
