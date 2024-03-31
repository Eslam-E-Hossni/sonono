<template>
  <div class="technologies__filter--view--content web">
    <div class="web__backend">
      <h4 class="web__backend--title view-title">
        {{
          $i18n.t(
            'pages.home.sections.technologies.filtering.views.web.backend'
          )
        }}
      </h4>
      <div class="technologies__filter--view--icons">
        <a
          target="_blank"
          v-for="(img, i) in imgs.backEnd"
          :key="i"
          :href="img.link"
        >
          <img
            :src="require(`@/assets/images/technologies/backend/${img.src}`)"
            :alt="img.alt"
            :title="img.alt"
            :class="img.customClass ? img.customClass : ''"
          />
        </a>
      </div>
    </div>
    <div class="web__frontend">
      <h4 class="web__backend--title view-title">
        {{
          $i18n.t(
            'pages.home.sections.technologies.filtering.views.web.frontend'
          )
        }}
      </h4>
      <div class="technologies__filter--view--icons">
        <a
          target="_blank"
          v-for="(img, i) in imgs.frontEnd"
          :key="i"
          :href="img.link"
        >
        <img
          :src="require(`@/assets/images/technologies/frontend/${img.src}`)"
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
      imgs: {
        backEnd: [
          {
            src: 'node.png',
            customClass: 'big-size',
            link: 'https://nodejs.org/',
            alt: 'node'
          },
          {
            src: 'java.png',
            customClass: 'small-size',
            link: 'https://java.com/',
            alt: 'java'
          },
          {
            src: 'php.png',
            customClass: 'medium-size',
            link: 'https://php.net/',
            alt: 'php'
          },
          {
            src: 'laravel.png',
            customClass: 'small-size',
            link: 'https://laravel.com/',
            alt: 'laravel'
          },
          {
            src: 'python.png',
            customClass: 'x-big-size',
            link: 'https://python.org/',
            alt: 'python'
          },
          {
            src: 'go.png',
            customClass: 'big-size',
            link: 'https://go.dev/',
            alt: 'go'
          },
        ],
        frontEnd: [
          {
            src: 'html.png',
            customClass: 'small-size',
            link: 'https://w3schools.com/html/',
            alt: 'html'
          },
          {
            src: 'css.png',
            customClass: 'small-size',
            link: 'https://w3schools.com/css/',
            alt: 'css'
          },
          {
            src: 'js.png',
            customClass: 'small-size',
            link: 'https://javascript.com/',
            alt: 'javascript'
          },
          {
            src: 'typescript.png',
            customClass: 'small-size',
            link: 'https://typescriptlang.org/',
            alt: 'typescript'
          },
          {
            src: 'jquery.webp',
            link: 'https://jquery.com/',
            alt: 'jquery'
          },
          {
            src: 'react.png',
            customClass: 'small-size',
            link: 'https://react.dev/',
            alt: 'react'
          },
          {
            src: 'next-js.svg',
            customClass: 'small-size',
            link: 'https://nextjs.org/',
            alt: 'next js'
          },
          {
            src: 'vue.png',
            customClass: 'small-size',
            link: 'https://vuejs.org/',
            alt: 'vue'
          },
          {
            src: 'nuxt.png',
            link: 'https://nuxt.com/',
            alt: 'nuxt js'
          },
          {
            src: 'svelte.png',
            customClass: 'small-size',
            link: 'https://svelte.dev/',
            alt: 'svelte'
          },
          {
            src: 'gatsby.png',
            link: 'https://gatsbyjs.com/',
            alt: 'gatsby'
          },
        ],
      },
    }
  },
}
</script>
