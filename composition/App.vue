<template>
  <button @click="increment">{{ count }}</button>
  <button @click="increase('a')">{{ numbers.a }}</button>
  <button @click="increase('b')">{{ numbers.b }}</button>
</template>

<script>
// ref -> still manage to uses primitive types (number, string)
// reactive -> must pass it first into an object
import { ref, reactive } from "vue";

export default {
  setup() {
    const count = ref(0);
    const numbers = reactive({
      a: 0,
      b: 0,
    });

    const increase = (n) => {
      numbers[n]++;
    };

    const increment = () => {
      count.value++;
    };

    return {
      count,
      numbers,
      increase,
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