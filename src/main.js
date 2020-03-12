import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/reset.css';
import { Button, Select, Timeline, Card, Carousel, } from 'element-ui';

import * as echarts from 'echarts/lib/echarts';
// 引入 echarts 主模块。
import 'echarts/lib/echarts'
// 引入柱形图
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pictorialBar'
//// 引入提示框组件、标题组件、工具箱、legend组件。
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/legend'

Vue.prototype.$echarts =echarts;

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

Vue.component("el-btn", Button);
Vue.component("el-select", Select);
Vue.component("el-timeline", Timeline).component("el-card", Card).component("el-carousel", Carousel);

/* eslint-disable no-new */
new Vue({
	el: '#mySume',
	router,
	render: h => h(App)
})
