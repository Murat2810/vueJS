const app = Vue.createApp({
  data() {
    return {
      userName: "John Doe",
      vTextExampleText:
        "Dieser Text ist mit vue.js kompiliert! Attribut v-text",
    };
  },
  directives: {
    highlight: {
      mounted(el) {
        el.style.border = "1px solid red";
        el.style.backgroundColor = "pink";
      },
    },
  },
}).mount("#app");
