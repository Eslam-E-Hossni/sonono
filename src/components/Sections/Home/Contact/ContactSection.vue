<template>
  <section id="contact" class="contact section-p">
    <div class="container">
      <div class="contact__inner">
        <v-row dense>
          <v-col cols="12" md="4" class="white">
            <div class="contact__left">
              <h2 class="contact__left--title" v-html="$i18n.t('pages.home.sections.contact.title')"></h2>
              <p class="contact__left--description">{{ $i18n.t('pages.home.sections.contact.description') }}</p>
              <div class="contact__left--qrscan"></div>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="contact__form">
              <div class="contact__form--inner">
                <ContactForm />
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="white d-none d-md-block">
            <div class="contact__right">
              <div class="contact__right--shape"></div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>

<script>
  import ContactForm from './ContactForm'
  export default {
    components: {
      ContactForm
    }
  }
</script>
