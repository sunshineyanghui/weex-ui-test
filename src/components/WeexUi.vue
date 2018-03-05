<template>
  <div class="wrapper">
    <scroller class="scroller">
    <wxc-ep-slider :slider-id="sliderId"
                   :card-length='cardLength'
                   :card-s="cardSize"
                   :select-index="2"
                   @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">

      <!--自动生成demo-->
      <div v-for="(v,index) in [1,2,3,4,5]"
           :key="index"
           :slot="`card${index}_${sliderId}`"
           :class="['slider',`slider${index}`]">
        <text>这里是第{{index + 1}}个滑块</text>
      </div>
    </wxc-ep-slider>


    <!-- wxc-lightbox -->

    <div>
      <div class="btn" @click="openLightBox">
        <text class="btn-txt">点击按钮弹出全屏图片</text>

      </div>
      <wxc-lightbox ref="wxc-lightbox" height="800" :show="show" :image-list="imagelist" @wxcLightboxOverlayClicked="wxcLightboxOverlayClicked">

      </wxc-lightbox>
    </div>

    <!-- wxc-mask弹层组件 -->
    <div>
      <div class="btn" @click="openMask">
        <text>点击弹出动画面板</text>
      </div>

      <div class="btn btn-margin yello">
        <text @click="openNoAnimationMask">点击弹出无动画面板</text>
      </div>

      <wxc-mask height="800" width="702" border-radius="0" duration="200" mask-bg-color="#ffffff" :has-animation="hasAnimation" :has-overlay="true" :show-close="true" :show="showmask" @wxcMaskSetHidden="wxcMaskSetHidden">
        <div class="content">
          <div class="demo-title">
            <text class="title">weex帮助你构建原生应用</text>
          </div>
          <div>
            <text class="content-text">
              与 Web App、HTML5 App 或 hybrid App 不同，您可以使用 Weex 构建一个真正的原生应用。更贴心的是你的代码只需使用 HTML、CSS、JavaScript可以构建原生应用，上手非常简单。但实际上，应用的底层是 Objective-C 或 Java， 同时，Weex 提供很多 native 组件或模块供开发人员使用。
            </text>
          </div>

        </div>
      </wxc-mask>

    </div>
  </scroller>
  </div>
</template>

<style scoped>

  .wrapper {
    padding-top: 100px;
  }

  .slider {
    width: 400px;
    height: 300px;
    background-color: #C3413D;
    align-items: center;
    justify-content: center;
  }

  .slider1 {
    background-color: #635147;
  }

  .slider2 {
    background-color: #FFC302;
  }

  .slider3 {
    background-color: #FF9090;
  }

  .slider4 {
    background-color: #546E7A;
  }
  .wxc-demo {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.scroller {
  flex: 1;
  background-color: #ffffff;
}
.btn {
  width: 600px;
  height: 80px;
  margin-top: 50px;
  margin-left: 75px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: rgb(92, 184, 92);
  border-color: rgb(76, 174, 76);
}
.yellow {
  background-color: #FDC22D;
  border-color: #FDC22D;
}
.btn-txt {
  font-size: 32px;
  color: #ffffff;
}
.btn-margin {
  margin-top: 40px;
}
.content {
  padding: 30px;
  border-bottom-width: 0;
  width:inherit;
  height:inherit;
  justify-content:flex-start;
}
.demo-title {
  align-items: center;
  margin-bottom: 20px;
  margin-top: 40px;
}
.title {
  color: #333333;
  font-size: 40px;
}
.content-text {
  color: #333333;
  font-size: 30px;
  margin-top: 20px;
}
</style>

<script>
  import { WxcEpSlider,WxcLightbox,WxcMask } from 'weex-ui';

  export default {
    components: { WxcEpSlider,WxcLightbox,WxcMask },
    data(){
      return{
        sliderId: 1,
        cardLength: 5,
        cardSize: {
          width: 400,
          height: 300,
          spacing: 0,
          scale: 0.8
        },
        imagelist: [
          { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' },
          { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' },
          { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }
        ],
        show: false,
        showmask: false,
        overlayCanClose: true,
        isFalse: false,
        hasAnimation: true
      }
    },
    // data: () => ({
    //
    // }),
    methods: {
      wxcEpSliderCurrentIndexSelected (e) {
        const index = e.currentIndex;
        console.log(index);
      },
      openLightBox(){
        this.show = true;
      },
      wxcLightboxOverlayClicked(){
        this.show = false;
      },
      openMask (e) {
        this.showmask = true;
        this.hasAnimation = true;
      },
      wxcMaskSetHidden () {
        this.showmask = false;
      },
      openNoAnimationMask (e) {
        this.showmask = true;
        this.hasAnimation = false;
      }

    }
  }
</script>
