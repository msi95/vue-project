<!--导航-->
<template>
  <footer class="footer_guide">
    <div class="guide_item on" :class="{on:$route.path==='/home'}" @click="goTo('/home')">
      <span class="item_icon">
        <i class="icon_dome iconfont icon-zhuye"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" :class="{on:$route.path==='/classify'}" @click="goTo('/classify')">
      <span class="item_icon">
        <i class="icon_dome iconfont icon-fenlei" ></i>
      </span>
      <span>分类</span>
    </div>
    <div class="guide_item" :class="{on:$route.path==='/know'}" @click="goTo('/know')">
      <span class="item_icon">
        <i class="icon_dome  iconfont icon-shiwu"></i>
      </span>
      <span>识物</span>
    </div>
    <div class="guide_item" :class="{on:$route.path==='/shopping'}" @click="goTo('/shopping')">
      <span class="item_icon">
        <i class="icon_dome iconfont icon-gouwuche2"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="guide_item" :class="{on:$route.path==='/personage'}" @click="goTo('/personage')">
      <span class="item_icon">
        <i class="icon_dome iconfont icon-geren-copy"></i>
      </span>
      <span>个人</span>
    </div>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'FooterGuide',
    methods: {
      goto(path) {
        this.$router.reqlace(path)
      },
      isCurrent(path) {
        // console.log(this.$route.path)
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer_guide
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    width 100%
    height 98px
    background #a1ffe5
    display flex
    .guide_item
      display flex
      flex 2
      text-align center
      flex-direction column
      align-items center
      margin-top 20px
      &.on
        color red
      span
        font-size 25px
        margin-top 2px
        margin-bottom 2px
        .icon_dome
          font-size 32px

</style>
