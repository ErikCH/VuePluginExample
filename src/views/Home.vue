<template>
  <div class="home">
    <h1>Random Dog Images By Erik</h1>
    <h2>Dog Count {{counter}}</h2>
    <button @click="getDog">Get Dogs</button>
    <h2>Lets go Brought To You By Buddy</h2>
    <div class="dog-wrapper">
      <div class="picture-dog">
        <img :src="image" alt />
      </div>
      <button id="myCounter" v-on:click="pressMe">Increment Dog Count</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { onCreated } from "vue-function-api";
import { getDog, pressMe, counter, image } from "../functions/func";

export default {
  name: "home",
  components: {},
  setup() {
    onCreated(() => {
      getDog();
    });

    return {
      pressMe,
      getDog,
      counter,
      image
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
