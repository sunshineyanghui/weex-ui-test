<template>
  <div class="cover">
    <image src="https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png" class="cover-img"></image>
    <a><text class="download">立即下载</text></a>
    <text class="link" @click="jump('/news')">进入网页 ></text>
  </div>
</template>
<style scoped>
  .cover{
    align-items: center;
  }
  .cover-img{
    position: fixed;
    left:0px;
    right:0px;
    top:0px;
    bottom:0px;
  }
  .download{
    width:271px;
    height:95px;
    background-color: #FFBA15;
    color:#fff;
    font-size:43px;
    justify-content: center;
    align-items: center;
    z-index:2;
    border-radius: 14px;
    margin-top: 860px;
  }
  .link{
    color:#FFBA15;
    font-size: 35px;
    z-index:2;


    margin-top:45px;
  }
</style>
<script>
  export default{
    data(){
      return{
      }
    },
    created(){
    },
    methods: {}
  }
</script>
