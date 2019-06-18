<!--主页-->
<template>
    <div>
      <div class="header">
        <span class="logo">网易严选</span>
        <input class="search" type="text" placeholder="搜索商品，共25152款好物">
        <div class="register">登录</div>
      </div>
      <div class="content">
        <div class="swiper-wrapper autoplay loop">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg" alt="实时热销top100">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg" alt="2019新品发布会">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" alt="愚人不如悦己">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg" alt="福利站">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg" alt="春季四件套换新">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg" alt="护理好物集">
          </div>
        </div>
      </div>
    </div>

</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import Swiper from 'swiper'
  export default {
    methods: {
      new Swiper('content', {
        direction: 'horizontal',
        loop: true,
        autoplay: true, // 自动轮播
        speed: 1000
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    height 88px
    float left
    text-align center
    line-height 88px
    .logo
      font-size 35px
    .search
      border-radius 8px
      height 54px
      width 442px
      display inline-block
      margin 0 10px
      background-color #ededed
    .register
      width 74px
      height 40px
      color #b4282d
      font-size 24px
      border 1px solid #b4282d
      text-align center
      line-height 40px
      border-radius 5px
      display inline-block

  .swiper-slide
    width 100%
    height 370px
    img
      width 100%
      height 100%

</style>
