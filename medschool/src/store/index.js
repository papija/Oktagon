import { createApp } from 'vue'
import { createStore } from 'vuex'
import postModule from './postModule';
import authenticateModule from './authenticateModule';

const store = createStore({
  modules: {
    postModule,
    authenticateModule,
  }
});

export default store
