// 引入路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Person from '../pages/Person/Person.vue'
import Search from '../pages/Search/Search.vue'

import Login from '../pages/Login/Login.vue'
//使用路由
Vue.use(VueRouter)

//配置路由
export default new VueRouter({
	//所有路由
	routes:[
		{path:"/msite",component:MSite,meta:{showFooter:true}},
		{path:"/order",component:Order,meta:{showFooter:true}},
		{path:"/person",component:Person,meta:{showFooter:true}},
		{path:"/search",component:Search,meta:{showFooter:true}},
		{path:"/",redirect:'/msite'},
		{path:"/login",component:Login},
	],
	mode:"history"
})