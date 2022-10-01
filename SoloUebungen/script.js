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

      // v-for mit Basic Array
      fruits: [
        "Apple",
        "Banana",
        "Melon",
        "Blueberry",
        "Strawberry",
        "Ananas",
        "Mango",
      ],


      // v-for mit object literal
      fruitsObjects: {
        Apple: "🍎",
        Banana: "🍌",
        Melon: "🍉",
        Strawberry: "🍓",
        Ananas: "🍍",
      },

      // v-for mit json ähnlichen Daten
      fruitsJson: [
         	{
        id: 41,
        name: "Apple",
        emoji: "🍎",
     	},
        {
        id: 22,
        name: "Melon",
        emoji: "🍉",
	},
        {
        id: 32,
        name: "Banana",
        emoji: "🍌",
	},
	{
	id: 92,
        name: "Strawberry",
        emoji: "🍓",
	},
	{      
	id: 52,
        name: "Ananas",
        emoji: "🍍",
	},
      ],

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
