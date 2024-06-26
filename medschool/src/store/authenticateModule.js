export default {
  state: {
    isAuthenticated: false,
    user: {
      avatar: '',
      fullName: '',
      accountLevel: ''
    }
  },
  mutations: {
    authenticate(state, userData) {
      state.isAuthenticated = true;
      state.user.avatar = userData.avatar;
      state.user.fullName = userData.fullName;
      state.user.accountLevel = userData.accountLevel;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user.avatar = '';
      state.user.fullName = '';
      state.user.accountLevel = '';
    }
  },
  actions: {
    login({ commit }, credentials) {
      if (credentials.login === 'user' && credentials.password === '123') {
        commit('authenticate', {
          avatar: 'path_to_avatar.jpg',
          fullName: 'Иван Иванов',
          accountLevel: '5'
        });
      }
    }
  }
}