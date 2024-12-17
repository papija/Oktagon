import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { QuillEditor } from '@vueup/vue-quill';

// Загрузка шрифтов
loadFonts()

// Создание приложения
const app = createApp(App)

// Инициализация состояния Vuex
store.dispatch('authenticateModule/initializeStore') // Убедитесь, что вы используете правильное имя модуля

// Использование плагинов
app.use(router)
app.use(store)
app.use(vuetify)

// Монтирование приложения
app.mount('#app')
