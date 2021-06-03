import * as Vue from "vue/dist/vue.esm-bundler.js";

const Num = {
  props: ["number"],
  template: `
    <div v-bind:class="classColor(number)">
      {{number}}
    </div>
  `,

  methods: {
    classColor(number) {
      return this.isEven(number) ? "blue" : "red";
    },

    isEven(number) {
      return number % 2 === 0;
    },
  },
};

const app = Vue.createApp({
  components: {
    Num,
  },

  template: `
    <div>
      <input
        type="checkbox"
        v-model="value"
        value="a"
      >

      <input
        type="checkbox"
        v-model="value"
        value="b"
      >

      {{value}}

    </div>

    <button
    v-on:click="increment"
    >
      Increment
    </button>

    <p
    v-bind:class="'blue'"
    >
      <div>
        {{count}}
      </div>
    </p>

    <num
      v-bind:number="number"
      v-for="number in numbers"
    />
  `,

  data() {
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      value: ["a", "b"],
    };
  },

  computed: {
    evenList() {
      return this.numbers.filter((num) => this.isEven(num));
    },

    errorMessage() {
      if (this.value.length < 5) {
        return "kependekan";
      }
    },
  },

  methods: {
    increment() {
      this.count += 1;
    },
  },
});

app.mount("#app");
