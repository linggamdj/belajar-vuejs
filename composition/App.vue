<template>
  <button @click="increment">{{ count }}</button>
</template>

<script>
// For making obj reactive (example: count variable)
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value++;
    };

    return {
      count,
      increment,
    };
  },
};
</script>

<style scoped>
button {
  width: 100px;
  height: 100px;
  font-size: 50px;
}
</style>