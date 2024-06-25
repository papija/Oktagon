import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import { languages } from './locales';
import { defaultLocale } from './locales';
import { createI18n, useI18n } from 'vue-i18n';


const localStorageLang = localStorage.getItem('lang')

const messages = Object.assign(languages)
const i18n = createI18n({
  legacy: false,
  locale: localStorageLang || defaultLocale,
  fallbackLocale: 'ru',
  messages
})

loadFonts()

createApp(App, {
  setup() {
    const { t } = useI18n()
    return {t}
  }
})
  .use(router)
  .use(store)
  .use(vuetify)
  .use(i18n)
  .mount('#app')

