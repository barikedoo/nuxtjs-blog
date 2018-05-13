<template>
  <v-app dark>

    <v-toolbar fixed app>

      <nuxt-link to="/">
        <v-icon>home</v-icon>
      </nuxt-link>

      <v-spacer></v-spacer>

      <span class="display-3 red--text">ADMIN AREA</span>

      <v-spacer></v-spacer>
    </v-toolbar>
    
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<style>
html {
  font-family: "Pangolin", cursive;
}
a {
  text-decoration: none;
}
</style>

