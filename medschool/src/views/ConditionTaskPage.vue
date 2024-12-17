<template>
  <v-main>
    <v-container fluid class="container-title">
      <v-row align="center" justify="space-between">
        <v-col>
          <strong style="font-size: 18px;">Состояние системы</strong>
          <v-divider :thickness="4" class="border-opacity-100" color="#4BA285"></v-divider>
          <p>
            По своей сути рыбакет является альтернативой традиционному lorem ipsum, который вызывает у некоторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет неповторимым смыслом и придаст неповторимый колорит советских времен.
          </p>
        </v-col>
        <v-col cols="auto" class="controls-container">
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
        </v-col>
      </v-row>
    </v-container>
    
    <v-container fluid class="table-container">
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th @click="sortBy('date')">Дата</th>
              <th @click="sortBy('taskId')">ID Задачи</th>
              <th @click="sortBy('authorName')">Автор решения</th>
              <th @click="sortBy('isCorrect')">Статус ответа</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="filteredAnswers.length === 0">
              <td colspan="4">Нет данных для отображения.</td>
            </tr>
            <tr v-for="answer in filteredAnswers" :key="answer.taskId">
              <td>{{ answer.date }}</td>
              <td>{{ answer.taskId }}</td>
              <td>{{ answer.authorName }}</td>
              <td>{{ answer.isCorrect ? 'Принято' : 'Неверный ответ' }}</td>
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
      sortKey: 'date',
      sortDirection: 'asc',
    };
  },
  computed: {
    answers() {
      return this.$store.getters.getUserAnswers;
    },
    categories() {
      const themes = this.answers.map(answer => answer.theme);
      return ['Сброс Темы', ...new Set(themes)];
    },
    filteredAnswers() {
  let answers = this.answers || [];

  // Фильтрация по запросу поиска
  if (this.searchQuery) {
    answers = answers.filter(answer => answer.authorName.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  // Фильтрация по выбранной категории
  if (this.selectedCategory && this.selectedCategory !== 'Сброс Темы') {
    answers = answers.filter(answer => answer.theme === this.selectedCategory);
  }

  return answers.slice().sort((a, b) => {
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
  }
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
  border: none;
}

tr:hover {
  background-color: #EDF5F1;
}

.sort-btn {
  transition: none;
  box-shadow: none;
  border: none;
  outline: none;
}


::-webkit-scrollbar {
  width: 6px;
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #4BA285;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #36715D;
  border-radius: 10px;
}
</style>
