const app = Vue.createApp({
  data() {
    return {
      keydown: "",
      enter: "",
    };
  },
  methods: {
    onKeyDown(event) {
      this.keydown = event.target.value;
    },
    onEnter(event) {
      this.enter = event.target.value;
    },
    showAlert() {
      window.alert("Hello World !");
    },
  },
});

app.mount("#exercise");
