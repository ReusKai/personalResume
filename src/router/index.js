import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import firstPage from '@/components/firstPage'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		// {
		// 	path: '/1',
		// 	name: 'firstPage',
		// 	component: firstPage
		// }
	]
})
