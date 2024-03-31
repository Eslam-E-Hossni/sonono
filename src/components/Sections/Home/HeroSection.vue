<template>
  <section id="hero" class="hero">
    <div class="hero__slider slider">
      <div class="hero__slider--slide slide slide-1">
        <div class="slide-img"></div>
        <div class="container">
          <div class="hero__slider--slide--inner">
            <div class="slide-effect">
              <div class="slide-shape swiss d-none d-md-block"></div>
            </div>
            <div class="hero__content px-md-0 px-4">
              <h1 class="hero__content--title">
                {{ $i18n.t('pages.home.sections.hero.titleLine-1') }}
                <br />
                {{ $i18n.t('pages.home.sections.hero.titleLine-2') }}
                <br />
                {{ $i18n.t('pages.home.sections.hero.titleLine-3') }}
              </h1>
              <p class="hero__content--desc">
                {{ $i18n.t('pages.home.sections.hero.description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>
