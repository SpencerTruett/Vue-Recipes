<template>
  <v-card height="100%">
    <v-card-title class="accent--text">Key Ingredients</v-card-title>
    <v-card-text>
      <div class="pb-6" v-if="ingredients.length">
        <v-chip-group column>
          <v-chip
            v-for="ing in ingredients"
            :key="ing"
            close
            @click:close="removeIngredient(ing)"
            color="primary"
          >{{ ing }}</v-chip>
        </v-chip-group>
      </div>
      <v-card-subtitle v-else>
        <em>No key ingredients</em>
      </v-card-subtitle>
      <v-form @submit.prevent="submit">
        <v-text-field filled outlined label="Add an ingredient" v-model="ingredient" />
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations, mapState } from "vuex"

export default {
  data() {
    return {
      ingredient: ""
    };
  },
  methods: {
    ...mapMutations(["addIngredient", "removeIngredient"]),
    submit() {
      this.addIngredient(this.ingredient);
      this.ingredient = "";
    }
  },
  computed: {
    ...mapState(["ingredients"])
  }
}
</script>

<style>
</style>