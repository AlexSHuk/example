import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: [],
    total_pages: undefined,
    page: 1,
  },
  getters: {
    getUsers: (state) => state.users,
    getTotalPages: (state) => state.total_pages,
    getPage: (state) => state.page,
  },
  mutations: {
    setUsers: (state, payload) => (state.users = payload),
    setTotalPages: (state, payload) => (state.total_pages = payload),
    incrementPage: state => state.page++,
    resetPage: state => (state.page = 1)
  },
  actions: {
    async fetchUsers({ commit, state }) {
      await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${state.page}&count=6`
      )
        .then((res) => res.json())
        .then(({ users, total_pages }) => {
          commit("setTotalPages", total_pages);
          commit("setUsers", [...state.users, ...users]);
        });
    },
  },
});

export default store;
