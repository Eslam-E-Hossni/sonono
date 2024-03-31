<template>
  <div class="technologies__filter--view--content mobile">
    <div>
      <h4 class="view-title">
        {{ $i18n.t('pages.home.sections.technologies.filtering.views.mobile') }}
      </h4>
      <div class="technologies__filter--view--icons">
        <a target="_blank" v-for="(img, i) in imgs" :key="i" :href="img.link">
          <img
            :src="require(`@/assets/images/technologies/mobile/${img.src}`)"
            :alt="img.alt"
            :title="img.alt"
            :class="img.customClass ? img.customClass : ''"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          src: 'swift.png',
          link: 'https://swift.com/homepage',
          alt: 'swift'
        },
        {
          src: 'kotlin.png',
          link: 'https://kotlinlang.org/',
          alt: 'kotlin'
        },
        {
          src: 'flutter.png',
          customClass: 'big-size',
          alt: 'flutter',
          link: 'https://flutter.dev/'
        },
        {
          src: 'native.png',
          link: 'https://reactnative.dev/',
          alt: 'react native'
        },
      ],
    }
  },
}
</script>
