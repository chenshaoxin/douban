<template>
  <div class="router1">{{router1}}
   <child url="https://api.douban.com/v2/movie/top250?count=10"></child>
     
  </div>
</template>

<script>
import child from './child.vue'
export default {
 data(){
 	return{
 		router1:"我是路由1(豆瓣高分牌行榜)",

 	}
 },
	
 components:{
 	child
 }

}
</script>

<style>

</style>

