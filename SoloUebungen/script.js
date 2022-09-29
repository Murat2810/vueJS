const app = Vue.createApp({
  data() {
    return {
      userName: "John Doe",
      vTextExampleText:
        "Dieser Text ist mit vue.js kompiliert! Attribut v-text",
      width: 400,
      height: 400,
      
      // v-bind per element method
      imgAttrs: {
        class: "red",
        src: "https://picsum.photos/200/300",
        alt: "Hard to describe",
        title: "Something random from picsum",
      },
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
