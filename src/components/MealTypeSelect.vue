<template>
  <v-card height="100%">
    <v-card-title class="accent--text">Meal Type</v-card-title>
    <v-card-subtitle class="mt-6">
      <em>Filter results meal type</em>
    </v-card-subtitle>
    <v-card-text>
      <v-chip-group column :value="mealType" active-class="green--text">
        <v-chip
          :value="option"
          v-for="option in options"
          :key="option"
          @click="toggle(option)"
        >{{ option }}</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations, mapState } from "vuex"

export default {
  data() {
    return {
      options: ["Breakfast", "Lunch", "Main Course", "Side Dish", "Dessert"]
    };
  },
  methods: {
    ...mapMutations(["setMealType"]),
    toggle(option) {
      if (this.mealType === option) {
        this.setMealType(null);
      } else {
        this.setMealType(option);
      }
    }
  },
  computed: {
    ...mapState(["mealType"])
  }
}
</script>

<style>
</style>