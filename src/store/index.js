import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const apiURL = `https://api.spoonacular.com/recipes/random?number=3&apiKey=${process.env.VUE_APP_SPOONACULAR_KEY}`;

export default new Vuex.Store({
  state: {
    searchResults: [],
    ingredients: [],
    diets: [],
    mealType: null
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
    },
    addDiet(state, payload) {
      state.diets = [...state.diets, payload];
    },
    removeDiet(state, payload) {
      state.diets = state.diets.filter(d => {
        return d !== payload;
      });
    },
    setMealType(state, payload) {
      state.mealType = payload;
    },
  },
  actions: {
    async getRandomRecipes({ getters, commit }) {
      // const apiBaseUrl = "https://api.spoonacular.com/recipes";
      // const apiKey = process.env.VUE_APP_SPOONACULAR_KEY;
      // const url = `${apiBaseUrl}/random?number=3&apiKey=${apiKey}`;

      const res = await fetch(getters.recipeURL);
      const data = await res.json();
      commit("setSearchResults", data.recipes);
    }
  },
  getters: {
    recipeURL({ ingredients, diets, mealType }) {
      const tags = [...ingredients, ...diets, mealType].join(",").toLowerCase();
      return `${apiURL}&tags=${tags}`;
    }
  },
  modules: {},
});
