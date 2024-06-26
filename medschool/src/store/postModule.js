export default {
  state: {
    posts: []
  },
  getters: {
    // Геттер для получения поста по id
    getPostById: (state) => (id) => {
      return state.posts.find(post => post.id === id);
    }
  },
  mutations: {
    // Мутация для обновления списка постов
    updatePostsList(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    // Действие для вызова мутации обновления списка постов
    updatePostsList({ commit }, posts) {
      commit('updatePostsList', posts);
    }
  }
}
