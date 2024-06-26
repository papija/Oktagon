<template>
  <v-main>
    <v-container fluid>
        <div class="topic-header" style="margin-top: 20px;">
          <strong style="font-size: 25px;">{{ post.topic }}</strong>
        </div>
        <v-btn class="back-btn" to="/forum" style="margin-top: 20px;">Вернуться</v-btn>
      <div class="container-card">
        <div v-if="post" class="post">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center;">
              <v-avatar size="32px" class="mr-2">
                <v-img src="../assets/avatar.png"></v-img>
              </v-avatar>
              <strong style="font-size: 16px;">{{ post.author }}</strong>
            </div>
            <p>{{ post.date }}</p>
          </div>
          <div class="post-content">
            <p>{{ post.content }}</p>
          </div>

          <div class="replies-container">
            <v-icon class="mr-2" size="18"><v-img src="../assets/reply.png"></v-img></v-icon>
            <div class="reply" v-for="(reply, index) in post.replies" :key="reply.id" :class="{ 'first-reply': index === 0 }">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center;">
                  <v-avatar size="32px" class="mr-2">
                    <v-img src="../assets/avatar.png"></v-img>
                  </v-avatar>
                  <strong style="font-size: 16px;">{{ reply.author }}</strong>
                </div>
                <p>{{ reply.date }}</p>
              </div>
              <div class="reply-content-wrapper">
                <div class="reply-content">
                  <p>{{ reply.content }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="add-reply-container">
            <v-avatar size="32px" class="mr-2">
              <v-img src="../assets/avatar.png"></v-img>
            </v-avatar>
            <v-text-field
              v-model="newReply"
              placeholder="Напишите ответ..."
              variant="solo-filled"
              hide-details
              class="reply-input"
            ></v-text-field>
            <v-btn @click="submitReply" class="add-reply-btn" color="#4BA285" style="height: 40px;">Добавить ответ</v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      newReply: ''
    };
  },
  computed: {
    post() {
      return this.$store.getters.getPostById(this.id);
    }
  },
  mounted() {
    this.loadPost();
  },
  methods: {
    loadPost() {
      // Подгружаем данные поста по ID из стора
      this.post = this.$store.getters.getPostById(this.id);

      // Проверка наличия поста
      if (!this.post) {
        console.error(`Пост с ID ${this.id} не найден`);
      }
    },
    submitReply() {
      if (this.newReply.trim()) {
        
        console.log('Новый ответ:', this.newReply);

        
        this.newReply = '';
      } else {
        console.error('Ответ не может быть пустым');
      }
    }
  },
};
</script>

<style scoped>
.back-btn {
  font-weight: normal;
  font-size: 14px;
  background: #EDF5F1;
  box-shadow: none;
  text-transform: capitalize;
}

.container-card {
  padding: 16px;
  max-width: 1400px;
  max-height: 75ch;
  overflow-y: auto;
  overflow-x: hidden;
}

.post-content {
  max-height: 100ch;
}

.replies-container {
  max-width: 1400px;
  margin-top: 10px;
  max-height: 55ch;
}

.replies-container .reply {
  margin-left: 30px; /* Отступ слева для всех ответов, кроме первого */
}

.first-reply .mdi-reply-icon {
  margin-left: 0px; /* Отступ слева для иконки mdi-reply перед первым ответом */
}

/* Изменение стиля scrollbar */
::-webkit-scrollbar {
  width: 6px;
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #4ba285;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #36715d;
  border-radius: 10px;
}

.add-reply-container {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background: #f9f9f9;
  position: fixed;
  bottom: 20px;
  width: calc(100% - 32px);
  max-width: calc(1400px - 32px);
  max-height: 100px;
}

.reply-input {
  flex-grow: 1;
  background: #edf5f1;
}

.add-reply-btn {
  font-weight: normal;
  font-size: 14px;
  background: #4ba285;
  color: white;
}
</style>
