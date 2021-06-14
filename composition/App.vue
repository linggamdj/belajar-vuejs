<template>
  <button @click="increment">{{ count }}</button>
  <button @click="increase('a')">{{ numbers.a }}</button>
  <button @click="increase('b')">{{ numbers.b }}</button>
  <p>{{ total }}</p>
</template>

<script>
import { ref, reactive, computed } from "vue";

export default {
  setup() {
    // ref -> still manage to uses primitive types (number, string)
    const count = ref(0);

    // reactive -> must pass it first into an object
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

    // computed example
    const total = computed(() => {
      return count.value + numbers.a + numbers.b;
    });

    return {
      count,
      numbers,
      total,
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