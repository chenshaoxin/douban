<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="tap">
    <div class="mes" mes="aaaaaaaaa">
      <router-link to='/router1'><span>router1</span></router-link>
      <router-link to="/router2"><span>router2</span></router-link>
      </div>
    </div>
    <router-view></router-view>
    <br>
    <br>
    <br>
    <br>
    <br>
   
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      
      
    }
  }
}
</script>

<style>
*{
  margin:0px;
  padding:0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mes{
  width:100%;
height:80px;
  display:flex;
  line-height:80px;
}
.mes a{
  flex:1;
  color:red;
  display:block
}
.mes a span{
  display:block
}





  ul{
    
    list-style-type:none

  }
  ul li{
    margin-bottom:28px;
  }
  .movieBox{
    display:flex;
  }
  .movieBox img{
    display:block;
    flex:1;
  }
  .movieBox .movieInfo{
    flex:3;
  }
  .casts span{
    margin-left:20px;
  }
   .directors span{
    margin-left:20px;
  }
  .movieInfo{
    text-align:left;
    margin-left:30px;
  }

</style>
