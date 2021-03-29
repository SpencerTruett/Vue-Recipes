<template>
  <v-app>
    <KeyIngredients />
    <DietSelect />
    <MealTypeSelect />
    <v-btn @click="getRandomRecipes">Find recipes</v-btn>
    <RecipeResults />
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