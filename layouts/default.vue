<template>
  <v-app>

    <v-toolbar fixed app>

      <nuxt-link to="/">
        <v-icon>home</v-icon>
      </nuxt-link>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn nuxt to="/posts" flat>Blog</v-btn>
        <v-btn nuxt to="/about" flat>About</v-btn>
        <v-btn nuxt to="/admin" flat>Admin
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>
    
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer fixed app>
      <span>&copy; 2018</span>clearclearc
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style>
  html {
    font-family: 'Pangolin', cursive;
  }
  a {
    text-decoration: none;
  }
</style>

