<template>
    <v-main>
      <v-container fluid class="d-flex align-center justify-center" style="height: 100vh;">
        <v-card class="login-card" width="400">
          <v-card-title class="text-h5 justify-center">Авторизация</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleLogin" ref="loginForm">
              <v-text-field
                v-model="loginValue"
                label="Логин"
                required
                :rules="[v => !!v || 'Логин обязателен']"
              ></v-text-field>
              <v-text-field
                v-model="passwordValue"
                label="Пароль"
                type="password"
                required
                :rules="[v => !!v || 'Пароль обязателен']"
              ></v-text-field>
              <v-alert v-if="errorMessage" type="error" dismissible @input="errorMessage = ''">
                {{ errorMessage }}
              </v-alert>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="primary" @click="handleLogin" :disabled="isLoading">
              <template v-if="isLoading">
                <v-progress-circular indeterminate color="white"></v-progress-circular>
              </template>
              <template v-else>
                Авторизоваться
              </template>
            </v-btn>
          </v-card-actions>
          <v-card-actions class="justify-center">
            <v-btn text @click="goToRegister">Регистрация</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        loginValue: '',
        passwordValue: '',
        errorMessage: '',
        isLoading: false
      };
    },
    methods: {
      ...mapActions('authenticateModule', ['login']),
      async handleLogin() {
        this.errorMessage = '';
        this.isLoading = true;
        try {
          await this.login({ 
            login: this.loginValue.trim(),
            password: this.passwordValue.trim()
          });
          this.$router.push({ name: 'Main' });
        } catch (err) {
          console.error(err); 
          this.errorMessage = 'Неверный логин или пароль';
        } finally {
          this.isLoading = false;
        }
      },
      goToRegister() {
        this.$router.push({ name: 'RegisterPage' });
      }
    }
  }
  </script>
  
  <style scoped>
  .login-card {
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  </style>
  