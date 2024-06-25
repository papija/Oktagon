<template>
    <v-main>
        <v-container fluid fill-height>
  <v-img
    src="../assets/accom.jpg"
    height="300px"
    width="100%"
    style="object-fit: cover;"
  >
    <v-row class="fill-height" align="center" justify="center">
      <v-col class="text-center">
        <h3 class="display-2 font-weight-bold mb-3">Ваш текст здесь</h3>
        <em>Дополнительный текст или описание</em>
      </v-col>
    </v-row>
  </v-img>
</v-container>
  <v-container class="fixed-container">
    <v-row>
      <v-col cols="4">
        <v-select
          :items="locations"
          label="Выберите местонахождение"
          solo
        ></v-select>
      </v-col>

      <v-col cols="4">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Выберите дату"
              prepend-icon="event"
              readonly
              v-bind="attrs"
              v-on="on"
              solo
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu = false"></v-date-picker>
        </v-menu>
      </v-col>

      <v-col cols="4">
        <v-btn color="primary" @click="find">Найти</v-btn>
      </v-col>
    </v-row>
  </v-container>
</v-main>
</template>

<script>
export default {
  data () {
    return {
      locations: ['Место 1', 'Место 2', 'Место 3'], // Здесь должны быть ваши местонахождения
      date: new Date().toISOString().substr(0, 10),
      menu: false,
    }
  },
  methods: {
    find() {
      // Метод для поиска
      alert(`Ищем местонахождение: ${this.location} на дату: ${this.date}`);
    }
  }
}
</script>

<style>
.fixed-container {
  max-width: 960px; /* Фиксированная ширина контейнера */
  background-color: linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.5));
  padding: 20px; /* Отступы внутри контейнера */
  margin: auto; /* Центрирование контейнера */
}

.v-main {
  background: linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.5));
}
</style>