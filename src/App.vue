<template>
  <v-app>
    <KeyIngredients />
    <v-btn @click="getRandomRecipes">Find recipes</v-btn>
    <RecipeResults />
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import RecipeResults from "./components/RecipeResults"
import KeyIngredients from "./components/KeyIngredients"

export default {
  components: { RecipeResults, KeyIngredients },
  methods: {
    ...mapActions(["getRandomRecipes"])
  }
}
</script>

<style>
</style>