import * as Vue from "vue/dist/vue.esm-bundler.js";

const app = Vue.createApp({
  template: `
    <div>
      <input
        v-bind:value="value"
        v-on:input="input"
      />
      <div class='red'>
        {{errorMessage}}
      </div>
    </div>

    <button
    v-on:click="increment"
    >
      Increment
    </button>

    <p
    v-bind:class="classColor(count)"
    >
      <div>
        {{count}}
      </div>
    </p>
  `,

  data() {
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      value: "",
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
    input($event) {
      this.value = $event.target.value;
    },

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
