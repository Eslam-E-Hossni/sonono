<template>
  <div class="contact-us pt">
    <ContactUsText />
    <MapSection />
    <ContactSection />
  </div>
</template>

<script>
import ContactSection from '@/components/Sections/Home/Contact/ContactSection.vue'
import ContactUsText from '@/components/Sections/Contact/ContactUsText.vue'
import MapSection from '@/components/Sections/Contact/Map/MapSection.vue'
export default {
  name: 'ContactPage',
  components: { ContactSection, ContactUsText, MapSection },
}
</script>

<style></style>
