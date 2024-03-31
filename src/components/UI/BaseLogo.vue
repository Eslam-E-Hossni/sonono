<template>
  <nuxt-link :to="localePath('/')" class="flex-align header__logo">
    <img :src="require('@/assets/images/logo.svg')" alt="logo" class="header__logo--img">
    <p class="header__logo--txt">{{ $i18n.t('header.logoTxt') }}</p>
  </nuxt-link>
</template>

<script></script>
