// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router1 from './components/router1.vue'
import router2 from './components/router2.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
const Foo = { template: '<div>foo</div>' }
/* eslint-disable no-new */
Vue.use(VueRouter)
var routers=[
				{
					path:'/router1',
					component:router1
				},
				{
					path:'/router2',
					component:router2
				}
			]
var router=new VueRouter({routes:routers})
/*var routes = [
  { path: '/router1', component: router1 }
]
var router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})*/
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})
