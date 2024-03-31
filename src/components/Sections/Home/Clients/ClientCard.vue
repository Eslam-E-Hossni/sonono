<template>
  <div
    class="clients__card--wrapper d-lg-block"
    :class="{ 'd-none': client.hasEmptySpace || client.justEmpty }"
  >
    <template v-if="client.hasContent">
      <div class="clients__card has-content px-md-0 px-4">
        <h2 class="clients__card--title">
          {{ $i18n.t('pages.home.sections.clients.title') }}
        </h2>
        <p class="clients__card--content">
          {{ $i18n.t('pages.home.sections.clients.description') }}
        </p>
      </div>
    </template>
    <template v-else-if="client.hasEmptySpace || client.justEmpty">
      <div
        class="clients__card center"
        :class="{
          'just-empty': client.justEmpty,
          'has-empty': client.hasEmptySpace,
        }"
      >
        <BaseCircleLogo
          v-if="client.hasEmptySpace && !client.justEmpty"
          :class="{ 'show-logo': showLogo, 'stop-logo-here': stopBirdInCenter }"
        />
      </div>
    </template>
    <template v-else-if="client.moreBox">
      <nuxt-link :to="localePath('reference')" class="clients__card more">
        <span class="more-txt">More..<span class="ps-5">></span></span>
        <span class="more-img"
          ><img
            :src="require('@/assets/images/sponser/more.png')"
            alt="more img"
        /></span>
      </nuxt-link>
    </template>
    <template v-else>
      <a :href="client.link" target="_blank" class="clients__card">
        <img
          :src="require(`@/assets/images/sponser/${client.img}`)"
          :alt="client.alt"
          class="clients__card--logo"
          :class="{ 'custom-size': client.customClass }"
        />
      </a>
    </template>
  </div>
</template>

<script>
import BaseCircleLogo from '@/components/UI/BaseCircleLogo.vue'
export default {
  components: { BaseCircleLogo },
  props: {
    client: {
      type: Object,
      required: true,
    },
    showLogo: {
      type: Boolean,
    },
    stopBirdInCenter: {
      type: Boolean,
    },
  },
}
</script>
