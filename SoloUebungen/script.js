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
        Apple: "π",
        Banana: "π",
        Melon: "π",
        Strawberry: "π",
        Ananas: "π",
      },

      // v-for mit json Γ€hnlichen Daten
      fruitsJson: [
         	{
        id: 41,
        name: "Apple",
        emoji: "π",
     	},
        {
        id: 22,
        name: "Melon",
        emoji: "π",
	},
        {
        id: 32,
        name: "Banana",
        emoji: "π",
	},
	{
	id: 92,
        name: "Strawberry",
        emoji: "π",
	},
	{      
	id: 52,
        name: "Ananas",
        emoji: "π",
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
