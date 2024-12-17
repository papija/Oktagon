<template>
  <v-main>
    <v-container fluid>
      <div class="topic-header" style="margin-top: 20px;">
        <strong style="font-size: 25px;">{{ post ? post.topic : 'Загрузка...' }}</strong>
      </div>
      <v-btn class="back-btn" to="/forum" style="margin-top: 10px;">Вернуться</v-btn>
      <div class="container-card" :style="{ maxHeight: isQuillEditorVisible ? '55ch' : '80ch' }">
        <div v-if="post" class="post">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center;">
              <v-avatar size="32px" class="mr-2">
                <v-img :src="userAvatar"></v-img>
              </v-avatar>
              <strong style="font-size: 16px;">{{ post.author }}</strong>
            </div>
            <p>{{ post.date }}</p>
          </div>
          <div class="post-content">
            <p v-html="post.content"></p>
          </div>

          <div class="replies-container">
            <v-icon class="mr-2" size="18"><v-img src="../assets/reply.png"></v-img></v-icon>
            <div class="reply" v-for="(reply, index) in post.replies" :key="reply.id" :class="{ 'first-reply': index === 0 }">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center;">
                  <v-avatar size="32px" class="mr-2">
                    <v-img :src="userAvatar"></v-img>
                  </v-avatar>
                  <strong style="font-size: 16px;">{{ reply.author }}</strong>
                </div>
                <p>{{ formatDate(reply.date) }}</p>
              </div>
              <div class="reply-content-wrapper">
                <div class="reply-content">
                  <p v-html="reply.content"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!isQuillEditorVisible" class="add-reply-container" @click="showQuillEditor">
        <v-avatar size="32px" class="mr-2">
          <v-img :src="userAvatar"></v-img>
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
      <section v-if="isQuillEditorVisible" class="quill-editor">
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
    </v-container>
  </v-main>
</template>

<script>
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import '@/css/snow-custom.css';
import '@/css/vuetify.css';
import avatar from '@/assets/avatar.png';

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      newReply: '',
      quill: null,
      isQuillEditorVisible: false,
      post: null,
    };
  },
  computed: {
    user() {
      return this.$store.getters['authenticateModule/user'];
    },
    userAvatar() {
      return this.user && this.user.avatar ? this.user.avatar : avatar;
    },
    userName() {
      if (this.user) {
        const lastName = this.user.lastName || '';
        const firstName = this.user.firstName ? this.user.firstName.charAt(0) + '.' : '';
        const middleName = this.user.middleName ? this.user.middleName.charAt(0) + '.' : '';
        return `${lastName} ${firstName} ${middleName}`.trim() || 'Гость';
      }
      return 'Гость';
    }
  },
  mounted() {
    this.loadPost();
  },
  methods: {
    loadPost() {
      const savedPost = JSON.parse(localStorage.getItem(`post_${this.id}`));
      if (savedPost) {
        this.post = savedPost;
      } else {
        const postFromStore = this.$store.getters.getPostById(this.id);
        if (postFromStore) {
          this.post = postFromStore;
          localStorage.setItem(`post_${this.id}`, JSON.stringify(this.post));
        } else {
          console.error(`Пост с ID ${this.id} не найден`);
        }
      }
    },
    showQuillEditor() {
      this.isQuillEditorVisible = true;
      this.$nextTick(() => {
        this.initQuillEditor();
      });
    },
    hideQuillEditor() {
      this.isQuillEditorVisible = false; 
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
    submitAnswer() {
      const content = this.quill.root.innerHTML;
      if (content.trim() && content !== '<p><br></p>') {
        this.quill.root.innerHTML = ''; 
        this.hideQuillEditor(); 

        const newReply = {
          id: Date.now(),
          author: this.userName,
          date: new Date(),
          content: content
        };
        this.post.replies.push(newReply); 

        localStorage.setItem(`post_${this.id}`, JSON.stringify(this.post));
      } else {
        console.error('Ответ не может быть пустым');
      }
    },
    formatDate(date) {
      if (!(date instanceof Date)) {
        date = new Date(date); 
      }
      if (isNaN(date.getTime())) {
        return 'Некорректная дата'; 
      }
      const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 
        'июня', 'июля', 'августа', 'сентября', 'октября', 
        'ноября', 'декабря'
      ];
      const day = String(date.getDate()).padStart(2, '0');
      const month = months[date.getMonth()];
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${day} ${month} ${hours}:${minutes}`;
    }
  }
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
  margin-left: 30px;
}

.first-reply .mdi-reply-icon {
  margin-left: 0px;
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

.add-reply-container {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background: #f9f9f9;
  margin-top: 10px;
  max-width: 1400px;
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

/* Quill editor */
.quill-editor {
  margin-top: 20px;
  border: none;
  box-shadow: none;
  max-width: 1400px;
  width: 100%;
}

.quill-editor-inner {
  display: flex;
  align-items: flex-start;
  width: 100%;
  border: 1px solid gray;
  border-radius: 12px;
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

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
