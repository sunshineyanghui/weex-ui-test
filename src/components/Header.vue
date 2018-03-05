<template lang="html">
  <div class="top">
    <div><image class="logo" :src="logo"></image></div>
    <div><text class="download">点击下载</text></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      logo:'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>

<style lang="css">
  .top{
    flex-direction: row;
    width:750px;
    height:80px;
    justify-content:space-between;
    background-color: #ccc;
    align-items:center;
    padding-left: 20px;
    padding-right: 20px;
    position: fixed;
    top: 0;
    left:0;
    right:0;
    z-index: 2;
  }
  .download{
    width:230px;
    background-color: #dc3;
    text-align: center;
  }
  .logo{
    width:100px;
    height:70px;
  }
</style>
