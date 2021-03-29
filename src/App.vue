<template>
  <v-app>
    <KeyIngredients />
    <DietSelect />
    <v-btn @click="getRandomRecipes">Find recipes</v-btn>
    <RecipeResults />
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import RecipeResults from "./components/RecipeResults"
import KeyIngredients from "./components/KeyIngredients"
import DietSelect from "./components/DietSelect"

export default {
  components: { RecipeResults, KeyIngredients, DietSelect },
  methods: {
    ...mapActions(["getRandomRecipes"])
  }
}
</script>

<style>
</style>