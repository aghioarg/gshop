/*
入口js
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '../static/css/reset.css'
 // import '../static/css/swiper.css'
//import '../static/css/index.css'




new Vue({
	el:'#app',
	render:h => h(App),
	router
	
})