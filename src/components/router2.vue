<template>
  <div class="router2">{{router2}}
   <child url="https://api.douban.com/v2/movie/in_theaters?count=10"></child>
     
  </div>
</template>

<script>
import child from './child.vue'
export default {
 data(){
 	return{
 		router2:"我是路由2(豆瓣正在热映)",

 	}
 },
	
 components:{
 	child
 }

}
</script>

<style>

</style>

