<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="text-center">Редактирование профиля</h1>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12" md="6" offset-md="3">
          <v-form @submit.prevent="updateProfile" class="profile-form">
            <v-text-field
              v-model="firstName"
              label="Имя"
              required
              outlined
              dense
            ></v-text-field>
            
            <v-text-field
              v-model="lastName"
              label="Фамилия"
              required
              outlined
              dense
            ></v-text-field>
            
            <v-text-field
              v-model="middleName"
              label="Отчество"
              outlined
              dense
            ></v-text-field>
  
            <v-file-input
              v-model="avatar"
              label="Аватар"
              accept="image/*"
              @change="onFileChange"
              outlined
              dense
            ></v-file-input>
            
            <v-img
              v-if="avatarPreview"
              :src="avatarPreview"
              alt="Предпросмотр аватара"
              width="100"
              height="100"
              class="avatar-preview"
            ></v-img>
    
            <v-btn type="submit" color="primary" class="mt-3">Сохранить изменения</v-btn>
          </v-form>
          
          <v-divider class="my-4"></v-divider>
    
          <v-btn @click="logout" color="red" class="logout-btn" block>Выйти из профиля</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        middleName: '',
        avatar: null,
        avatarPreview: ''
      };
    },
    computed: {
      ...mapGetters('authenticateModule', ['user'])
    },
    created() {
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
      this.middleName = this.user.middleName;
      this.avatarPreview = this.user.avatar;
    },
    methods: {
      onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.avatarPreview = e.target.result;
          };
          reader.readAsDataURL(file);
          this.avatar = file;
        }
      },
      updateProfile() {
        const updatedData = {
          firstName: this.firstName,
          lastName: this.lastName,
          middleName: this.middleName,
          avatar: this.avatarPreview
        };
        this.$store.commit('authenticateModule/updateProfile', updatedData);
        this.$router.push('/');
      },
      logout() {
        this.$store.commit('authenticateModule/logout');
        this.$router.push('/login');
      }
    }
  };
  </script>
  
  <style scoped>
  .profile-form {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .avatar-preview {
    margin-top: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .logout-btn {
    margin-top: 10px;
  }
  </style>
  