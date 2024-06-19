import { createApp } from 'vue'
import { createStore } from 'vuex'
import itemModule from '@/store/itemModule';
import cartModule from './cartModule';

const store = createStore({
  modules: {
    RestList: itemModule,
    CartItems: cartModule
  }
});

export default store