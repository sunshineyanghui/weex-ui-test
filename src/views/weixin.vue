<template lang="html">
  <div class="demo">
    <wxc-minibar title="提现绑定" background-color="#F2F3F4"></wxc-minibar>
      <div class="inputbox">
        <text>真实姓名：</text>
        <input placeholder="姓名">
      </div>
      <wxc-cell label="微信授权"
                title="点击此处进行微信授权"
                :has-arrow="true"
                link="https://h5.m.taobao.com/trip/home/index.html"
                @wxcCellClicked="wxcCellClicked"
                spm="181.12312312.12312.d01"
                :has-top-border="false"></wxc-cell>

      <div class="btnbox">

        <wxc-button text="保存"
      @wxcButtonClicked="wxcButtonClicked"></wxc-button>
      </div>

      <div class="tips">
        <div class="tiptop">
          <text>温馨提示：</text>
        </div>
        <div class="tiptop">
          <text>
            真实姓名，请填写微信绑定的银行卡真实姓名，游客帮受理，转账期间以上信息无法修改。
          </text>
        </div>

      </div>

  </div>
</template>

<script>
import { WxcMinibar, WxcCell, WxcButton } from 'weex-ui'
const modal = weex.requireModule('modal');

export default {
  components:{ WxcMinibar, WxcCell, WxcButton },
  data(){
    return{

    }
  },
  methods:{
    minibarLeftButtonClick () {
    },
    minibarRightButtonClick () {
      modal.toast({ 'message': 'click rightButton!', 'duration': 1 });
    },
    wxcCellClicked(){

    },
    wxcButtonClicked (e) {
        console.log(e)
    }
  }
}
</script>

<style lang="css">
.btnbox{
  align-items:center;
  margin-top:50px;
  margin-bottom: 50px;
}
.tips{
  flex-direction: column;
  justify-content: center;

}
.tips .tiptop{
  padding-left:30px;
  padding-right:30px;
}
.inputbox{
  flex-direction: row;

}
.inputbox input {
  outline: inherit;
}
</style>
