<template>
  <v-app>
    <v-btn @click="getRandomRecipes">Find recipes</v-btn>
    <RecipeResults />
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import RecipeResults from "./components/RecipeResults"

export default {
  components: { RecipeResults },
  methods: {
    ...mapActions(["getRandomRecipes"])
  }
}
</script>

<style>
</style>