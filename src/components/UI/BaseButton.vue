<template>
  <button v-if="filterBtn" type="button" class="base-btn filter" @click="activeBtn">
    <slot></slot>
  </button>
  <button v-else type="button" class="base-btn">
    <span>{{ $i18n.t('pages.home.sections.services.button') }}</span>
    <v-icon color="#fff" size="16">fas fa-arrow-right</v-icon>
  </button>
</template>

<script>
  export default {
    props: {
      filterBtn: {
        type: Boolean,
        required: false
      }
    },
    methods: {
      activeBtn() {
        this.$emit('active')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/abstracts/variables';
  .base-btn {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: left;
    text-transform: capitalize;
    padding: 10px 25px;
    width: 200px;
    background-color: $main-color;
    color: #fff !important;
    &:not(.filter):hover {
      i {
        animation: to-x .5s linear infinite;
      }
    }
    &.filter {
      background: transparent;
      padding: 3px 5px;
      padding-top: 5px;
      width: 140px;
      font-size: 18px;
      font-weight: 500;
      font-family: $main-font, sans-serif;
      text-transform: capitalize;
      color: $black-300 !important;
      transition: .2s;
      &.active {
        position: relative;
        color: $text-color !important;
      }
    }
  }
</style>
