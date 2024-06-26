<template>
  <v-main>
    <v-container fluid class="container-title">
      <v-row>
        <v-col>
          <strong style="font-size: 18px;">Архив задач</strong>
          <v-divider :thickness="4" class="border-opacity-100" color="#4BA285"></v-divider>
          По своей сути рыбакет является альтернативой традиционному lorem ipsum, который вызывает у некоторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет неповторимым смыслом и придаст неповторимый колорит советских времен.
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="controls-container">
      <v-row align="center" class="justify-end">
        <v-col cols="auto">
          <v-text-field
            v-model="searchQuery"
            clearable
            color="teal"
            label="Поиск"
            density="compact"
            variant="underlined"
            prepend-inner-icon="mdi-magnify"
            style="max-width: 230px; width: 230px;"
          ></v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-btn icon @click="toggleSortDirection" class="sort-btn">
            <v-icon>{{ sortDirectionIcon }}</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-select
            v-model="selectedCategory"
            :items="categories"
            label="Темы"
            color="teal"
            density="compact"
            variant="underlined"
            style="max-width: 230px; width: 230px;"
            @change="filterByCategory"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="table-container">
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th @click="sortBy('resolved')">Решено</th>
              <th @click="sortBy('id')">ID</th>
              <th @click="sortBy('title')">Название задачи</th>
              <th @click="sortBy('theme')">Тема</th>
              <th @click="sortBy('analysis')">Разбор</th>
              <th @click="sortBy('difficulty')">Сложность</th>
              <th @click="sortBy('solvable')">Решаемость</th>
              <th @click="sortBy('accepted')">Принято</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in filteredTasks" :key="task.id">
              <td>{{ task.resolved }}</td>
              <td>{{ task.id }}</td>
              <td>{{ task.title }}</td>
              <td>{{ task.theme }}</td>
              <td>{{ task.analysis }}</td>
              <td>{{ task.difficulty }}</td>
              <td>{{ task.solvable }}</td>
              <td>{{ task.accepted }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </v-container>
  </v-main>
</template>


<script>
export default {
  data() {
    return {
      searchQuery: '',
      selectedCategory: null,
      tasks: [
        { resolved: 'Да', id: 1, title: 'Какое-то длинное название задачи', theme: 'Какая-то длинная тема задачи', analysis: 'Есть', difficulty: '70%', solvable: '24%', accepted: '2214' },
        { resolved: 'Нет', id: 2, title: 'Какое-то длинное название задачи', theme: 'Какая-то длинная тема задачи', analysis: 'Нет', difficulty: '2%', solvable: '96%', accepted: '2314' },
        { resolved: 'Да', id: 3, title: 'Какое-то длинное название задачи', theme: 'Какая-то длинная тема задачи', analysis: 'Есть', difficulty: '1%', solvable: '99%', accepted: '3532' },
        { resolved: 'Нет', id: 4, title: 'Очень простая задача', theme: 'Фармакология спорта', analysis: 'Есть', difficulty: '2%', solvable: '97%', accepted: '2352' },
        { resolved: 'Да', id: 5, title: 'Какое-то длинное название задачи', theme: 'Какая-то длинная тема задачи', analysis: 'Нет', difficulty: '40%', solvable: '60%', accepted: '1134' },
        { resolved: 'Да', id: 6, title: 'Какое-то длинное название задачи', theme: 'Какая-то длинная тема задачи', analysis: 'Есть', difficulty: '70%', solvable: '24%', accepted: '2214' },
        { resolved: 'Нет', id: 7, title: 'Сложная задача', theme: 'Спортивная генетика', analysis: 'Нет', difficulty: '2%', solvable: '96%', accepted: '2314' },
        { resolved: 'Да', id: 8, title: 'Какое-то длинное название задачи', theme: 'Какая-то длинная тема задачи', analysis: 'Есть', difficulty: '1%', solvable: '99%', accepted: '3532' },
        { resolved: 'Нет', id: 9, title: 'Какое-то длинное название задачи', theme: 'Генетика', analysis: 'Есть', difficulty: '2%', solvable: '97%', accepted: '2352' },
        { resolved: 'Да', id: 10, title: 'Какое-то длинное название задачи', theme: 'Какая-то длинная тема задачи', analysis: 'Нет', difficulty: '40%', solvable: '60%', accepted: '1134' },
        { resolved: 'Да', id: 11, title: 'Какое-то длинное название задачи', theme: 'Какая-то длинная тема задачи', analysis: 'Есть', difficulty: '70%', solvable: '24%', accepted: '2214' },
        { resolved: 'Нет', id: 12, title: 'Какое-то длинное название задачи', theme: 'Какая-то длинная тема задачи', analysis: 'Нет', difficulty: '2%', solvable: '96%', accepted: '2314' },
        { resolved: 'Да', id: 13, title: 'Очень простая задача', theme: 'Генетика', analysis: 'Есть', difficulty: '1%', solvable: '99%', accepted: '3532' },
        { resolved: 'Нет', id: 14, title: 'Какое-то длинное название задачи', theme: 'Какая-то длинная тема задачи', analysis: 'Есть', difficulty: '2%', solvable: '97%', accepted: '2352' },
        { resolved: 'Да', id: 15, title: 'Какое-то длинное название задачи', theme: 'Какая-то длинная тема задачи', analysis: 'Нет', difficulty: '40%', solvable: '60%', accepted: '1134' },
        
      ],
      sortKey: 'title',
      sortDirection: 'asc',
    };
  },
    computed: {
    categories() {
      const themes = this.tasks.map(task => task.theme);
      return ['Сброс Темы', ...new Set(themes)];
    },
    filteredTasks() {
      let tasks = this.tasks;

      if (this.searchQuery) {
        tasks = tasks.filter(task => task.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }

      if (this.selectedCategory && this.selectedCategory !== 'Сброс Темы') {
        tasks = tasks.filter(task => task.theme === this.selectedCategory);
      }

      return tasks.slice().sort((a, b) => {
        const modifier = this.sortDirection === 'asc' ? 1 : -1;
        if (a[this.sortKey] < b[this.sortKey]) return -1 * modifier;
        if (a[this.sortKey] > b[this.sortKey]) return 1 * modifier;
        return 0;
      });
    },
    sortDirectionIcon() {
      return this.sortDirection === 'asc' ? 'mdi-sort-ascending' : 'mdi-sort-descending';
    }
  },
  methods: {
    toggleSortDirection() {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    },
    sortBy(key) {
      if (this.sortKey === key) {
        this.toggleSortDirection();
      } else {
        this.sortKey = key;
        this.sortDirection = 'asc';
      }
    },
    filterByCategory() {
      if (this.selectedCategory === 'Сброс Темы') {
        this.selectedCategory = null;
      }
    }
  },
};
</script>


<style scoped>
.container-title {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  max-width: 1500px;
}

.controls-container {
  max-width: 1500px;
}

.v-divider {
  max-width: 60px;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
}


.table-container {
  max-width: 1500px;
}

.table-wrapper {
  max-height: 70ch; 
  overflow-y: auto; 
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
}

th {
  cursor: pointer;
}

th, td {
  border: none; /* Убираем границы у ячеек */
}

tr:hover {
  background-color: #EDF5F1; /* Цвет фона при наведении на строку */
}

tr.highlighted {
  background-color: #c8e6c9; /* Цвет фона выделенной строки */
}

.sort-btn{
  transition: none; /* Убирает анимацию при наведении */
  box-shadow: none; /* Убирает тень кнопки */
  border: none; /* Убирает границу кнопки */
  outline: none; /* Убирает обводку при фокусировке */
}

/*Изменение стиля scrollbar*/
::-webkit-scrollbar {
  width: 6px; /* ширина полосы прокрутки */
  border-radius: 10px; /* закругление углов полосы прокрутки */
}

::-webkit-scrollbar-track {
  background: #f1f1f1; /* цвет дорожки полосы прокрутки */
  border-radius: 10px; /* закругление углов полосы прокрутки */
}

::-webkit-scrollbar-thumb {
  background: #4BA285; /* цвет полосы прокрутки */
  border-radius: 10px; /* закругление углов полосы прокрутки */
}

::-webkit-scrollbar-thumb:hover {
  background: #36715D; /* темный оттенок цвета полосы прокрутки при наведении */
  border-radius: 10px; /* закругление углов полосы прокрутки */
}
</style>