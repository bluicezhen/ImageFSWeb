import Vue from 'vue'
import App from './App.vue'
import { Button, Card, Col, Header, Image, Message, Row } from 'element-ui';

Vue.use(Button);
Vue.use(Card);
Vue.use(Col);
Vue.use(Header);
Vue.use(Image);
Vue.use(Row);
Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
