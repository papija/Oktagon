<template>
  <v-main>
    <v-container fluid>
      <div class="topic-header">
        <strong style="font-size: 25px;">Задача</strong>
      </div>
      <v-btn class="back-btn" to="/tasks" style="margin-top: 10px;">Вернуться</v-btn>

      <v-card class="container-card">
        <v-card v-if="task" class="task">
          <v-card-title>
            <div class="task-header">
              <h2 class="task-title">{{ task.title }}</h2>
              <span class="task-date">{{ task.date }}</span>
            </div>
          </v-card-title>
          <v-card-text>
            <div class="task-content">
              <p>{{ task.content }}</p>
            </div>
            <section>
              <v-checkbox
                v-for="answer in task.answers"
                :key="answer.id"
                :id="'checkbox-' + answer.id"
                :label="answer.text"
                :value="answer.id"
                @change="selectAnswer(answer.id)"
                v-model="selectedAnswer"
                class="custom-checkbox"
              ></v-checkbox>
            </section>
            <section class="quill-editor">
              <v-row>
                <v-col class="quill-editor-inner" cols="12">
                  <v-avatar class="avatar-container">
                    <img :src="userAvatar" alt="Avatar" class="user-avatar" />
                  </v-avatar>
                  <v-col class="quill-editor-container">
                    <div ref="quillEditor" class="quill-editor-content"></div>
                    <v-btn class="submit-btn" @click="submitAnswer">Добавить ответ</v-btn>
                  </v-col>
                </v-col>
              </v-row>
            </section>
          </v-card-text>
        </v-card>
        <v-card v-else>
          <v-card-text>
            <p>Задача не найдена.</p>
          </v-card-text>
        </v-card>
      </v-card>

      <v-dialog v-model="errorDialog" max-width="400px" transition="dialog-bottom-transition">
        <v-card>
          <v-card-title class="headline">
            <v-icon left color="red">mdi-alert-circle</v-icon>
            Ошибка
          </v-card-title>
          <v-card-text>
            <p style="font-size: 16px; color: #333;">Пожалуйста, выберите хотя бы один ответ перед отправкой.</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#4BA285" @click="errorDialog = false" text>Закрыть</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-main>
</template>

<script>
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import '@/css/snow-custom.css';
import avatar from '@/assets/avatar.png';

export default {
  data() {
    return {
      selectedAnswer: null,
      newAnswer: '',
      quill: null,
      errorDialog: false,
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    task() {
      return this.$store.getters.getTaskById(this.id);
    },
    user() {
      return this.$store.getters['authenticateModule/user'];
    },
    isAuthenticated() {
      return this.$store.getters['authenticateModule/isAuthenticated'];
    },
    userAvatar() {
      return this.user && this.user.avatar ? this.user.avatar : avatar;
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        if (this.$refs.quillEditor) {
          this.initQuillEditor();
        } else {
          console.error('Контейнер для Quill не найден');
        }
      }, 100);
    });
  },
  methods: {
    selectAnswer(answerId) {
      this.selectedAnswer = answerId;
    },
    initQuillEditor() {
      const quillContainer = this.$refs.quillEditor;

      if (quillContainer) {
        const quillOptions = {
          theme: 'snow',
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['separator'],
              [{ 'align': [] }, 'blockquote'],
              ['separator'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              ['separator'],
              ['link', 'image'],
              ['separator'],
              [{ 'color': [] }, { 'background': [] }],
              ['separator'],
              [{ 'font': [] }, { 'size': ['small', 'medium', 'large', 'huge'] }],
              ['separator'],
              [{ 'indent': '-1'}, { 'indent': '+1'}],
              ['separator'],
              ['clean'],
            ]
          }
        };

        this.quill = new Quill(quillContainer, quillOptions);
      } else {
        console.error('Контейнер для Quill не найден');
      }
    },
    formatDate(date) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${day}.${month}.${year} ${hours}:${minutes}`;
    },
    submitAnswer() {
      if (!this.selectedAnswer) {
        this.errorDialog = true;
        return;
      }

      const content = this.quill.root.innerHTML;
      if (content.trim()) {
        this.newAnswer = content;

        if (!this.user || !this.user.firstName || !this.user.lastName) {
          console.error('Пользователь не аутентифицирован или данные о пользователе отсутствуют');
          alert('Ошибка: пользователь не аутентифицирован. Пожалуйста, войдите в систему.');
          return;
        }

        const answerData = {
          date: this.formatDate(new Date()),
          taskId: this.id,
          authorName: `${this.user.firstName} ${this.user.lastName} ${this.user.middleName || ''}`,
          selectedAnswerId: this.selectedAnswer
        };

        this.$store.dispatch('checkAnswer', answerData)
          .then(isCorrect => {
            this.$router.push({ path: '/cond', query: { taskId: this.id } });
            this.clearEditor();
          })
          .catch(err => {
            console.error(err);
          });
      } else {
        alert('Пожалуйста, введите ответ.');
      }
    },
    clearEditor() {
      this.newAnswer = '';
      this.quill.root.innerHTML = '';
    }
  }
};
</script>

<style scoped>
.topic-header {
  margin-top: 20px;
}
.back-btn {
  font-weight: normal;
  font-size: 14px;
  background: #EDF5F1;
  box-shadow: none;
  text-transform: capitalize;
}
.v-card {
  box-shadow: none;
  border: none;
}
.container-card {
  padding: 2px;
  max-width: 1400px;
  max-height: 90ch;
  overflow-y: auto;
  overflow-x: hidden;
}
.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task-title {
  font-size: 16px;
}
.task-content {
  max-height: 100ch;
}
.quill-editor {
  margin-top: 20px;
  border: none;
  box-shadow: none;
}
.quill-editor-inner {
  display: flex;
  align-items: flex-start;
  width: 100%;
  border: 1px solid gray;
  border-radius: 12px;
}
.avatar-container {
  margin-right: 4px;
}
.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
.quill-editor-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative; 
  max-width: 1220px;
}
.quill-editor-content {
  height: 180px;
  padding: 10px;
  background-color: white;
  border: none;
  box-shadow: none;
  flex-grow: 1;
}
.submit-btn {
  margin-top: auto;
  align-self: flex-end;
  background-color: #4BA285;
  color: white;
  border-radius: 6px;
}
.quill-editor-container {
  min-height: 250px;
  padding: 10px;
  background-color: white;
  border: none;
  box-shadow: none;
}
.custom-checkbox {
  display: flex;
  align-items: center;
  margin-bottom: -15px;
}
.checkbox-input {
  width: 16px;
  height: 16px; 
  margin-right: 16px;
  cursor: pointer;
}
label {
  cursor: pointer;
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
  background: #4ba285;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #36715d;
  border-radius: 10px;
}
</style>
