<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global' })
const switchLang = () => {
  locale.value === 'en' ? locale.value = 'ru' : locale.value = 'en'
  localStorage.setItem('lang', locale.value)
}
</script>

<template>
  <v-app-bar app color="deep-orange">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-divider class="ms-4" inset vertical></v-divider>
    <router-link to="/" class="link-style">
      <v-app-bar-title>
        <h3 class="text-h4 white--text ml-3">FoodMark</h3>
      </v-app-bar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-btn @click="switchLang">
      {{ $t('switchLang') }}
    </v-btn>
    <v-btn to="/cart">
      <v-icon size="25">mdi mdi-cart-variant</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer color="rgb(250, 75, 0)" v-model="drawer"
    :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
    <v-list-item v-for="item in items" :key="item.title" :prepend-icon="item.icon" :to="item.to">{{ item.title
      }}</v-list-item>
  </v-navigation-drawer>

</template>

<script>
    export default {
    data: () => ({
      drawer: false,
      group: null,
      links: [
        'О нас',
        'Контакты',
    ],
      items: [
        {
          title: 'Главная страница',
          icon: 'mdi mdi-home',
          value: 'home',
          to: '/',
        },
        {
          title: 'Список ресторанов',
          icon: 'mdi mdi-coffee',
          value: 'rest',
          to: '/rest',
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style lang="scss" scoped>

.link-style {
  font-size: 1.5rem;
  font-weight: 400;
  color: #FFFFFF;
  text-decoration: none;
}
</style>