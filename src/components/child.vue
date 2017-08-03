<template>
  <div class="movie">{{url}}
  	 <ul>
      <li v-for="article in articles">
      	<div class="movieBox">
        <img   v-bind:src="article.images.medium" alt="">
        <div class="movieInfo">
        	 <div class="title">{{article.title}}</div>
        	 <div class="average">{{article.rating.average}}</div>
        	 <div class="directors wrap">
        	 		导演：<span class="directors" v-for="director in article.directors">{{director.name}}</span>
        	 </div>
        	 
        	 <div class="casts wrap">
        	 		主演：<span class="casts" v-for="cast in article.casts">{{cast.name}}</span>
        	 </div>
        	 
        </div>
       
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
 data(){
 	return{
		articles:[], 

 	}
 },
 props:["url"],
  mounted: function() {
    this.$http.jsonp(this.url, {}, {
        headers: {

        },
        emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调
        this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以

    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  }

}
</script>

<style>
	
</style>

