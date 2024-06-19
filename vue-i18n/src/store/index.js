import { createApp } from 'vue'
import { createStore } from 'vuex'
import itemModule from '@/store/itemModule';

const store = createStore({
  modules: {
    RestList: itemModule,
  }
});

export default store