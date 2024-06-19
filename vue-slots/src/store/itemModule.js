export default {
  state: {
    items_list: [],
  },
  mutations: {
    setItemsList(state, items) {
      state.items_list = items;
    },
  },
  actions: {
    updateItemsList({ commit }, items) {
      commit('setItemsList', items);
    },
  },
  getters: {
    getItemsList: (state) => (id) => {
      return state.items_list.find(item => item.id === id);
    },
    getMenuByCafeId: (state) => (id) => {
      const items_list = state.items_list.find(e => e.id === id);
      return items_list ? items_list.products : [];
    }
  }
}
