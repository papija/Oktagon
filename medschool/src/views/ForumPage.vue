<template>
  <v-main>
    <v-container fluid class="container-card">
      <strong style="font-size: 18px;">Форум</strong>
      <v-row>
        <v-col cols="12">
          <!-- Контейнер без горизонтального скроллбара -->
          <div class="overflow-y-auto" style="max-height: 100ch; overflow-x: hidden;">
            <v-row>
              <!-- Адаптивные карточки сообщений форума -->
              <v-col
                cols="12"
                sm="6"
                md="4"
                v-for="post in posts"
                :key="post.id"
              >
                <v-card style="margin-top: 17px; background: #DAEAE1;">
                  <v-card-title>
                    <div class="d-flex justify-space-between align-center">
                      <span>{{ post.topic }}</span>
                      <span class="grey--text">{{ post.date }}</span>
                    </div>
                  </v-card-title>
                  <v-card-subtitle>{{ post.author }}</v-card-subtitle>
                  <v-card-text>{{ post.excerpt }}</v-card-text>
                  <v-card-actions>
                    <v-btn text style="color: #B0D9CB; font-size: 10px; text-decoration: underline;">Подробнее</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          topic: 'Тема сообщения 1',
          date: '18 января 13:15',
          author: 'Фамилия И.О.',
          excerpt: 'Краткое содержание темы 1...',
          content: 'Полное содержание темы 1...'
        },
        {
          id: 2,
          topic: 'Тема сообщения 2',
          date: '18 января 13:15',
          author: 'Фамилия И.О.',
          excerpt: 'Краткое содержание темы 2...',
          content: 'Полное содержание темы 2...'
        },
        {
          id: 3,
          topic: 'Тема сообщения 3',
          date: '18 января 13:15',
          author: 'Фамилия И.О.',
          excerpt: 'Краткое содержание темы 2...',
          content: 'Полное содержание темы 2...'
        },
        {
          id: 4,
          topic: 'Тема сообщения 1',
          date: '18 января 13:15',
          author: 'Фамилия И.О.',
          excerpt: 'Краткое содержание темы 1...',
          content: 'Полное содержание темы 1...'
        },
        {
          id: 5,
          topic: 'Тема сообщения 2',
          date: '18 января 13:15',
          author: 'Фамилия И.О.',
          excerpt: 'Краткое содержание темы 2...',
          content: 'Полное содержание темы 2...'
        },
        {
          id: 6,
          topic: 'Тема сообщения 3',
          date: '18 января 13:15',
          author: 'Фамилия И.О.',
          excerpt: 'Краткое содержание темы 2...',
          content: 'Полное содержание темы 2...'
        },
        {
          id: 7,
          topic: 'Тема сообщения 1',
          date: '18 января 13:15',
          author: 'Фамилия И.О.',
          excerpt: 'Краткое содержание темы 1...',
          content: 'Полное содержание темы 1...'
        },
        {
          id: 8,
          topic: 'Тема сообщения 2',
          date: '18 января 13:15',
          author: 'Фамилия И.О.',
          excerpt: 'Краткое содержание темы 2...',
          content: 'Полное содержание темы 2...'
        },
        {
          id: 9,
          topic: 'Тема сообщения 3',
          date: '18 января 13:15',
          author: 'Фамилия И.О.',
          excerpt: 'Краткое содержание темы 2...',
          content: 'Полное содержание темы 2...'
        },
        {
          id: 10,
          topic: 'Тема сообщения 1',
          date: '18 января 13:15',
          author: 'Фамилия И.О.',
          excerpt: 'Краткое содержание темы 1...',
          content: 'Полное содержание темы 1...'
        },
        {
          id: 11,
          topic: 'Тема сообщения 2',
          date: '18 января 13:15',
          author: 'Фамилия И.О.',
          excerpt: 'Краткое содержание темы 2...',
          content: 'Полное содержание темы 2...'
        },
        {
          id: 12,
          topic: 'Тема сообщения 3',
          date: '18 января 13:15',
          author: 'Фамилия И.О.',
          excerpt: 'Краткое содержание темы 2...',
          content: 'Полное содержание темы 2...'
        },
        {
          id: 13,
          topic: 'Тема сообщения 3',
          date: '18 января 13:15',
          author: 'Фамилия И.О.',
          excerpt: 'Краткое содержание темы 2...',
          content: 'Полное содержание темы 2...'
        },
      ]
    }
  }
}
</script>

<style scoped>

.container-card {
  display: flex;
  flex-wrap: wrap;
  width: 1500px;
  margin-top: 20px;
}

.overflow-y-auto {
  max-height: none; 
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