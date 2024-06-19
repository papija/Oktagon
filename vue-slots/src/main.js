import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from "./router";
import store from "./store"


import { languages } from './i18n';
import { defaultLocale } from './i18n';
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
  .use(vuetify)
  .use(router)
  .use(store)
  .use(i18n)
  .mount('#app')
