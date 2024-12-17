export default {
    state: {
        answers: [] // Массив для хранения ответов
      },
      mutations: {
        ADD_ANSWER(state, answer) {
          state.answers.push(answer);
        }
      },
      actions: {
        addAnswer({ commit }, answer) {
          commit('ADD_ANSWER', answer);
        }
      },
      getters: {
        allAnswers: state => state.answers
      }
    }
  