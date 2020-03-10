import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/reset.css';
import { Button, Select } from 'element-ui';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

Vue.component("el-btn", Button);
Vue.component("el-select", Select);

/* eslint-disable no-new */
new Vue({
	el: '#mySume',
	router,
	render: h => h(App)
})
