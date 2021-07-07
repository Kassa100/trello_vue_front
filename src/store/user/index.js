import { register, login } from "@/api";
export default {
  namespaced: true,
  state: {
    info: null,
  },
  mutations: {
    initUserInfo: (state) => {
      try {
        let data = JSON.parse(localStorage.getItem("user"));
        state.info = data;
      } catch (error) {}
    },
    updateUserInfo: (state, data) => {
      state.info = data;
      localStorage.setItem("user", JSON.stringify(data));
    },
  },
  actions: {
    register: ({}, data) => {
      return register(data);
    },
    login: async ({ commit }, data) => {
      try {
        let rs = await login(data);
        commit("updateUserInfo", {
          id: rs.data.id,
          name: rs.data.name,
          authorization: rs.headers.authorization,
        });

        return rs;
      } catch (error) {
        throw error;
      }
    },
  },
};
