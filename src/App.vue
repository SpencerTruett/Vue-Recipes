<template>
  <v-app>
    <v-btn @click="getRandomRecipes">Find recipes</v-btn>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["getRandomRecipes"])
  }
}
</script>

<style>
</style>