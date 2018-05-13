<template>
  <v-layout>
      <v-flex xs6 offset-xs3> 
          <v-card @click.native="clicked">
              <v-card-media src="https://picsum.photos/g/400/400" height="400px">
              </v-card-media>
              <h3 class="headline ma-2 ml-3">Welcome to one hell of a blog</h3>
              <v-card-text>There is so much interesting things to know, stay tuned</v-card-text>
              <v-card-text>Just to add some more text</v-card-text>
              <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing.</v-card-text>
          </v-card>
      </v-flex>
  </v-layout>
</template>

<script>
export default {
  methods: {
    clicked() {
      alert(`Don't click on me, mate!`);
    }
  }
};
</script>

<style>

</style>
