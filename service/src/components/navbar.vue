<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ruImage from '../assets/ru.png';
import enImage from '../assets/en.png';

const { t, locale } = useI18n({ useScope: 'global' })
const switchLang = () => {
  locale.value === 'en' ? locale.value = 'ru' : locale.value = 'en'
  localStorage.setItem('lang', locale.value)
};

const currentImage = computed(() => {
  return locale.value === 'ru' ? ruImage : enImage;
});
const currentImageWidth = computed(() => {
  return locale.value === 'ru' ? 40 : 30;
});
</script>

<template>
  <v-app-bar color="#e5e5e5" :elevation="0" height="200">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="auto">
          <router-link to="/" class="router-link-exact-active">
            <v-img src="../assets/logo.png" :width="100" class="logo"></v-img>
          </router-link>
          <v-row>
            <v-col cols="12" md="auto">
              <v-btn to="/" class="btn-category" rounded>
                <v-icon left>mdi-home</v-icon>{{$t('navbar.btn-accommodations')}}
              </v-btn>
              <v-btn to="/flights" class="btn-category" rounded>
                <v-icon left>mdi-airplane</v-icon>Авиабилеты
              </v-btn>
              <v-btn to="/cars" class="btn-category" rounded>
                <v-icon left>mdi-car</v-icon>Транспорт
              </v-btn>
              <v-btn to="/hotels" class="btn-category" rounded>
                <v-icon left>mdi-bed</v-icon>Отели
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-row justify="end" no-gutters>
              <v-btn icon class="hidden-md-and-up">
            <v-icon>mdi-login</v-icon>
          </v-btn>
          <v-btn icon class="hidden-md-and-up">
            <v-icon>mdi-account-plus</v-icon>
          </v-btn>
          <v-btn class="hidden-sm-and-down">Войти в аккаунт</v-btn>
          <v-btn class="hidden-sm-and-down">Зарегистрироваться</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-btn class="btn-language" @click="switchLang">
      <v-img :src="currentImage" :width="currentImageWidth"></v-img>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  // Ваши методы и данные
}
</script>

<style scoped>
.router-link-exact-active {
  display: inline-block;
  width: 100px;
  height: 100px;
  line-height: 100px; 
  text-align: center; 
}

.logo{
    margin: 10px;
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
}

.btn-category{
    font-size: 14px;
    text-transform:capitalize;
    margin: 5px;
}

@media (max-width: 960px) {
  .hidden-md-and-up {
    display: block;
  }
  .hidden-sm-and-down {
    display: none;
  }
}

@media (min-width: 961px) {
  .hidden-md-and-up {
    display: none;
  }
  .hidden-sm-and-down {
    display: block;
  }
}

.btn-language{
    position: absolute;
    right: 0;
    top: 0;
    margin: 10px;
}


</style>
