<template>
  <v-app>
    <v-main class="container mt-10">
      <h1 class="text-center primary--text mb-4">Recipe Assistant</h1>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <key-ingredients />
          </v-col>
          <v-col cols="12" md="4">
            <diet-select />
          </v-col>
          <v-col cols="12" md="4">
            <meal-type-select />
          </v-col>
        </v-row>
        <v-row class="justify-center mt-10">
          <v-btn color="primary" @click="getRandomRecipes">Find recipes</v-btn>
        </v-row>
        <recipe-results />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import RecipeResults from "./components/RecipeResults"
import KeyIngredients from "./components/KeyIngredients"
import DietSelect from "./components/DietSelect"
import MealTypeSelect from "./components/MealTypeSelect"

export default {
  components: { RecipeResults, KeyIngredients, DietSelect, MealTypeSelect },
  methods: {
    ...mapActions(["getRandomRecipes"])
  }
}
</script>

<style>
</style>