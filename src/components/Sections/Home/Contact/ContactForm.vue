<template>
  <div>
    <v-form v-model="valid">
      <v-row>
        <!-- <v-col cols="12" lg="3">
          <v-text-field
            v-model="mrms"
            :label="$i18n.t('pages.home.sections.contact.form.fname')"
          ></v-text-field>
        </v-col> -->
        <v-col cols="12">
          <v-text-field
            v-model="fullName"
            :rules="nameRules"
            :label="$i18n.t('pages.home.sections.contact.form.lname') + '*'"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="mobile"
            :label="$i18n.t('pages.home.sections.contact.form.mobile')"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            :label="$i18n.t('pages.home.sections.contact.form.email') + '*'"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
            v-model="message"
            :rules="nameRules"
            filled
            name="input-7-4"
            :label="$i18n.t('pages.home.sections.contact.form.message') + '*'"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12">
          <v-checkbox v-model="checkbox" :rules="checkboxRules">
            <template v-slot:label>
              <div class="checkbox-label">
                {{ $i18n.t('pages.home.sections.contact.form.checkbox')[0] }}
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <a
                      href="/data-protection"
                      target="_blank"
                      v-bind="props"
                      @click.stop
                    >
                      {{
                        $i18n.t('pages.home.sections.contact.form.checkbox')[1]
                      }}
                    </a>
                  </template>
                </v-tooltip>
                {{ $i18n.t('pages.home.sections.contact.form.checkbox')[2] }}
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <a href="/gtc" target="_blank" v-bind="props" @click.stop>
                      {{
                        $i18n.t('pages.home.sections.contact.form.checkbox')[3]
                      }}
                    </a>
                  </template>
                </v-tooltip>
                {{ $i18n.t('pages.home.sections.contact.form.checkbox')[4] }}
              </div>
            </template>
          </v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-end">
          <v-btn
            x-large
            color="primary"
            outlined
            :disabled="!valid"
            @click="onSubmit"
            ><span class="form-btn">Absenden</span></v-btn
          >
        </v-col>
      </v-row>
      <!-- <recaptcha /> -->
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      // mrms: '',
      fullName: '',
      mobile: '',
      email: '',
      message: '',
      checkbox: false,

      // Validate
      nameRules: [(v) => !!v || 'Name is required'],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      checkboxRules: [(v) => !!v || 'You must agree to continue!'],
    }
  },

  methods: {
    async generateRecaptchaToken() {
      try {
        const token = await this.$recaptcha.execute('contactUs')
        return token
      } catch (error) {
        console.log('ReCaptcha error:', error)
        return null
      }
    },

    async checkRecaptchaToken(token) {
      try {
        if (!token) return
        const secretKey = this.$config.RECAPTCHA_SECRET_KEY
        const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
        const response = await fetch(verificationUrl, {
          method: 'POST',
        })
        console.log(response)
      } catch (err) {
        console.log('checking failed:', err)
      }
    },
    async onSubmit() {
      try {
        const token = await this.generateRecaptchaToken()
        await this.checkRecaptchaToken(token)
      } catch (err) {
        console.log('submission failed:', err)
      }
    },
  },
}
</script>
