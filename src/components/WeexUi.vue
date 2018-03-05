<template>
  <div class="wrapper">
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

</style>

<script>
  import { WxcEpSlider,WxcLightbox } from 'weex-ui';

  export default {
    components: { WxcEpSlider,WxcLightbox },
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
        show: false
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
      }
    }
  }
</script>
