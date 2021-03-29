<template></template>

<script>
import { mapMutations, mapState } from "vuex"

export default {
  data() {
    return {
      ingredient: ""
    };
  },
  methods: {
    ...mapMutations(["addIngredient", "removeIngredient"])
  },
  computed: {
    ...mapState(["ingredients"])
  }
}
</script>

<style>
</style>