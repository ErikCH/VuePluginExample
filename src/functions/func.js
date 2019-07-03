import Vue from 'vue';
import { plugin } from 'vue-function-api';
import { value } from 'vue-function-api';

Vue.use(plugin);

export const counter = value(0);
export const image = value('');

export const pressMe = () => {
  counter.value++;
  console.log(counter.value);
};
export const getDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(res2 => {
      image.value = res2.message;

      counter.value++;
    });
};
