<template>
  <div class="technologies__filter--view--content platforms">
    <div>
      <h4 class="view-title">
        {{ $i18n.t('pages.home.sections.technologies.filtering.views.cms') }}
      </h4>
      <div class="technologies__filter--view--icons">
        <a target="_blank" v-for="(img, i) in imgs" :key="i" :href="img.link">
          <img
            :src="require(`@/assets/images/technologies/cms/${img.src}`)"
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
          src: 'wordpress.png',
          link: 'https://wordpress.com',
          alt: 'wordpress',
        },
        {
          src: 'blogger.png',
          link: 'https://blogger.com/',
          alt: 'blogger',
        },
        {
          src: 'typo3.png',
          link: 'https://typo3.org/',
          alt: 'typo3',
        },
        {
          src: 'joomla.png',
          link: 'https://joomla.org/',
          alt: 'joomla',
        },
        {
          src: 'shopify.png',
          link: 'https://shopify.com/',
          alt: 'shopify',
        },
        {
          src: 'Magento.png',
          link: 'https://mgt-commerce.com/blog/magento-cms/',
          alt: 'Magento',
        },
        {
          src: 'Squarespace.png',
          customClass: 'medium-size',
          link: 'https://www.squarespace.com/',
          alt: 'Squarespace',
        },
        {
          src: 'strapi.jpg',
          customClass: 'small-size',
          link: 'https://strapi.io/',
          alt: 'strapi',
        },  
      ],
    }
  },
}
</script>
