<template>
  <div class="gtc">
    <section class="gtc section">
      <div class="section__inner">
        <v-container class="py-0 px-2">
          <div class="section__title mb-4">
            <v-row>
              <v-col cols="12">
                <h1 class="gtc__page--title">
                  {{ $i18n.t('pages.gtc.pageTitle') }}
                </h1>
              </v-col>
            </v-row>
          </div>
          <div class="datenschutz__disc-content">
            <v-row>
              <v-col cols="12">
                <div
                  v-for="(item, i) in $i18n.t('pages.gtc.textSections')"
                  :key="i"
                  class="content-group"
                >
                  <h2 v-if="item.title" class="gtc__title">
                    {{ item.title }}
                  </h2>
                  <p v-if="item.text" class="gtc__desc" v-html="item.text"></p>
                </div>
              </v-col>
            </v-row>
          </div>
          <p class="location">{{ $i18n.t('pages.gtc.signature') }}</p>
        </v-container>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'GtcPage',
}
</script>
