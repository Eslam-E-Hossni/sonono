<template>
  <div v-if="!cut" class="circle">
    <img :src="require('@/assets/images/sonono.svg')"  class="sonono-logo"/>
  </div>
  <div v-else class="circle cut-img">
    <img :src="require('@/assets/images/logo-path.png')"  class="sonono-logo"/>
  </div>
</template>

<script>
  export default {
    props: {
      cut: {
        type: Boolean
      }
    }
  }
</script>

<style lang="scss" scoped>
  .circle {
    position: relative;
    width: 120px;
    height: 120px;
    background-color: #fff;
    border-radius: 50%;
    .sonono-logo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 150px;
    }
    &.cut-img {
      img {
        z-index: 10;
      }
      &::after {
        content: "";
        position: absolute;
        top: -5px;
        left: 5px;
        width: 40px;
        height: 70px;
        background-image: url('@/assets/images/bird-wing.png');
      }
    }
  }
</style>
