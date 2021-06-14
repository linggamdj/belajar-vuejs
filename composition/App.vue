<template>
  <button @click="increment">{{ count }}</button>
  <button @click="a++">{{ a }}</button>
  <button @click="b++">{{ b }}</button>
  <p>{{ total }}</p>
  <div v-for="number in history" :key="number">
    {{ number }}
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";

export default {
  setup() {
    const count = ref(0);
    const a = ref(0);
    const b = ref(0);
    const history = ref([]);

    const increment = () => {
      count.value++;
    };

    const total = computed(() => {
      return count.value + a.value + b.value;
    });

    watch([a, b], ([newA, newB], [oldA, oldB]) => {
      if (newA !== oldA) {
        history.value.push(`A: ${oldA} -> ${newA}`);
      }

      if (newB !== oldB) {
        history.value.push(`B: ${oldB} -> ${newB}`);
      }
    });

    return {
      a,
      b,
      history,
      count,
      total,
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