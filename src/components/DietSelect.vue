<template>
  <v-card height="100%">
    <v-card-title class="accent--text">Diet Restrictions</v-card-title>
    <v-card-subtitle class="mt-6">
      <em>Filter results by dietary restrictions</em>
    </v-card-subtitle>
    <v-card-text>
      <v-chip-group column :value="diets" multiple active-class="primary--text">
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
export default {
  data() {
    return {
      options: ["Gluten Free", "Ketogenic", "Vegetarin", "Vegan", "Pescatarian", "Paleo", "Whole30"]
    };
  }
}
</script>

<style>
</style>