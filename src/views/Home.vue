<template>
  <div class="home">
    <h1>Random Dog Images</h1>
    <h2>Dog Count {{counter}}</h2>
    <button @click="getDog">Get Dogs</button>
    <div class="dog-wrapper">
      <div class="picture-dog">
        <img :src="image" alt />
      </div>
      <button v-on:click="pressMe">Increment Dog Count</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  created() {
    this.getDog();
  },
  methods: {
    pressMe() {
      this.counter++;
      console.log(this.counter);
    },
    getDog() {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(res2 => {
          this.image = res2.message;

          this.counter++;
        });
    }
  },
  data() {
    return {
      counter: 0,
      image: ""
    };
  }
};
</script>
<style lang="css">
button {
  color: blue;
  background-color: white;
  border-radius: 10px;
  font-size: 2rem;
  border-style: solid;
  border-color: bisque;
  box-shadow: inset 0px 1px 0px rgba(75, 166, 255, 0.3);
  outline: none;
}

button:hover {
  text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
  transition: all 0.4s ease 0s;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
}
img {
  max-width: 30%;
  padding: 30px;
}
* {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}
h1 {
  color: crimson;
}
</style>
