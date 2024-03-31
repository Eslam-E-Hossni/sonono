<template>
  <section class="reach-us section-p">
    <div class="container">
      <div class="reach-us__inner">
        <v-row justify="center">
          <v-col cols="12" md="6" lg="3">
            <div class="reach-us__logo">
              <BaseCircleLogo />
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="reach-us__text">
              <p class="reach-us__text--description" v-html="$i18n.t('pages.contact.title')"></p>
              <div class="reach-us__text--bottom">
                <ul class="reach-us__text--links">
                  <li class="reach-us__text--links__link custom">
                    <a href="https://maps.app.goo.gl/Fq1nhB61Y3cPtptJA" target="_blank" v-html="$i18n.t('pages.contact.address')"></a>
                  </li>
                </ul>
                <ul class="reach-us__text--links">
                  <li class="reach-us__text--links__link"><a href="mailto:info@sonono.ch">info@sonono.ch</a></li>
                  <li class="reach-us__text--links__link"><a href="tel:+41 78 846 93 92">+41 78 846 93 92</a></li>
                </ul>
                <BaseSocialIcons class="reach-us__text--links" />
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>

<script>
import BaseCircleLogo from '@/components/UI/BaseCircleLogo'
import BaseSocialIcons from '@/components/UI/BaseSocialIcons';
export default {
  components: {
    BaseCircleLogo,
    BaseSocialIcons
}
}
</script>
