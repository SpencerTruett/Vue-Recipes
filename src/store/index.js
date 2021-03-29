import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResults: [],
    ingredients: [],
  },
  mutations: {
    setSearchResults(state, payload) {
      state.searchResults = payload;
    },
    addIngredient(state, payload) {
      state.ingredients = [...state.ingredients, payload];
    },
    removeIngredient(state, payload) {
      state.ingredients = state.ingredients.filter(i => {
        return i !== payload;
      });
    }
  },
  actions: {
    async getRandomRecipes({ commit }) {
      const apiBaseUrl = "https://api.spoonacular.com/recipes";
      const apiKey = process.env.VUE_APP_SPOONACULAR_KEY;
      const url = `${apiBaseUrl}/random?number=3&apiKey=${apiKey}`;

      const res = await fetch(url);
      const data = await res.json();
      commit("setSearchResults", data.recipes);
    }
  },
  modules: {},
});
