<template>
  <v-row>
    <v-col cols="12" md="3" class="menu">
      <v-card class="logo d-flex justify-center align-center">
        <v-icon color="white" style="margin-right: 10px;">
          <v-img src="@/assets/logo.svg" alt="Логотип" contain></v-img>
        </v-icon>
        <strong style="color: white; font-size: 18px;">Medical School</strong>
      </v-card>

      <v-card class="profile">
        <v-card-title class="card-title">Профиль</v-card-title>
        <v-card-item v-if="!isAuthenticated">
          <v-card-action>
            <v-btn class="edit-btn" @click="goToLogin">Авторизоваться</v-btn>
          </v-card-action>
        </v-card-item>
        <v-card-content v-else class="content">
          <v-avatar class="avatar" size="35">
            <v-img :src="user.avatar || '../assets/avatar.png'"></v-img>
          </v-avatar>
          <span class="profile-text">{{ user.firstName }} {{ user.lastName }} {{ user.middleName }}</span>
          <v-card-item>
            <v-icon size="25">
              <v-img src='../assets/lvl.png'></v-img>
            </v-icon>
            <span class="profile-text">Ур. {{ user.accountLevel }}</span>
          </v-card-item>
        </v-card-content>
        <v-card-action v-if="isAuthenticated">
          <v-btn class="edit-btn" @click="editProfile">Редактировать</v-btn>
        </v-card-action>
      </v-card>

      <v-card class="info">
        <v-card-title class="card-title">Информация</v-card-title>
        <v-card-content>
          <router-link to="/" class="link-style">
            <v-card-item class="items">О школе</v-card-item>
          </router-link>
          <v-card-item class="items">Правила</v-card-item>
          <router-link to="/forum" class="link-style">
            <v-card-item class="items">Форум</v-card-item>
          </router-link>
          <v-card-item class="items">Олимпиады</v-card-item>
        </v-card-content>
      </v-card>

      <v-card class="taskbook">
        <v-card-title class="card-title">Задачник</v-card-title>
        <v-card-content>
          <router-link to="/tasks" class="link-style">
            <v-card-item class="items">Архив задач</v-card-item>
          </router-link>
          <router-link to="/cond" class="link-style">
            <v-card-item class="items">Состояние системы</v-card-item>
          </router-link>
          <v-card-item class="items">Рейтинг</v-card-item>
          <v-card-item class="items">Курсы</v-card-item>
        </v-card-content>
      </v-card>

      <v-card class="methodical">
        <v-card-title class="card-title">Методичка</v-card-title>
        <v-card-content>
          <v-card-item class="items">Новичкам</v-card-item>
          <v-card-item class="items">Статьи</v-card-item>
          <v-card-item class="items">Ссылки</v-card-item>
          <v-card-item class="items">Работа в системе</v-card-item>
        </v-card-content>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Profile',
  computed: {
    ...mapGetters('authenticateModule', ['isAuthenticated', 'user'])
  },
  methods: {
    goToLogin() {
      this.$router.push({ name: 'Authentication' });
    },
    editProfile() {
      this.$router.push({ name: 'EditProfile' });
    }
  }
}
</script>

<style scoped>
.menu {
  padding-top: 30px;
  padding-left: 30px;
}

.logo {
  width: 300px;
  height: 72px;
  background: #4BA285;
  border-radius: 10px;
  margin-bottom: 10px;
}

.profile, .info, .taskbook, .methodical {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  padding: 20px;
  margin-bottom: 10px;
  width: 300px;
  gap: 10px;
  background: #4BA285;
  border-radius: 10px;
}

.info{
 height: 260px;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  width: 100%;
  justify-content: space-between;
}

.edit-btn {
  display: flex;
  flex-direction: row;
  width: 260px;
  height: 30px;
  background: #6EBB91;
  box-shadow: 0 0 20px rgba(110, 187, 145, 0.5);
  border-radius: 5px;
  margin-top: 5px;
  align-items: center;
}

.profile-text {
  font-size: 13px;
  margin-left: 6px;
}

.avatar {
  margin-right: 6px;
}

.card-title {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 16px;
  margin: 0;
  padding: 0;
}

.items {
  font-size: 15px;
  padding: 3px;
}

.link-style {
  text-decoration: none;
  color: #FFFFFF;
}

.link-style:hover {
  color: #FFFF00 !important;
}
</style>
