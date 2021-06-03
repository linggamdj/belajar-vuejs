import * as Vue from "vue/dist/vue.esm-bundler.js";

const app = Vue.createApp({
  template: `
    <button
    v-on:click="increment"
    >
      Increment
    </button>
    <p
    v-bind:class="classColor(count)"
    >
      {{count}}
    </p>
  `,

  data() {
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },

  computed: {
    evenList() {
      return this.numbers.filter((num) => this.isEven(num));
    },
  },

  methods: {
    classColor(count) {
      return this.isEven(count) ? "blue" : "red";
    },

    increment() {
      this.count += 1;
    },

    isEven(number) {
      return number % 2 === 0;
    },
  },
});

app.mount("#app");
