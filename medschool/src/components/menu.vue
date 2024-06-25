<template>
  <v-row>
    <!-- Колонка меню -->
    <v-col cols="12" md="3" class="menu">
      <!-- Логотип -->
      <v-card class="logo d-flex justify-center align-center">
        <v-icon color="white" style="margin-right: 30px;">mdi-medical-bag</v-icon>
        <strong style="color: white; font-size: 18px;">Medical School</strong>
      </v-card>

      <!-- Профиль -->
      <v-card class="profile">
        <v-card-title class="card-title">Профиль</v-card-title>
        <v-card-item>
          <v-card-content class="content">
            <v-avatar class="avatar" size="35">
              <v-img src="../assets/avatar.png"></v-img>
            </v-avatar>
            <span class="profile-text">Фамилия Имя Отчество</span>
            <v-card-item>
              <v-icon size="25">
                <v-img src='../assets/lvl.png'></v-img>
              </v-icon>
              <span class="profile-text">Ур. 1</span>
            </v-card-item>
          </v-card-content>
        </v-card-item>
        <v-card-action>
          <v-btn class="edit-btn">Редактировать</v-btn>
        </v-card-action>
      </v-card>

      <!-- Информация -->
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

      <!-- Задачник -->
      <v-card class="taskbook">
        <v-card-title class="card-title">Задачник</v-card-title>
        <v-card-content>
          <v-card-item class="items">Архив задач</v-card-item>
          <v-card-item class="items">Состояние системы</v-card-item>
          <v-card-item class="items">Рейтинг</v-card-item>
          <v-card-item class="items">Курсы</v-card-item>
        </v-card-content>
      </v-card>

      <!-- Методичка -->
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

export default {
  name: 'App',
  data: () => ({
    
  }),
}
</script>

<style scoped>
.menu {
  padding-top: 30px; /* Отступ сверху */
  padding-left: 30px; /* Отступ слева */
}

@media (max-width: 1800px) {
    .v-container {
        display: none;
    }
}

@media (min-width: 2000px) {
    .v-container {
        display: none;
    }
}
.logo {
  width: 300px;
  height: 72px;
  background: #4BA285;
  border-radius: 10px;
  margin-bottom: 10px;
  flex: none;
  order: 3;
  flex-grow: 0;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  padding: 20px;
  margin-bottom: 10px;
  gap: 10px;
  width: 300px;
  height: 166px;
  background: #4BA285;
  border-radius: 10px;
  flex: none;
  order: 3;
  flex-grow: 0;
}

.info {
display: flex;
flex-direction: column;
align-items: flex-start;
color: white;
padding: 20px;
margin-bottom: 10px;
gap: 10px;
width: 300px;
height: 230px;
background: #4BA285;
border-radius: 10px;
flex: none;
order: 3;
flex-grow: 0;
}

.taskbook{
display: flex;
flex-direction: column;
align-items: flex-start;
color: white;
padding: 20px;
margin-bottom: 10px;
gap: 10px;
width: 300px;
height: 220px;
background: #4BA285;
border-radius: 10px;
flex: none;
order: 3;
flex-grow: 0;
}

.methodical{
display: flex;
flex-direction: column;
align-items: flex-start;
color: white;
padding: 20px;
gap: 10px;
width: 300px;
height: 200px;
background: #4BA285;
border-radius: 10px;
flex: none;
order: 4;
flex-grow: 0;
}

.content {
display: flex;
flex-direction: row;
align-items: left;
padding: 0px;
width: 240px;
height: 37px;
flex: none;
order: 1;
flex-grow: 0;
}

.edit-btn {
display: flex;
flex-direction: row;
width: 260px;
height: 30px;
background: #6EBB91;
box-shadow: 0px 0px 20px rgba(110, 187, 145, 0.5);
border-radius: 5px;
flex: none;
order: 2;
flex-grow: 0;
}

.profile-text{
    font-size: 13px;
}

.avatar{
    margin-right: 6px;
}

.card-title{
   display: flex;
   justify-content: center;
   width: 100%;
   font-size: 16px;
   margin: 0;
   padding: 0;
   gap: 0;
}

.items{
    font-size: 15px;
    padding: 4px;
}

.router-link-exact-active, .router-link-active {
  color: #FF0000 !important; /* Цвет активной ссылки */
}

.link-style, .router-link {
  text-decoration: none;
  color: #FFFFFF; /* Белый цвет текста для неактивных ссылок */
}

.router-link:hover {
  color: #FFFF00 !important; /* Цвет при наведении */
}
</style>
