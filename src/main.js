import {
  Button, Select, Card, Tabs, TabPane, Form, FormItem, Input, Radio, RadioGroup,
} from 'element-ui';
import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Card.name, Card);
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(Radio.name, Radio);
Vue.component(RadioGroup.name, RadioGroup);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
