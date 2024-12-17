import { createApp } from 'vue'
import { createStore } from 'vuex'
import postModule from './postModule';
import authenticateModule from './authenticateModule';
import taskModule from './taskModule';
import answerModule from './answerModule';

const store = createStore({
  modules: {
    postModule,
    authenticateModule,
    taskModule,
    answerModule,
  }
});

export default store
