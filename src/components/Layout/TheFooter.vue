<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner px-md-0 px-4">
        <div class="footer__top">
          <v-row dense>
            <v-col cols="12" md="4" class="mb-8 mb-md-0">
              <BaseLogo class="footer__top--logo" />
              <BaseSocialIcons class="footer__top--social" />
            </v-col>
            <v-col cols="12" md="8">
              <v-row dense>
                <v-col
                  v-for="(col, i) in $i18n.t('footer.top.cols')"
                  :key="i"
                  cols="6"
                  sm="4"
                  class="mb-8 mb-md-0 footer-col"
                  :class="col.orderLastInMobile ? 'order-1 order-md-0' : ''"
                >
                  <h3 class="footer__top--links__head">{{ col.title }}</h3>
                  <ul v-if="i >= 0 && i < 2" class="footer__top--links">
                    <li
                      v-if="col.location"
                      class="footer__top--link custom-line-height"
                    >
                      <a
                        :href="col.link.href"
                        target="_blank"
                        v-html="col.link.title"
                      ></a>
                    </li>
                    <li
                      v-for="(link, idx) in col.links"
                      :key="idx"
                      class="footer__top--link"
                    >
                      <nuxt-link
                        v-if="!link.scroll"
                        :to="localePath(link.href)"
                        :exact="false"
                        exact-active-class="null"
                        >{{ link.title }}</nuxt-link
                      >
                      <nuxt-link
                        v-if="link.scroll"
                        :to="{ path: localePath('index'), hash: 'aboutUs' }"
                        v-scroll-to="'#aboutUs'"
                        :exact="false"
                        exact-active-class="null"
                      >
                        {{ link.title }}
                      </nuxt-link>
                    </li>
                  </ul>
                  <ul v-else>
                    <li
                      v-for="(link, idx) in col.links"
                      :key="idx"
                      class="footer__top--link phone contact"
                    >
                      <span class="phone-icon"
                        ><v-icon color="textbase">{{ link.icon }}</v-icon></span
                      >
                      <a :href="link.href">{{ link.title }}</a>
                    </li>
                  </ul>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
        <div class="footer__bottom">
          <v-row dense align="center">
            <v-col cols="10" md="4" class="order-1 order-md-0">
              <p class="footer__bottom--copyrights">
                {{ $i18n.t('footer.bottom.copyright') }}
              </p>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import BaseSocialIcons from '@/components/UI/BaseSocialIcons'
import BaseLogo from '@/components/UI/BaseLogo'
export default {
  components: {
    BaseSocialIcons,
    BaseLogo,
  },
}
</script>
